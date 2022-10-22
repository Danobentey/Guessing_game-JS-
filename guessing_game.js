let currentLevel = 2;
let finalLevel = 10;
let isPlaying = true;

alert('Welcome to the Guessing Game (By DinnyTech)')


for (let currentLevel = 2; currentLevel <= finalLevel; currentLevel++) {
	const userGuess = prompt(`Guess the number from 1 - ${currentLevel}`);
	const randomNumber = Math.trunc((Math.random()* currentLevel) + 1);

	console.log (randomNumber);

	if (userGuess == randomNumber) {
		console.log("You've guessed correctly 🎉", 
			"Next Level"
		)
		currentLevel++
	} else {
		console.log("Your guess is incorect ❌")
	}
	
}
