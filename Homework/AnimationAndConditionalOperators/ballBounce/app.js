//The radius and location of the ball
let radius = 50;
let x = 400;
let y = 300;

//The speed at which the ball travels
let speed = 5;

//The varaiables to determine which way the ball is moving
let xDirection = 1;
let yDirection = 1;

//The variable to determine the color of the ball and background
let color = 6;


//Creating the canvas and setting the ellipse mode
function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS);
    
}

function draw() {

    //A yellow background for when color == 0
    background(255, 255, 0);


    //Code for the ball's movement on the x-axis. Also changes the color value
    x += speed * xDirection;

    if ((x > width-radius) || (x < radius)) {
        xDirection = -xDirection;
        color += 1;
    }

    //Code for the ball's movement on the y-axis. Also changes the color value
    y += speed * yDirection;

    if ((y > height-radius) || (y < radius)) {
        yDirection = -yDirection
        color += 1;
    }


    //Code to determine the value of color for the ball and the background
    if (color == 1) {
        fill(255, 0, 0); //Red ball
        background(0, 255, 0); //Green background
    }
    if (color == 2) {
        fill(255, 255, 0); //Yellow ball
        background(255, 0, 255); //Purple background
    }
    if (color == 3) {
        fill(0, 0, 255); //Blue ball
        background(255, 165, 0); //Orange background
    }
    if (color == 4) {
        fill(0, 255, 0); //Green ball
        background(255, 0, 0); //Red background
    }
    if (color == 5) {
        fill(255, 165, 0); //Orange ball
        background(0, 0, 255); // Blue background
    }
    if (color == 6) {
        fill(255, 0, 255); //Purple ball
        color -= 6;
        background(255, 255, 0); //Yellow background
    }


    //The ball
    ellipse(x, y, radius, radius);

}