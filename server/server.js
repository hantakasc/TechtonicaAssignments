const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');
const { title } = require('process');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// create the get request for books in the endpoint '/api/books'
app.get('/api/books', async (req, res) => {
    try {
        const { rows: books } = await db.query('SELECT * FROM books');
        res.send(books);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/books', async (req, res) => {
    try {
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publication_date: req.body.publication_date
        };
        //console.log([newBook.title, neBook.author, newBook.publication_date]);
        const result = await db.query(
            'INSERT INTO books(title, author, publication_date) VALUES($1, $2, $3) RETURNING *',
            [newBook.title, newBook.author, newBook.publication_date],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for books
app.delete('/api/books/:bookId', async (req, res) => {
    try {
        const bookId = req.params.bookId;
        await db.query('DELETE FROM books WHERE id=$1', [bookId]);
        console.log("From the delete request-url", bookId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a book 
app.put('/api/books/:bookId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the book to be updated
    const bookId = req.params.bookId
    const updatedBook = { id: req.body.id, author: req.body.author, title: req.body.title, publication_date: req.body.publication_date}
    console.log("In the server from the url - the book id", bookId);
    console.log("In the server, from the react - the book to be edited", updatedBook);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE books SET title=$1, author=$2, publication_date=$3 WHERE id=${bookId} RETURNING *`;
    const values = [updatedBook.title, updatedBook.author, updatedBook.publication_date];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on ${PORT}`);
});