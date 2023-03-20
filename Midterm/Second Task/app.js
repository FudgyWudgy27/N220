//A variable that allows for the JavaScript to edit the button text
let mystery = document.getElementById("mystery");

//A variable that will record the number of times the button has been clicked
let number = 0;

//Function that runs when the button is clicked
function reveal(){
    //Checks if the button has been clicked 5 times
    if(number<4){
        //If not, adds 1 to the number variable
        number++;
    } else {
        //If it has been, changes button's text to "revealed"
        mystery.innerHTML = "revealed";
    }
    console.log(number);
}