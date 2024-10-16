import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from '../BookForm'; // Import the form component

// Describe is used to group related tests
describe('BookForm Component', () => {
  // A single test checking if the form works as expected
  test('fills out the form and submits', () => {
    const onSubmitMock = jest.fn(); // Mock function to simulate form submission

    // Render the BookForm component with the mock submit function
    render(<BookForm onSubmit={onSubmitMock} />);

    // Get the input fields by their labels
    const titleInput = screen.getByLabelText(/Title/i);  // Looks for label "Title"
    const authorInput = screen.getByLabelText(/Author/i); // Looks for label "Author"
    const publicationDateInput = screen.getByLabelText(/Publication Date/i); // Looks for label "Publication Date"
    const submitButton = screen.getByText(/Add Book/i); // Find the submit button by text

    // Simulate typing into the form
    fireEvent.change(titleInput, { target: { value: 'My First Book' } });
    fireEvent.change(authorInput, { target: { value: 'First Author' } });
    fireEvent.change(publicationDateInput, { target: { value: '2021' } });

    // Simulate clicking the submit button
    fireEvent.click(submitButton);

    // Check if the mock function was called with the right data
    expect(onSubmitMock).toHaveBeenCalledTimes(1);  // Check if form submission happened once
    expect(onSubmitMock).toHaveBeenCalledWith({     // Check that the data is correct
      title: 'My First Book',
      author: 'First Author',
      publication_date: '2021'
    });
  });
});