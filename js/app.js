const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

// Keep Track of the guesses

let attempts = 0;

let message;




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