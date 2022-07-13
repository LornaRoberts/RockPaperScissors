const rockPaperScissors = function(player1, player2){

if (player1 === player2){
    console.log("Draw!");
}else if (player1 === "rock" && player2 === "paper"){
    console.log("Paper wraps rock. Player 2 wins!");
}else if (player1 === "paper" && player2 === "rock"){
    console.log("Paper wraps rock. Player 1 wins!");
    }else if (player1 === "scissors" && player2 === "paper"){
        console.log("Scissors cut paper. Player 1 wins!");
    }else if (player2 === "scissors" && player2 === "paper"){
        console.log("Scissors cut paper. Player 2 wins!")
    }else if (player1 === "rock" && player2 === "scissors"){
        console.log("Rock blunts scissors. Player 1 wins!")
    }else if (player2 === "scissors"  && player2 === "rock"){
        console.log("Rock wraps paper. Player 2 wins!")
}

}

rockPaperScissors("rock", "scissors");