import React from 'react'

// Define BookItem as a functional component
const BookItem = ({book, onEdit, onDelete}) => {
    return (
        // Render list item for book with author and publication date
        <li>
            {book.title} by {book.author} ({book.publication_date})
            {/* Button to edit the book using onClick */} 
            <button onClick={onEdit}>Edit</button>
            {/* Button to delete book using onClick */}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default BookItem;