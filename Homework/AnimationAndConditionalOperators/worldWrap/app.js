//radius for both circles
let radius = 50;
//x value for first circle
let x1 = 0;
//x value for second circle
let x2 = 800;
//speed that the circles move at
let speed = 5;

//Creating the canvas and setting the ellispe mode (not entirely sure what ellipseMode() does, I just know that without it my circles are smaller)
function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS);
}

function draw() {
    //Setting a black background
    background(0);

    //Having the x values of the circles increase by the speed in order to have it move from one side to another
    x1 += speed;

    x2 += speed;

    
    /*The if statement that moves the circles back to off the left side of the canvas. 
    Got 1550 by adding the cavas width of 800 by 750(which is the last x value where the all of the pixels of the circle are visable)*/
    if(x1>=1550) {
        x1 = -50;
    }
    if(x2>=1550) {
        x2 = -50;
    }

    
    //The red circle
    fill(255, 0, 0);
    ellipse(x1, 300, radius, radius);
    //The blue circle
    fill(0, 0, 255);
    ellipse(x2, 300, radius, radius);
}
