import React, { useState, useEffect } from 'react';

// Functional component named BookForm
const BookForm = ({ onSubmit, editBook }) => {
 
    const [title, setTitle] = useState(''); // State for the book title
    const [author, setAuthor] = useState(''); // State for the author
    const [publicationDate, setPublicationDate] = useState(''); // State for the publication date

    // useEffect that runs when the component mounts or when editBook changes
    useEffect(() => {
        // if editBook is not null the values are populated
    if (editBook) {
        setTitle(editBook.title); // Set the title state to the title of the book being edited
        setAuthor(editBook.author); // Set the state to the author of the book being edited
        setPublicationDate(editBook.publication_Date); // Set state of publication date
    }
        }, [editBook]); // This will run whenever editBook changes

    const handleSubmit = (e) => {
        e.preventDefault(); // This will prevent the default for submission behavior
        // if a book is being edited, book_id is used to identify it
        if (editBook) {
            onSubmit({
                book_id: editBook.book_id, // Include the id of the book being edited 
                title, // Current title from state
                author, // Current author from state
                publication_Date: publicationDate, // Current publication date from state
            });
        } else {
            // If it's a new book, the title, author, and publication date will be sent
            onSubmit({ title, author, publication_Date: publicationDate});
        }

        // Reset the form fields after submission
        setTitle('');
        setAuthor('');
        setPublicationDate('');
    };

    return (
        // This is the form element
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                type="text" // Text input for the title
                value={title} // Setting the value to the title state
                onChange={(e) => setTitle(e.target.value)} // Update title state on change
                required // This will make it required to input 
                />
            </div>
            <div>
                <label>Author</label>
                <input
                type="text" // Text input for the author
                value={author} // Set the value to author state
                onChange={(e => setAuthor(e.target.value))} // Update author on change
                required // This will make it required like the other one
                />
            </div>
            <div>
                <label>Publication Date</label>
                <input
                type="text"
                value={publicationDate} // Set the value to the publicationDate state
                onChange={(e => setPublicationDate(e.target.value))} // Update on change
                required
                />
            </div>
            <button type='submit'>
                {editBook ? 'Update Book' : 'Add Book'}
            </button>
        </form>
    );
};


export default BookForm;