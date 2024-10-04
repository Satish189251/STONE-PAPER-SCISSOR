let userScore = 0;
let computerScore = 0;
const Choices = document.querySelectorAll(".image");
const msg = document.querySelector("#message");
let user__score = document.querySelector("#user_score");
let computer__score = document.querySelector("#computer_score");

const computerChoice = ()=>{
    const options  = ['stone','paper','scissor'];
    const Valuse = Math.floor(Math.random()* options.length);
    return options[Valuse];
};

const playGame = (userChoice) =>{
    console.log("User choice = ",userChoice);
    let comptChoice = computerChoice();
    console.log("Computer choice = ",comptChoice);
    if(userChoice === comptChoice){
        Drawgame();
    }
    else {
        let userWin = true;
        if(userChoice === "stone") {
            userWin = comptChoice === "paper" ? false:true;
        }else if(userChoice === "paper") {
                userWin = comptChoice === "scissor" ? false:true;
        }else{
            userWin = comptChoice === "stone" ? false:true;
        }
        winner(userWin);
    }
};

const winner = (userWin) => {
    if(userWin){
        userScore++ ;
        user_score.innerText = userScore;
        msg.innerText = "YOU WIN.";
        msg.style.backgroundColor = "green";
    }else{
        computerScore++ ;
        computer_score.innerText = computerScore;
        msg.innerText = "YOU LOSE.";
        msg.style.backgroundColor = "red";

    }
};

const Drawgame = () =>{
    console.log("Draw Match !");
    msg.innerText = "DRAW MATCH ! TRY AGAIN."
    msg.style.backgroundColor = " rgba(41, 15, 105, 0.726)";
};

Choices.forEach((image) => {
    image.addEventListener("click", () => { // the event name is case-sensitive {"Click".. !}
        const userChoice = image.getAttribute("id");
            playGame(userChoice);
        });
});