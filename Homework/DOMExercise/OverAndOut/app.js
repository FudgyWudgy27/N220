//getting the javascript to interact with the div
let box = document.getElementById ("box");

//Blue background
let color = "#0000FF";
//making of the box
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = color;

//Function to change the background to black
function colorBlack(){
    color = "#000000";

    console.log(color);
    box.style.backgroundColor = color;
}

function colorBlue(){
    color = "#0000FF";

    console.log(color);
    box.style.backgroundColor = color;
}

