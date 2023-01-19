// Need to draw a picture with at least 5 p5 features and 2 variables.
// Possibly make a truck

// Back wheel X value
let W1x = 250;
// Front wheel x value
let W2x = 600;

// Truck body x value
let TB1x = 100;
let TB2x = 700;
let TB3x = 700;
let TB4x = 575;
let TB5x = 550;
let TB6x = 400;
let TB7x = 400;
let TB8x = 100;

// Truck window x value
let TW1x = 560;
let TW2x = 535;
let TW3x = 415;
let TW4x = 415;

function setup() {
    createCanvas(800, 600);
}

function draw() {

    background(173, 216, 230);

    // Truck body
    fill(255,0, 0);
    beginShape();
        vertex(TB1x, 500);
        vertex(TB2x, 500);
        vertex(TB3x, 350);
        vertex(TB4x, 350);
        vertex(TB5x, 200);
        vertex(TB6x, 200);
        vertex(TB7x, 350);
        vertex(TB8x, 350);   
    endShape(CLOSE);

    //Window

    fill(255);
    noStroke();
    beginShape();
        vertex(TW1x, 350);
        vertex(TW2x, 215);
        vertex(TW3x, 215);
        vertex(TW4x, 350);
    endShape(CLOSE);


    // Wheels
    stroke(1);
    fill(0);
    circle(W1x, 500, 100);
    circle(W2x, 500, 100);

    // Rims
    fill(200);
    circle(W1x, 500, 60);
    circle(W2x, 500, 60);

    // Animation
    
    // Wheel animation
    if(mouseIsPressed) {
        W1x += 1;
    }
    if(mouseIsPressed) {
        W2x += 1;
    }

    // Truck body animation
    if(mouseIsPressed) {
        TB1x += 1;
    }
    if(mouseIsPressed) {
        TB2x += 1;
    }
    if(mouseIsPressed) {
        TB3x += 1;
    }
    if(mouseIsPressed) {
        TB4x += 1;
    }
    if(mouseIsPressed) {
        TB5x += 1;
    }
    if(mouseIsPressed) {
        TB6x += 1;
    }
    if(mouseIsPressed) {
        TB7x += 1;
    }
    if(mouseIsPressed) {
        TB8x += 1;
    }

    // Truck window animation
    if(mouseIsPressed) {
        TW1x += 1;
    }
    if(mouseIsPressed) {
        TW2x += 1;
    }
    if(mouseIsPressed) {
        TW3x += 1;
    }
    if(mouseIsPressed) {
        TW4x += 1;
    }

}