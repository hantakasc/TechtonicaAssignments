import express from 'express';
import cors from 'cors';
import pool from './db.js'; // Make sure this path is correct

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// GET all songs
app.get('/api/songs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM songs');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching songs:', err.message);
        res.status(500).send('Server error');
    }
});

// GET a single song by title
app.get('/api/songs/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const result = await pool.query('SELECT * FROM songs WHERE song = $1', [title]);
        if (result.rows.length === 0) return res.status(404).send('Song not found');
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching song:', err.message);
        res.status(500).send('Server error');
    }
});

// POST a new song
app.post('/api/songs', async (req, res) => {
    const { artist, song, album, year } = req.body;
    try {
        if (!artist || !song || !album || !year) {
            return res.status(400).send('Missing required fields');
        }
        const result = await pool.query(
            'INSERT INTO songs (artist, song, album, year) VALUES ($1, $2, $3, $4) RETURNING *',
            [artist, song, album, year]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error adding song:', err.message);
        res.status(400).send('Invalid data');
    }
});

// PUT (update) an existing song by title
app.put('/api/songs/:title', async (req, res) => {
    const { title } = req.params;
    const { artist, song, album, year } = req.body;
    try {
        const result = await pool.query(
            'UPDATE songs SET artist = COALESCE($1, artist), song = COALESCE($2, song), album = COALESCE($3, album), year = COALESCE($4, year) WHERE song = $5 RETURNING *',
            [artist, song, album, year, title]
        );
        if (result.rows.length === 0) return res.status(404).send('Song not found');
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error updating song:', err.message);
        res.status(400).send('Invalid data');
    }
});

// DELETE a song by title
app.delete('/api/songs/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const result = await pool.query('DELETE FROM songs WHERE song = $1 RETURNING *', [title]);
        if (result.rows.length === 0) return res.status(404).send('Song not found');
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error deleting song:', err.message);
        res.status(500).send('Server error');
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Songs API! Use /api/songs to access the songs data.');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
