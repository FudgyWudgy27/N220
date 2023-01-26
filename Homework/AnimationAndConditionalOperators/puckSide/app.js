//Creating the canvas
function setup() {
    createCanvas (400, 300);
}

function draw() {

    //Checks the location of the mouse to determine the color of the circle and the color of the background
    if(mouseX>200) {
        fill(255, 0, 0);
        background(0, 0, 255);
    } else {
        fill(0, 0, 255);
        background(255, 0, 0);
    }

    //The circle
    ellipse(mouseX, mouseY, 50, 50);
}