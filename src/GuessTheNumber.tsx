// Importing files
import React, { useState } from 'react'; // Import React and useState hook from React library
import './App.css'; // Import CSS file for styling

// Define a functional component named GuessTheNumber
const GuessTheNumber: React.FC = () => {
     // Use the state variable to hold the secret number that the player guesses
  // The secretNumber is randomly generated between 1 and 100
  const [secretNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);

  // State variable holds the player's current guess
  // It can be a number or an empty string when the input area is cleared
  const [guess, setGuess] = useState<number | ''>('');

    // State variable that holds the feedback messages shown to the player
    const [feedback, setFeedback] = useState<string>('');

      // State variable that counts the number of wrong guesses the player enters
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

    // This state variable keeps track of all the numbers that player already guessed
    const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);

     // Function that handles changes in the input field
  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the current value of the input field
    const value = event.target.value;

    // Update the guess state
    // If the input is empty, set guess to an empty string
    // if not, then convert the value to a number and update the guess state
    setGuess(value === '' ? '' : Number(value));
  };

  // Function that handles the form submission when the player clicks on the submit button
  const handleSubmit = () => {
    // Validate the player's guess
    if (guess === '' || isNaN(guess) || guess < 1 || guess > 100) {
      // If the guess is invalid, set messaege prompting to enter a valid number
      setFeedback('Enter a number between 1 and 100, silly goose!');
      return;
    }

     // Check if the guessed number is already in the list of guessed numbers
    if (guessedNumbers.includes(guess)) {
      // If the number has already been guessed, set feedback message to notify user
      setFeedback('Silly goose, you already guessed that number!');
      return; // Exit the function early
    }

    // Add the new guessed number to the list
    setGuessedNumbers([...guessedNumbers, guess]);

     // Compare the player's guess with the secret number
     if (guess === secretNumber) {
        // If the guess is right, display the congrats message.
        setFeedback(`Congratulations, silly goose! You guessed the number ${secretNumber}!`);
      } else {
        // If the guess is wrong, increment the wrong guesses counter
        setWrongGuesses(wrongGuesses + 1);
  
        // Display message based on if the guess was too low or too high
        setFeedback(guess < secretNumber ? 'Too low, silly goose! Try again.' : 'Too high, silly goose! Try again.');
      }
  
      // Clear the input field for the next guess
      setGuess('');
    };
      // Render component
  return (
    <div className="container">
      <h1>Guess the Number, silly goose!</h1>
      <p>Guess a number between 1 and 100:</p>

      <input
        type="number" // Number input
        value={guess === '' ? '' : guess} // Set the value for input field
        onChange={handleGuessChange} // Call handleGuessChange function when the input changes
        min="1" // Min value 
        max="100" // Max value
        placeholder="Enter your guess here, silly goose" // Placeholer text for the input
      />

      <button onClick={handleSubmit}>Submit Guess</button>

      {/* Paragraph to display message */}
      <p className="feedback">{feedback}</p>

      {/* Section for game stats */}
      <div className="stats">
        {/* Num of wrong guesses */}
        <p>Wrong guesses: {wrongGuesses}</p>

        {/* List of guessed numbers */}
        <p>Numbers guessed:</p>
        <ul>
          {/* Map over the guessedNumbers array and render each number as a list item */}
          {guessedNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
