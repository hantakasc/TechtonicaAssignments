//Wait for HTML document to be loaded
document.addEventListener('DOMContentLoaded', () => {
    //Get DOM elements by their IDs
    const guessInput = document.getElementById('guess-input');
    const submitGuess = document.getElementById('submit-guess');
    const feedback = document.getElementById('feedback');
    const wrongGuessCount = document.getElementById('wrong-guess-count');
    const guessedNumbers = document.getElementById('guessed-numbers');

  //Generate a random number between 1 and 100 as the secret number
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    //Initialize the count of wrong guesses
    let wrongGuesses = 0;
    //Set to store guessed numbers and prevent duplicates
    let guessedNumbersSet = new Set();
})