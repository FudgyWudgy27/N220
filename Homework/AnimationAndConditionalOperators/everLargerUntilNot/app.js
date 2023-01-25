//Variable for diamter of the circle
let diameter = 1;
//Speed at which the circle grows
let grow = 1;
//Variable for color of circle and background
let color = 1;


//Creating the canvas
function setup() {
    createCanvas(800, 600);
}

function draw() {
    //Code to determine the background and color of the circle
    if (color==1) {
        fill(255);
        background(0);
    } else {
        if (color==2) {
            fill(0);
            background(255);
        } else {
            color = 1;
        }
        
    }

    //Code to determine the size of the circle and when it needs to be shrunk down
    diameter += grow;

    if(diameter==200) {
        diameter -= 199;
        color +=1;
    }


    //The circle
    ellipse(400, 300, diameter, diameter);


    //Lines to outline the canvas while it has a white background
    fill(0);
    line(1, 1, 1, 599);
    line(1, 599, 799, 599);
    line(799, 599, 799, 1);
    line(799, 1, 1, 1);
}