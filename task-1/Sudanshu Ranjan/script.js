function choice1(){
    let option =["stone", "paper", "scissor"];
    let random = Math.floor(Math.random()*option.length);
    var computer = option[random];
    console.log("Computer choice is " + computer);
    return computer;
}
var userscore = 0;
var computerscore = 0; 
function playRound(a, b){
    if(a == b){
        console.log("It's a tie!");
    }
    else if ((a == "stone" && b == "scissor") || (a == "paper" && b == "stone") || (a == "scissor" && b == "paper")){
        userscore++;
        document.getElementById("user-score").innerText = userscore;
        console.log("You win this round!");
    }
    else{
        computerscore++;
        document.getElementById("computer-score").innerText = computerscore;
        console.log("Computer wins this round!");
    }
}
function result(x, y){
    if( x == 5){
        console.log("Congratulations! You won the game!");
        document.getElementById("result").innerText ="Congratulations! You won the game!";
    }
    else if( y == 5){
        console.log("Computer won the game! Better luck next time!");
        document.getElementById("result").innerText = "Computer won the game! Better luck next time!";
    }
}
function message(c,d){
    document.getElementById("message").innerText = "Your choice is " + c + " and Computer choice is " + d;
}
let userChoice = document.getElementById("choices");
userChoice.addEventListener("click", function(e){
    let selected = e.target.closest(".choice");
    if(selected){
        let user = selected.id;
        console.log("User choice is " + user);
        let computerchoice = choice1();
        playRound(user, computerchoice);
        result(userscore, computerscore);
        message(user, computerchoice);
    }
})
let newGame = document.getElementById("new-game");
newGame.addEventListener("click", () =>{
    userscore = 0;
    computerscore = 0;
    document.getElementById("user-score").innerText = userscore;
    document.getElementById("computer-score").innerText = computerscore;
    document.getElementById("result").innerText = "New Game Started! Make your choice.";
    document.getElementById("message").innerText = "";
})
