//Reads the value of the input
let UI = document.getElementById("UserInput");
//Allows the javascript to edit the div line
let display = document.getElementById("display");

//Function for spliting the input and checking if the user won
function splitInput(){
    //Turns the input value into a varaible
    let UIValue = UI.value;
    //Splits the input value where ever there is a comma
    let splitUI = UIValue.split(",");

    console.log(splitUI);
    //Counter to record if there are three ones in a row
    let counter = 0;
    //loop for checking if the user won
    for(i=0;i<splitUI.length;i++){
        //An if statment chcking if the input value is equal to one
        if(splitUI[i] === "1"){
            //If it is equal to one, adds one to the counter
            counter++;
            //If it isn't equal to one then checks if the counter is equal to three
        } else if(counter >= 3){
            //If it is equal to three, then displays winner text
            display.innerHTML = "Winnner";
        } else {
            //If it isn't equal to three, then sets the counter back to zero
            counter = 0;
        }
    }

    //Once the loop is finished, it will once again check if the counter is equal to three
    if(counter >= 3){
        //If so, then displays winner text
        display.innerHTML = "Winnner";
    } else {
        //If not, then displays not winner text
        display.innerHTML = "Not Winner";
    }
}