// create an array of the alphabet...
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
// sets the beginning wins to 0
var win = 0;
// sets the beginning losses to 0
var losses = 0;
// sets the beginning guesses alotted to 10
var guessesRemaining = 10;
// presents to the user the number of guesses remaining
var guessedLetters = [];

document.onkeyup = function (event) {
// This gathers the users guessed key
    var userGuess = event.key; 
// .push() method adds new items to the end of an array and returns the length
    guessedLetters.push(userGuess);
// tells the computer to select a random letter from the alphabet array
var computerAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];

var reset = function () {
    guessesRemaining = 10;
    guessedLetters = [];
}
// if the user's guess is the same as the computers then they are awarded one win
if (userGuess === computerAnswer) {
    win++;
    guessesRemaining = 9;
}
// else if the user's guess is wrong, they lose a guess
else {guessesRemaining--;}

// if guesses remaining reach 0, this gives the user one loss and resets the guesses to 10
if (guessesRemaining === 0) {
    losses++;
    guessesRemaining = 9;
    reset();
}
// inserts text and recordings from variables to the html document via javascript
var html = "<p>Wins: " + win + "</p>" + "<p>Losses " + losses + "</p>" + "<p>Guesses Remaining: " + guessesRemaining + "</p>" + "<p>Guessed Letters " + guessedLetters.join(", ");
document.getElementById("answers").innerHTML = html;



}








