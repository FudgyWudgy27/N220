//Allows for JavaScript to edit the div line
let display = document.getElementById("display");

//An array for the different text that will be displayed.
let meat = ["Steak", "Cheeseburger", "Jerky"];

//A function that displays a value from the array.
function displayMeat(i){
    //Displays the text depending on what button is clicked.
    display.innerHTML = meat[i];
}