//Allows for the editing of the top row of the table
let tLeft = document.getElementById("tLeft");
let tMid = document.getElementById("tMid");
let tRight = document.getElementById("tRight");

//Allows for the editing of the middle row of the table
let cLeft = document.getElementById("cLeft");
let cMid = document.getElementById("cMid");
let cRight = document.getElementById("cRight");

//Allows for the editing of the bottom row of the table
let bLeft = document.getElementById("bLeft");
let bMid = document.getElementById("bMid");
let bRight = document.getElementById("bRight");

//An array to hold the nine variables above
let board = [   
    tLeft, tMid, tRight, 
    cLeft, cMid, cRight, 
    bLeft, bMid, bRight];

//An array to hold the data values of the cells in the array so that they can be changed
let boardData = [
    tLeft.getAttribute("data-value"), tMid.getAttribute("data-value"), tRight.getAttribute("data-value"), 
    cLeft.getAttribute("data-value"), cMid.getAttribute("data-value"), cRight.getAttribute("data-value"), 
    bLeft.getAttribute("data-value"), bMid.getAttribute("data-value"), bRight.getAttribute("data-value")];

let display = document.getElementById("display");


//Function that is ran when the player clicks a cell in the table
function play(n){
    //Checks if the cell is empty or not
    if(boardData[n]==""){ //If it is empty:
        //Displays an X in the cell
        board[n].innerHTML = "X";
        //Changes the cell's data value to X
        boardData[n] = "X";
        //Calls on the check win funciton
        checkWin("X");
    }
}

//After the player has made their move, the computer then takes its turn
function computerTurn(){
    //Generates a random number from 0 to 8 that will be used as the cell it is trying to play in
    let cT = Math.floor(Math.random()*9)

    //Checks if the cell it chose is empty
    if(boardData[cT]==""){ //If it is empty:
        //Displays O in the cell
        board[cT].innerHTML = "O";
        //Changes the cell's data to O
        boardData[cT] = "O";
        //Calls on the check win funciton
        checkWin("O");
    } else { //If it isn't empty:
        //Recalls upon this function
        computerTurn();
    }
}

//Function to check if there is a winner
function checkWin(V){
    //Variable for whether the game is over or not
    let gameover = false;

    //Changes the display color depending on what made the last move
    if(V=="X"){//If X:
        //Displays a blue color for the font
        display.style.color = "blue";
    } else { //If anything else:
        //Displays a red color for the font
        display.style.color = "red";
    }

    //Checks if either the computer or the player has won
    if(boardData[0]==V && boardData[1]==V && boardData[2]==V){//Top row win check
        //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    } else if(boardData[3]==V && boardData[4]==V && boardData[5]==V){//Middle row win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    } else if(boardData[6]==V && boardData[7]==V && boardData[8]==V){//Bottom row win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    }  else if(boardData[0]==V && boardData[3]==V && boardData[6]==V){//Left colum win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    } else if(boardData[1]==V && boardData[4]==V && boardData[7]==V){//Middle colum win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    } else if(boardData[2]==V && boardData[5]==V && boardData[8]==V){//Right colum win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    } else if(boardData[0]==V && boardData[4]==V && boardData[8]==V){//Diagonal from top left win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    } else if(boardData[6]==V && boardData[4]==V && boardData[2]==V){// Diagonal from bottom left win check
         //Displays who won
        display.innerHTML = V+" Wins";
        //Sets the gameover value to true
        gameover = true;
    }

    //If the player just went and the game isn't over, then it allows for the computer to take its turn
    if(V=="X" && gameover==false){
        computerTurn();
    }
}

//function for reseting the board
function reset(){
    //resets the data value for the cells of the table
    for(i=0; i<boardData.length; i++){
        boardData[i] = "";
    }
    //resets the text inside the cells of the table
    for(i=0; i<board.length; i++){
        board[i].innerHTML = "";
    }
    //resets the div that displays the winner
    display.innerHTML = "";
}