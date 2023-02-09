//object for the eye
let eye = {

    //White part of the eye
    eyeWidth: 60,
    eyeHeight: 60,
    eyeColor: "#FFFFFF",

    //A light green iris
    irisWidth: 30,
    irisHeight: 30,
    irisColor: "#90EE90",

    //The cornea of the eye
    corneaWidth: 10,
    corneaHeight: 10,
    corneaColor: "#000000",

    //The positions for the eyes
    x1: 100, y: 100,
    x2: 200
}

//The canvas
function setup() {
    createCanvas(300, 200);
}

//The function being ran
function draw() {
    drawEyes(eye);
}

//Drawing the eyes in a function
function drawEyes(eye) {
    //Drawing the white part of the eyes
    fill(eye.eyeColor);
    strokeWeight(2);
    ellipse(eye.x1, eye.y, eye.eyeWidth, eye.eyeHeight);
    ellipse(eye.x2, eye.y, eye.eyeWidth, eye.eyeHeight);

    //Drawing the iris of the eyes
    fill(eye.irisColor);
    strokeWeight(0);
    ellipse(eye.x1, eye.y, eye.irisWidth, eye.irisHeight);
    ellipse(eye.x2, eye.y, eye.irisWidth, eye.irisHeight);

    //Drawing the conrea of the eyes
    fill(eye.corneaColor);
    ellipse(eye.x1, eye.y, eye.corneaWidth, eye.corneaHeight);
    ellipse(eye.x2, eye.y, eye.corneaWidth, eye.corneaHeight);
}