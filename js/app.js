//const main = document.querySelector('main');
//const randomNumber = getRandomNumber(10);
//let guess;

/*
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}
*/



// let message;




// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number

/*
for(let i = 1; i <= 10; i++){
  
  guess = prompt('Enter the number please!');
   
  if(guess == randomNumber){
    break;
    main.innerHTML += `You guessed the number which is ${i}`;
  }
  
  
}
*/

// Do while Loop example for guessing number challenge
/*
// Keep Track of the guesses

let attempts = 0;



do {
    guess = prompt('Enter the number please between 1 and 10! What is it?');
    attempts++;

    // Terminate the loop if the user guesses the number
    if (parseInt(guess) === randomNumber) {
        message = `It took you ${attempts} tries to guess the number ${randomNumber}.`;
        break;
    } else {
        message = `You did not guess the number. It was ${randomNumber}.`;
    }

} // do while closing     
//while (parseInt(guess) !== randomNumber);  // Or we could limit how many times our loop will run


while (attempts < 10);

main.innerHTML = message;

*/





/*
The following demonstrates how you might count down from 10 to 1 and display the remaining number of guess attempts to the user.

for ( let i = 10; i >= 1; i-- ) {
  let guess = prompt(`You have ${i} tries to guess a number between 1 and 10.`);
  if ( parseInt(guess) === randomNumber ) {
    message = `It took you ${i} tries to guess the number ${randomNumber}.`;
    break;
  } else {
    message = `You did not guess the number. It was ${randomNumber}.`;
  }
}

*/

// Improving our game here with helper validations so that user knows what to enter

// Taking the guessing game further here
// You can use conditional statements to give the player hints about the number to guess. Consider the following code:

const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;
let guess = prompt(`Guess a number between 1 and 10.`);


function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}


for (let i = 9; i >= 1; i--) {
    if (+guess > randomNumber) {
        guess = prompt(`Guess a lower number. You have ${i} more tries.`);
    } else if (+guess < randomNumber) {
        guess = prompt(`Guess a higher number. You have ${i} more tries.`);
    } else if (+guess === randomNumber) {
        message = `You guessed the number! It was ${randomNumber}.`;
        break;
    }
    message = `You did not guess the number. It was ${randomNumber}.`;
}

main.innerHTML = `<h1>${message}</h1>`;

// If the player 's guess is higher than the number to guess, the prompt dialog instructs them to guess a lower number. 
// If their guess is lower, the prompt hints at entering a higher number.