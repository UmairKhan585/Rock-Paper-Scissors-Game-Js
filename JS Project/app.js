let userScr = 0;
let comScr = 0;

const msg = document.querySelector("#msg");
const userPara = document.querySelector("#user-score");
const comPara = document.querySelector("#comp-score");

const comGenerated = () => {
    const choices = ["rock","paper","scissor"];
    const randInd = Math.floor(Math.random()*3);
    return choices[randInd];
};


const drawGame = () => {
    console.log("Game was draw.Play Again!");
    msg.innerText = "Game was draw.Play Again!";
    msg.style.backgroundColor = "#010d41";
}

const showWinner = (userWin, userOpt, comOpt) => {
    if(userWin){
        userScr++;
        userPara.innerText = userScr;
        console.log("You win!");
        msg.innerText = `You win! Your ${userOpt} beats ${comOpt}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comScr++;
        comPara.innerText = comScr;
        console.log("You lose");
        msg.innerText = `You lose! ${comOpt} beats your ${userOpt}`;
        msg.style.backgroundColor = "red";
    }

}
const playGame = (userOpt) => {
    console.log("User-Chooses : ",userOpt);
    const comOpt = comGenerated();
    console.log("Comp-Chooses : ",comOpt);

    if(userOpt === comOpt){
        drawGame();
    }
    else {
        let userWin = true;
        if (userOpt === "rock")
        {
            // scissor,paper
            userWin = comOpt === "paper" ? false : true; 
        }
        else if (userOpt === "paper") {
            // rock,scissor
            userWin = comOpt === "scissor"? false : true;
        }
        else {
            // rock,paper
            userWin = comOpt === "rock"? false:true;
        }

        showWinner(userWin, userOpt, comOpt);
    };

};

const options = document.querySelectorAll(".option");
options.forEach((option)=>
{
    option.addEventListener("click",()=>{
        let userOpt = option.getAttribute("id");
        playGame(userOpt);
    });
});