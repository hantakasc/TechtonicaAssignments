import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import BookForm from './BookForm';


const Books = () => {
    // State to hold the list of books fetched from the server
    const [books, setBooks] = useState([]);
    // State to keep track of books that are being edited
    const [editBook, setEditBook] = useState(null);
    // State to see app is loading data
    const [loading, setLoading] = useState(true);
     // State for error message if fetching fails
    const [error, setError] = useState('');
     
     // Function to fetch books from the backend API
    const fetchBooks = async () => {
        setLoading(true); // Set loading to true while fetching data
        setError(''); // Clear any previous error messages
     try {
        // Make a request to server to get list of books using fetch
        const response = await fetch('http://localhost:8080/api/books');
        // Check if the response is not okay (like a 404 error)
        if (!response.ok) throw new Error('Failed to fetch books');
        const data = await response.json(); //Parse the JSON response into a JavaScript object
        setBooks(data); // Update the books state with the fetched data
    } catch (error) {
        // If there's an error, set the error message
        setError('Error fetching books:' + error.message);
    } finally{
        setLoading(false); 
    }
};

    // useEffect hook runs after the component mounts
    useEffect(() => {
        fetchBooks(); // Call fetchBooks to load the initial list of books
    }, []); // Empty array means this runs only once when the component mounts
   
    // Function to handle adding a new book
    const handleAddBook = async (newBook) => {
        try {
           // Make a POST request to add a new book
           await fetch('http://localhost:8080/api/books', {
            method: 'POST', // Sending data to create a new resource
            headers: {
                'Content-Type': 'application/json', // Tell the server we're sending JSON data
            },
            body: JSON.stringify(newBook), // Convert the newBook object to a JSON string
           });
           fetchBooks(); // Refresh the list of books after adding
        } catch (error) {
            // If there is an error, set the error message
            setError('Error adding book:' + error.message);
        }
    };

    // Function to handle update an existing book
    const handleUpdateBook = async (updatedBook) => {
        try{
            // Make a PUT request to update an existing book
            await fetch(`http://localhost:8080/api/books/${updatedBook.book_id}`, {
                method: 'PUT', // We're updating an already existing resource
                headers: {
                    'Content-Type': 'application/json', // Tell the server we're sending JSON data
                }, 
                body: JSON.stringify(updatedBook), // Convert the updatedBook object to a JSON string
            });
            setEditBook(null); // Clear the editBook state after updating
            fetchBooks(); // Refresh the list of books after updating
        } catch (error) {
            // If there's an error, set the error message
            setError('Error updating book:' + error.message);
        }
    };

    // Function to handle deleting a book
    const handleDeleteBook = async (id) => {
        try {
            await fetch(`http://localhost:8080/api/books/${id}`, {
                method: 'DELETE', // The request method is deletion
            });
            fetchBooks(); // Refresh the book list
        } catch (error) {
            console.error('Error deleting the book', error); // Tells us any errors
        }
    };
    return (
        <div>
             {loading && <p>Loading...</p>} 
             {error && <p style={{ color: 'red' }}>{error}</p>}  
            <BookForm 
            onSubmit={editBook ? handleUpdateBook : handleAddBook}
            editBook={editBook} // Passing book to be edited
            />
            <ul>
                {books.map((book) => (
                    <BookItem
                    key={book.book_id} // Unique key each book
                    book={book} // Passing the book data
                    onEdit={() => setEditBook(book)} // Setting the current book for editing
                    onDelete={() => handleDeleteBook(book.book_id)} // This handles deletion
                     />
                ))}
            </ul>
        </div>
    );
};



export default Books;