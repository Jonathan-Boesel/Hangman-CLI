var Letter = require("./letter.js")

function Words() {
	this.computerChoices = [
		"ceilingcat", "allyourbase", "rickroll", "lolcats", "leeroyjenkins"
	];
	this.letterArr = [];
	this.letterObject = []
	this.wordDisplay = ""

	this.test = function() {
		console.log("test")
	}
}

Words.prototype.randomWord = function() {
	this.random = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)].toLowerCase();
	this.letterArr = this.random.split('');
	// console.log(this.letterArr)
}

Words.prototype.makeLetterObject = function() {
	for (var i = 0; i < this.letterArr.length; i++) {
		// console.log(this.letterArr[i])
		this.letterObject.push(new Letter(this.letterArr[i]));
	}
	this.hide()
	// console.log(this.letterObject)
}

Words.prototype.hide = function() {
	this.wordDisplay = this.letterObject.map(function(letter) {
		return letter.blank;
	}).join(' ');
	console.log(this.wordDisplay)
}

// Words.prototype.hide = function() {
		// 	this.wordDisplay = this.letterObject.map
		// }

Words.prototype.displayWord = function() {
	this.randomWord();
	this.makeLetterObject()
}

module.exports = Words
