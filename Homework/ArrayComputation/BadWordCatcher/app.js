//Allows the JavaScript to edit the div line
let dipslay = document.getElementById("display");
//Reads what the user inputed
let UI = document.getElementById("UserInput");
//Array of bad words
let BadWords = ["clear", "water", "tires"];

//Function to see if the user typed any bad words
function BadWordCatcher(){
    //Turns the input value in a varaible
    let UIValue = UI.value;
    //splits the input value into an array.
    let splitUI = UIValue.split(" ");
    //Varaible to count the number of bad words the user typed
    let counter = 0;

    //loop that checks if any bad words were typed
    for(i=0; i<splitUI.length; i++){
        //checks one user typed word at a time to see if it is equal to "clear".
        if(splitUI[i] === BadWords[0]){
            //If it is equal to "clear" then it adds one to the counter
            counter++;
        } else if(splitUI[i] === BadWords[1]){ //if it isn't equal to "clear" then checks if it is equal to "water".
            //If it is equal to "water" then it adds one to the counter
            counter++;
        } else if(splitUI[i] === BadWords[2]){ //If it isn't equal to either "clear" or "water" then checks if it is equal to "tires"
            //If it is equal to "tires" then it adds one to the counter
            counter++;
        }
    }

    //If statment that sees how many bad words were said
    if(counter>=1){
        //if one or more bad words were said displays how many were found
        display.innerHTML = "Found "+counter+" bad words"
    } else {
        //If no bad words were said, displays that none were found
        display.innerHTML = "Found no bad words"
    }

    UI.value = "";
}