//getting the javascript to interact with the div
let box = document.getElementById ("box");
//variables for the size of the box
let width = 100;
let height = 100;

//customiztion of the box
box.style.width = width + "px";
box.style.height =  height + "px";
box.style.backgroundColor = "#00FF00";

//Grows the box
function grow(){
    //Increases size by 10%
    width *= 1.1;
    height *= 1.1;

    //Shows the size of the width and height
    console.log(width);
    console.log(height);

    //Changes the size
    box.style.width = width + "px";
    box.style.height =  height + "px";
}



