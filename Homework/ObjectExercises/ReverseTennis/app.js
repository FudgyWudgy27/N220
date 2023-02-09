//The left rectangle
let lR = {
    x: 200, y: 150,
    width: 50,
    height: 200
}

//The right rectangle
let rR = {
    x: 250, y: 150,
    width: 50,
    height: 200
}

//Creating the canvas
function setup(){
    createCanvas(800, 500);
}

function draw(){
    //white background
    background(255);

    //Drawing the rectangles
    rect(lR.x, lR.y, lR.width, lR.height);
    rect(rR.x, rR.y, rR.width, rR.height);

    //When up arrow is pressed, left rectangle moves up while right rectangle moves down
    if(keyIsDown(UP_ARROW)){
        lR.y -= 1;
        rR.y += 1;
    }

    //When down arrow is pressed, left rectangle moves down while right rectangle moves up
    if(keyIsDown(DOWN_ARROW)){
        lR.y += 1;
        rR.y -= 1;
    }
}