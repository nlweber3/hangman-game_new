
 
 	var words = ['outlaw', 'desperato', 'sheriff', 'marshall', 'revolver', 'gunslinger', 'tumbleweed', 'spurs', 'saloon', 'saddlebags', 'cowboy'];
 	var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
 	'U', 'V', 'W', 'X', 'Y', 'Z'];
 	var lives = 8;
 	var answerArray = [];
 	var wrongGuess = [];
 	var remainingLetters = 0;
 	
 	var audio = new Audio("./Assets/Audio/Western_noise.wav");
 	// messages = {
 	// 	win: 'Nice shooting Partner!',
 	// 	lose: 'Better Luck Next Time Punk!',
 	// };
console.log(alphabetArray)
for (var i=0; i<alphabetArray.length; i++) {
	wrongGuess [i] = " ";
	document.getElementById("wrongguesses").innerHTML = wrongGuess.join(' ');
}

var words = words[Math.floor(Math.random() * words.length)];
	console.log(words);
	remainingLetters = words.length;

for(var i=0; i<words.length; i++) {
		answerArray[i] = "_";
		// document.getElementById("wordguess").innerHTML = document.getElementById("wordguess").innerHTML + "<li class='list';' id='letterNumber_"+i+"'>_</li>";
		document.getElementById("guesscontainer").innerHTML = answerArray.join(' ');
}
console.log(answerArray);

var remainingLetters = words.length;

document.getElementById("livesremaining").innerHTML = "You have " + (lives) + " lives remaining";

document.onkeyup = function(event) {
	var userGuess = event.key;
	// var wrongGuess = event.key;
	var correctGuess = false;

	for (var j = 0; j < words.length; j++) {
		if (words[j] === userGuess) {
			remainingLetters = remainingLetters-1;
			answerArray[j] = userGuess;
			audio.play();
			correctGuess = true;
			document.getElementById("guesscontainer").innerHTML = answerArray.join(' ').toUpperCase();
		} 

		if (remainingLetters == 0) {
			document.getElementById("livesremaining").innerHTML = "NICE SHOOTING TEX!";
		}
		// else if (words[j] != userGuess) {
		// 	document.getElementById("livesremaining").innerHTML = "You have " + (lives--) + " lives remaining";
		// 	alphabetArray[j] = userGuess;
		// 	document.getElementById("wrongguesses").innerHTML = wrongGuess.join(' ').toUpperCase();
		// }
	}

	if (!correctGuess){
		lives--;
		document.getElementById("livesremaining").innerHTML = "You have " + lives + " lives remaining";
		document.getElementById("wrongguesses").innerHTML += " " + userGuess.toUpperCase();
	}
// 	if (words[j] !== userGuess) {
// 		wrongGuess[j] = userGuess;
// 		document.getElementById("wrongguesses").innerHTML = wrongGuess.join(' ').toUpperCase();
	
// }

	if (lives <= 0) {
	document.getElementById("livesremaining").innerHTML = "BETTER LUCK NEXT TIME, PUNK!";
}


}


		// document.getElementById("wrongguesses").innerHTML = wrongGuess.join(' ').toUpperCase();
// }
	
	






