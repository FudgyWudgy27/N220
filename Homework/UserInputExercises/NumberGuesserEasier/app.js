//Lets the JS file view the information put into the input
let UG = document.querySelector("#UserGuess");
//Let the JS file edit the div line
let result = document.getElementById("Result");

//Function for checking if the user guessed the right number
function guess(){
    if(UG.value==4){
        //If the guess is right then will display winning text
        result.innerHTML = "Congratulations! You guessed my number.";
    } else if(UG.value<4){
        //If the guess is low, then will "display higher than that" text
        result.innerHTML = "Nope, my number is higher than that.";
    } else if(UG.value>4){
        //If the guess is high, then will "display lower than that" text
        result.innerHTML = "Nope, my number is lower than that.";
    }
}