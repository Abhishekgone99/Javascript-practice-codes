// Guessing game program :-

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess!!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;

    if (guess > targetNum) {
        guess = prompt("Too High! Enter a new guess")
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess")
    } else {
        guess = prompt(`your guess is ${guess} , which is not high or low, please enter a new guess`)
    }
}

if (guess === 'q') {
    console.log("ok! YOU Quit")
} else {
    console.log("congrats you win");
    console.log(`It took you ${attempts} guesses to win`);
}