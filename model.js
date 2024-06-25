
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');


async function initializeDb() {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

 
  await db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    email TEXT
  )`);

  return db;
}

module.exports = { initializeDb };
