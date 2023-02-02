function setup(){
    createCanvas(800, 600);
}

function draw(){
    //white background with a slight opacity to allow a trailing of the circle
    background (255, 255, 255, 75);

    //makes a circle that follows the mouse and can have a color input but removes the red aspect from it
    function redRemover(r, g, b){
        //removing red
        stroke(r-r, g, b);
        //circle
        strokeWeight(3);
        ellipse(mouseX, mouseY, 40, 40);
    }

    //The function being ran
    redRemover(255, 150, 255);
}