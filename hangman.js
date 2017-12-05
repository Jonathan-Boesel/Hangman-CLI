var Words = require('./word.js');
var inquirer = require("inquirer");

function Hangman() {
    this.guessesLeft = 10
    this.word = new Words
}

Hangman.prototype.gameStart = function() {
    this.word.displayWord()
}

Hangman.prototype.testUserInput = function(userInput) {
    if (this.word.letterArr.indexOf(userInput.guess) !== -1) {
        console.log("Correct!")
        this.expose(userInput)
    }
    else if (this.word.letterArr.indexOf(userInput.guess) === -1) {
        console.log("Wrong! You have " + game.guessesLeft + " left!")
        game.guessesLeft--;
        console.log(this.word.wordDisplay)
    }
}

Hangman.prototype.expose = function(userInput) {
    // console.log("exposing")
    // console.log(this.word.letterObject)
    for (var i = 0; i < this.word.letterObject.length; i++) {
        // console.log("Looping")
        // console.log(userInput.guess)
        // console.log(this.word.letterObject[i].letter.indexOf(userInput.guess))
        if (this.word.letterObject[i].letter.indexOf(userInput.guess) !== -1) {
            this.word.letterObject[i].show(userInput.guess)
            // console.log(this.word.letterObject
        }
    }
    this.word.hide()
}

Hangman.prototype.gameTest = function() {
    // console.log(this.word.letterObject)
    for (var i = 0; i < this.word.letterObject.length; i++) {
        // console.log(this.word.letterObject[i].isShown)
        if (!this.word.letterObject[i].isShown) {
            return false
        }
    }
    return true
}
var game = {};

function start() {
    inquirer.prompt([{
        type: "list",
        name: "answer",
        message: "Do you want to play hangman?",
        choices: ["YES", "NO"]
    }]).then(function(userInput) {
        if (userInput.answer === "YES") {
            game = new Hangman();
            game.gameStart()
            userGuess()

        }
        else if (userInput.answer === "NO") {
            console.log("That's too bad, play again later!")
        }
    })
}

function userGuess() {
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "Please guess ONE letter",
        validate: userInputValidate
    }]).then(function(userInput) {
        game.testUserInput(userInput);
        // console.log(game.gameTest());
        if (game.gameTest()) {
            console.log("WIN!")
            userRestart()
        }
        else if (game.guessesLeft < 0) {
            console.log("You lose!")
            userRestart()
        }
        else {
            userGuess()
        }
    })
}

function userRestart() {
    inquirer.prompt([{
        type: "list",
        name: "restart",
        message: "Would you like to play again?",
        choices: ["YES", "NO"]
    }]).then(function(userInput) {
        if (userInput.restart === "YES") {
            gameRestart()
        }
        else if (userInput.restart === "NO") {
            console.log("See ya next time!");
        }
    })
}

function userInputValidate(input) {
    if (input.length === 1)
        return true;
    else
        return "Please, guess ONE letter at a time!!";
}

function gameRestart() {
    game.guessesLeft = 10;
    game = new Hangman();
    game.gameStart()
    userGuess()

}
// function guessLetter() {
//     game = new Hangman()
//     console.log(test.guessesLeft)
//     if (game.guessesLeft > 0) {
//         console.log("yay")
//     }
// }
// guessLetter()
start()
