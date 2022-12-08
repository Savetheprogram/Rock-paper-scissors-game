
 const prompt = require('prompt-sync')();

 let rock="rock"

 let paper="paper"

 let scissors="scissors"

 playGame();



    function getComputerChoice(){


    let choice =Math.floor(Math.random()*3);

    if (choice===0) {
        return rock

    } else if (choice===1){
        return paper

    } else if (choice>=2) {
            return scissors
        }
    }




function getUserChoice() {

    let userInput = prompt("Pick rock, paper or scissors ");

   return userInput.toLowerCase()
}



function chooseWinner() {
    const userChoice = getUserChoice()

    const computerChoice = getComputerChoice()

    if (userChoice === rock && computerChoice === rock) {

        return "It's a draw!"
    } else if ( userChoice == rock && computerChoice == paper) {

        return "You lose :( paper beats rock"

    } else if ( userChoice == rock && computerChoice == scissors) {

        return "You win! :) rock beats scissors"

    } else if (userChoice == paper && computerChoice == rock) {

        return "You win! :) paper beats rock"

    } else if (userChoice == paper && computerChoice == paper) {

        return "It's a draw!"

    }else if (userChoice == paper && computerChoice == scissors) {

        return "You lose :( scissors beat paper"

    } else if (userChoice == scissors && computerChoice == rock) {

        return "You lose :( rock beats scissors"

     } else if (userChoice==scissors && computerChoice == scissors) {

        return "It's a draw!"

     } else if (userChoice == scissors && computerChoice == paper) {

        return "You win :) scissors beat paper"
    }
}

function playGame() {

    

    let userScore = 0

    let computerScore = 0

    const rounds = prompt("How many rounds you wanna play? ")

    for (let i=1; i<=(rounds); i++) {

        console.log("Round:" + i)

        const winner=  chooseWinner()

        if (winner === "You lose :( paper beats rock" ||
            winner === "You lose :( scissors beat paper" ||
            winner === "You lose :( rock beats scissors") {

            computerScore = computerScore + 1


        } else if (winner === "You win! :) rock beats scissors" ||
            winner === "You win! :) paper beats rock" ||
            winner === "You win :) scissors beat paper") {

            userScore = userScore + 1


        } else if (winner === "It's a draw!") {

          console.log("Draw")


        }

        console.log("userScore: "+ userScore)
        console.log("computerScore:" + computerScore)
    }
    if (userScore>computerScore) {
        console.log("Congratulations! You win!")
    } else {
        console.log("Im sorry, You lose :(")

    }
}