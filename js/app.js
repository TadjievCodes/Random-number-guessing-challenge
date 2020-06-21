const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

// Keep Track of the guesses

let attempts = 0;






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



do {
    guess = prompt('Enter the number please between 1 and 10! What is it?');
    attempts++;

} while (parseInt(guess) !== randomNumber);



main.innerHTML = `<h1>You guessed the number which is ${randomNumber} </h1>`;
attempts++;