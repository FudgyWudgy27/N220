//Allows for JavaScript to edit the div
let display = document.getElementById("display");

//Function to generate a random number from 0-10.
function generate(){
    //Generates a number from 0-10
    let number = Math.floor(Math.random()*11)

    console.log(number);

    //Makes the function value equal to the generated number
    return number;
}

//Function to display the generated number into the div line.
function displayNumber(){
    //Displays the generated number
    display.innerHTML = generate();
}