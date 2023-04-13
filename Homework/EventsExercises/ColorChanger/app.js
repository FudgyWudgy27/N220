//Variables that allow for JavaScript to edit the div lines
let RedDiv = document.getElementById("RedDiv");
let GreenDiv = document.getElementById("GreenDiv");
let BlueDiv = document.getElementById("BlueDiv");

//The size, base color, float, and margin of the divs.
let width = "200px";
let height = "200px";
let baseColor = "#808080";
let float = "left";
let margin = "5px";

//Applying the stlyes to the first div
RedDiv.style.width = width;
RedDiv.style.height = height;
RedDiv.style.backgroundColor = baseColor;
RedDiv.style.float = float;
RedDiv.style.margin = margin;

//Applying the stlyes to the second div
GreenDiv.style.width = width;
GreenDiv.style.height = height;
GreenDiv.style.backgroundColor = baseColor;
GreenDiv.style.float = float;
GreenDiv.style.margin = margin;

//Applying the stlyes to the third div
BlueDiv.style.width = width;
BlueDiv.style.height = height;
BlueDiv.style.backgroundColor = baseColor;
BlueDiv.style.float = float;
BlueDiv.style.margin = margin;

//function that will change the color of the div that is clicked.
function ColorChange(x){
    if(x == 0){//If the first div is clicked then it changes the color to red
        RedDiv.style.backgroundColor = "#FF0000";
    } else if(x == 1){//If the second div is clicked then it changes the color to green
        GreenDiv.style.backgroundColor = "#00FF00";
    } else if(x == 2){//If the third div is clicked then it changes the color to blue
        BlueDiv.style.backgroundColor = "#0000FF";
    }
}