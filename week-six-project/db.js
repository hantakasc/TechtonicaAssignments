import { Pool } from 'pg';

const pool = new Pool({
  user: 'christinahantakas', 
  host: 'localhost',
  database: 'songs_db', 
  password: '', 
  port: 5432,
});

export default pool;
