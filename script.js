let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userPoints = document.querySelector(".user-score");
let compPoints = document.querySelector(".comp-score");

const draw = () => {
    msg.innerText = `Its draw!`;
    msg.style.backgroundColor = "#2D1E2F";
};

const showResult = (isUserWin, compChoice, userChoice) => {
    if(isUserWin)
    {
        userScore++;
        userPoints.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compPoints.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () =>{
    let choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)];
};

const compare = (userChoice) => {
    const compChoice = genCompChoice();

    console.log(userChoice);
    console.log(compChoice);

    if(userChoice === compChoice)
    {
        draw();
    }
    else
    {
        let isUserWin = true;

        if(userChoice === "rock")
        {
            // computer have choices paper, scissor

            isUserWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            // computer have choices rock, scissor

            isUserWin = compChoice === "scissor" ? false : true;
        }
        else
        {
            // computer have choices rock, paper

            isUserWin = compChoice === "rock" ? false : true;
        }
        showResult(isUserWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        compare(userChoice);
    });
});