
$(document).ready(function () {

	// alert("guess a letter from A-Z");
	var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
		'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	// Variables for tracking wins, losses and ties.
	var wins = 0;
	var losses = 0;
	var guesses = 10;
	var computerGuess;
	var userGuesses = [];



// Setting wins and losses
	document.onkeypress = function (event) {
		var userGuess = event.key;
		if (userGuesses.indexOf(userGuess) >= 0){
			return;
		}
		userGuesses.push(userGuess);

		if (userGuess === computerGuess) {
			wins++;
			resetGame();

		} else {
			guesses--;

			if (guesses === 0) {
				losses++;
				resetGame();
			}

		}

// Displayed guesses
		document.getElementById('displayedGuesses').innerHTML = userGuesses.join(", ");
// Number of guesses left
		document.getElementById('guessesLeft').innerHTML = guesses;

	}
// Resetting game funtion
	function resetGame() {
		document.getElementById('winsCurrent').innerHTML = wins;
		document.getElementById('lossesCurrent').innerHTML = losses;
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log(computerGuess);
		guesses = 10;
		userGuesses = [];
	}


});




