function Letter(letter) {
	this.letter = letter;
	this.blank = "_"
	this.isShown = false
}

Letter.prototype.show = function() {
	this.blank = this.letter
	this.isShown = true
}

module.exports = Letter
