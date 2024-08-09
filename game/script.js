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

    //Function to update the list of guessed numbers displayed on the page
     function updateGuessedNumbers() {
        guessedNumbers.innerHTML = ''; //Clear the existing list
        guessedNumbersSet.forEach(number => {
            const listItem = document.createElement('li'); //Create a new list item
            listItem.textContent = number; //Set the text content to the guessed number
            guessedNumbers.appendChild(listItem); //Add the list item to the guessed numbers list
        });
    }
})