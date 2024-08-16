// Importing files
import React, { useState } from 'react'; // Import React and useState hook from React library
import './App.css'; // Import CSS file for styling

// Define a functional component named GuessTheNumber
const GuessTheNumber: React.FC = () => {
     // Use the state variable to hold the secret number that the player guesses
  // The secretNumber is randomly generated between 1 and 100
  const [secretNumber] = useState<number>(Math.floor(Math.random() * 100) + 1);
}
