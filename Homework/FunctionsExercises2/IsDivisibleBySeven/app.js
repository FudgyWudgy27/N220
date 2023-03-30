//Allows for JavaScript to see what is inside the input
let IN = document.querySelector("#inputNumber");

//Allows for JavaScript to edit the div line
let display = document.getElementById("display");

//function for checking if the input value is divisble by seven
function divideBySeven(){
    //Turns the input value into a number
    let baseN = Number(IN.value);
    //Divides the input value by 7
    let quotient = baseN/7;
    //Checks if the quotient is an integer
    let checking = Number.isInteger(quotient);

    //Makes the fucntion true or false depending on the variable checking
    if(checking){
        return true;
    } else {
        return false;
    }
    
};

//Displays certain text depending on whether the function divideBySeven is true or false
function check(){
    console.log(divideBySeven());

    if(divideBySeven()){
        //If true display that the number is divisble by 7
        display.innerHTML = "Your number is divisible by 7.";
    } else {
        //If false display that the number is not divisble by 7
        display.innerHTML = "Your number is not divisible by 7.";
    }
}