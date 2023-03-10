function setup(){
    createCanvas(800, 600);
}

function draw(){
    //white background with a slight opacity to allow a trailing of the circle
    background (255, 255, 255);

    //The function being ran
    let newColor = redRemover(color(170, 200, 150))

    //Making the circle
    fill(newColor);
    strokeWeight(0);
    ellipse(mouseX, mouseY, 40, 40);
}

//Removes the red aspect from the color
function redRemover(color){
        color.setRed(0);
        return color;
}
