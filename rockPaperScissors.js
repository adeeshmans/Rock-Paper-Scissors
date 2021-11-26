//Using arrow function syntax
//Function getUserChoice with userInput as parameter
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();  //userInput to lowercase; Rock = rock

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!, invalid input');
  }
};
// //calling the function/test
// console.log(getUserChoice('paper'));  //prints paper in lowercase ViceVersa

//Computer's Input
function getComputerChoice(){
  compInput = Math.floor( Math.random() * 3);  //Whole number between 0,1,2

  switch (compInput){
    case 0:
      return 'rock';
    case 1:
     return 'paper';
    case 2:
      return 'scissors';
  }
};


//Winner logic
//1. Tie condition
function determineWinner(userInput, compInput){
  if (userInput === compInput){  // condition for having same values
    return 'Game was a tie !';
  }

//Possible outcomes 
  if( userInput === 'rock'){
    if(compInput === 'paper'){
      return 'Computer Won this round !!';
    } else {
      return 'You Won this round !!';
    }
  }

  if (userInput === 'paper'){
    if (compInput === 'scissors'){
      return 'Computer won this round!!';
    } else {
      return 'Congrats G! you won this round!';
    }
  }

  if(userInput === 'scissors') {
    if (compInput === 'rock'){
      return 'Computer Won this round !!';
    } else {
      return 'Congrats G! you won this round!';
    }
  }

//User wins no matter the input of the computer
  if(userInput === 'bomb') {
      return 'You won this round !!';
  }
};

//Test cases
// console.log(determineWinner('rock', 'scissors')); //User wins
// console.log(determineWinner('paper', 'scissors')); //Computer Wins
// console.log(determineWinner('rock', 'rock')); // Its a tie

function playGame(){
  const userInput = getUserChoice('bomb');
  const compInput = getComputerChoice();

  console.log('You threw: ' + userInput);  //console.log(`You threw ${userInput}`);
                                             //string interpolation
  console.log('Computer threw: ' + compInput);
  console.log(determineWinner(userInput,compInput));
};

playGame();





