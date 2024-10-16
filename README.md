# Book Manager

## Description
Book Manager is a web application that allows users to manage their book collection, including adding, editing, and deleting books.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)


## Installation
To install and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <https://github.com/hantakasc/TechtonicaAssignments/tree/bookmanager>

## Set Up the Server
1. Navigate to the server directory
cd server

2. Install the server dependencies
npm install

3. Create a .env file in the server directory and add your database credentials
DB_URI="postgresql://<user>:<password>@localhost/<database>"

4. Start the server
npm run dev

## Set Up the Client
1. Navigate to the client directory
cd ../client

2. Install dependencies
npm install

3. Start the client
npm run dev

## Features 
- Add, edit, or delete books.
- Search and filter books by title and author.

## Tech Stack
- **Fontend:** React, Vite
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Testing:** Jest, React Testing Library

## API Endpoints

### Books API

- GET /api/books - Retrieve a list of all books.
- POST /api/books - Add a new book.
- GET /api/books:bookId - Get a single book by ID.
- PUT /api/books:bookId - Update an existing book by ID.
- DELETE /api/books:bookId - Delete a book by ID.

## Running Tests 
To run tests for the client and the server follow these steps:

### Client Tests
1. Navigate to the client directory
cd client

2. Run the tests 
npm test

### Server Tests
1. Navigate to the server directory 
cd ../server

2. Run the tests
npm test

## License
This project is licensed under the MIT License - see the LICENSE file for details