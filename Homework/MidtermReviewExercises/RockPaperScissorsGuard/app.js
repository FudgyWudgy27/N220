//Variable to allow for JavaScript to write the results
let results = document.getElementById("results");
//Variable to allow for JavaScript to write the score
let score = document.getElementById("score");
//Variable to keep track of the score
let scoreValue = 0;

//An array to allow for what both the player and computer chose to be displayed
let choice = ["rock", "paper", "scissors"]

//Function for the game to be played.
function play(x){
    //The computer generating a variable for rock, paper, scissors
    y = Math.floor(Math.random()*3);
    //Both x and y variables equate to 0 = rock, 1 = paper, 2 = scissors

    //Assigning x to the player
    let player=x;
    //Assigning y to the computer
    let computer = y;

    //Series of if else statements to check what was played.
    if(player==0 && computer==2){ //Player = rock, computer = scissors. Adds one to score
        scoreValue+=1;
        score.innerHTML = scoreValue;
    } else if(player==1 && computer==0){ //Player = paper, computer = rock. Adds one to score
        scoreValue+=1;
        score.innerHTML = scoreValue;
    } else if(player==2 && computer==1){ //Player = scissors, computer = paper. Adds one to score
        scoreValue+=1;
        score.innerHTML = scoreValue;
    } else if(player==0 && computer==1){ //Player = rock, computer = paper. Subtracts one from score
        scoreValue-=1;
        score.innerHTML = scoreValue;
    } else if(player==1 && computer==2){ //Player = paper, computer = scissors. Subtracts one from score
        scoreValue-=1;
        score.innerHTML = scoreValue;
    } else if(player==2 && computer==0){ //Player = scissors, computer = rock. Subtracts one from score
        scoreValue-=1;
        score.innerHTML = scoreValue;
    } else if(player==computer){ //Both player and computer have same choice. Does nothing to the score
        score.innerHTML = scoreValue
    }
    //Displays both the player's and computer's choice
    results.innerHTML = "You chose "+choice[x]+", computer chose "+choice[y];
    console.log(y)
}

//Function for player choosing Guard
function guard(){
    //Subtracts .5 from score
    scoreValue-=.5;
    score.innerHTML = scoreValue;
}