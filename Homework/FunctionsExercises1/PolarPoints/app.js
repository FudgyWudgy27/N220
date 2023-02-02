function setup(){
    createCanvas(800, 600);
}

function draw(){    

    //does some funky math
    function polarPoint(r){
        x = r * Math.sin(mouseX);
        y = r * Math.cos(mouseX);
        return createVector(x, y);
    }

    //takes the results from funky math and makes it variables for a shape
    let res = polarPoint(200);

    //Determines the position of the middle of the bigger circle
    translate(400, 300);

    //Circle
    strokeWeight(3);
    fill(255);
    ellipse(res.x, res.y, 20, 20);
}