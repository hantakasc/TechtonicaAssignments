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

}
}
