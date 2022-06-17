const buttons=document.querySelectorAll(".Grid-Button");
const MessageBox=document.querySelector("#Message-Box");
const resetButton=document.querySelector("#Reset-Button");
resetButton.addEventListener("click",reset)
resetButton.style.display="none";

choice=["X","O"];
turn=choice[0]; //Initally its X's turn[Will change this later, so that it is could be anyone's turn at the start]
MessageBox.innerText=turn+"'s Turn";
for(i=0;i<9;i++)
{
    buttons[i].addEventListener("click",input);
}

function input()
{
    gameOverCheck=false;

    if(turn === "X")
    {
        event.target.innerText=turn;
        event.target.disabled=true; //Disabling a button where the user already entered something(X or O)
        event.target.style.color="red";
        event.target.style.border.color="1px solid #f3f3f3"
        if(check() === 1) //Checking if X won
        {
            gameOverCheck=true
            MessageBox.innerHTML="X Wins!!!";
            MessageBox.style.color="red";
            MessageBox.style.fontSize="20px";
            resetButton.style.display="flex";
            gameover();
        }
        turn=choice[1];
    }

    else if(turn === "O")
    {
        event.target.innerText=turn;
        event.target.disabled=true; //Disabling a button where the user already entered something(X or O)
        event.target.style.color="green";
        event.target.style.border.color="1px solid #f3f3f3";
        if(check() === 1) //Checking if Y won
        {
            gameOverCheck=true
            MessageBox.innerHTML="O Wins!!!";
            MessageBox.style.color="green";
            MessageBox.style.fontSize="20px";
            resetButton.style.display="flex";
            gameover();
        }
        turn=choice[0];
    }
    if(gameOverCheck === false)
    {
    MessageBox.innerText=turn+"'s Turn";
    }
}

function check()
{
    if((buttons[0].innerText === "X" && buttons[1].innerText === "X" && buttons[2].innerText === "X") || (buttons[3].innerText === "X" && buttons[4].innerText === "X" && buttons[5].innerText === "X") || (buttons[6].innerText === "X" && buttons[7].innerText === "X" && buttons[8].innerText === "X") || (buttons[0].innerText === "X" && buttons[3].innerText === "X" && buttons[6].innerText === "X") || (buttons[1].innerText === "X" && buttons[4].innerText === "X" && buttons[7].innerText === "X") || (buttons[2].innerText === "X" && buttons[5].innerText === "X" && buttons[8].innerText === "X") || (buttons[0].innerText === "X" && buttons[4].innerText === "X" && buttons[8].innerText === "X") || (buttons[2].innerText === "X" && buttons[4].innerText === "X" && buttons[6].innerText === "X"))
    {
        return 1;
    }
    if((buttons[0].innerText === "O" && buttons[1].innerText === "O" && buttons[2].innerText === "O") || (buttons[3].innerText === "O" && buttons[4].innerText === "O" && buttons[5].innerText === "O") || (buttons[6].innerText === "O" && buttons[7].innerText === "O" && buttons[8].innerText === "O") || (buttons[0].innerText === "O" && buttons[3].innerText === "O" && buttons[6].innerText === "O") || (buttons[1].innerText === "O" && buttons[4].innerText === "O" && buttons[7].innerText === "O") || (buttons[2].innerText === "O" && buttons[5].innerText === "O" && buttons[8].innerText === "O") || (buttons[0].innerText === "O" && buttons[4].innerText === "O" && buttons[8].innerText === "O") || (buttons[2].innerText === "O" && buttons[4].innerText === "O" && buttons[6].innerText === "O"))
    {
        return 1;
    }
}

function gameover()
{
    //Disabling all the buttons so that nothing else is entered in them
    for(i=0;i<9;i++)
    {
        buttons[i].disabled=true;
        buttons[i].style.border="1px solid  #f3f3f3"
    }
}

function reset()
{
    turn=choice[0]; //Setting turn back to X
    MessageBox.innerHTML=turn+"'s Turn";
    MessageBox.style.color="#f3f3f3";
    MessageBox.style.fontSize="16px";
    resetButton.style.display="none"; //Makign the Replay button disappear
    for(i=0;i<9;i++)
    {
        buttons[i].disabled=false;
        buttons[i].innerText="";
    }
}