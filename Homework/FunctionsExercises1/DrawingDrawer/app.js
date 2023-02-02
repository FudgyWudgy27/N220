function setup () {
    createCanvas(800, 600);
}

function draw () {
    //light green background
    background (144, 238, 144);


    //the function for drawing the truck
    function drawTruck(x, y, r, g, b){
        //allows for the changing of truck colors
        fill(r, g, b);
        //the body of the truck
        beginShape();
            vertex(mouseX + 25 + x, mouseY + 25 + y);
            vertex(mouseX + 25 + x, mouseY + 50 + y);
            vertex(mouseX + 125 + x, mouseY + 50+ y);
            vertex(mouseX + 125 + x, mouseY + 25 + y);
            vertex(mouseX + 105 + x, mouseY + 25 + y);
            vertex(mouseX + 85 + x, mouseY + 10 + y);
            vertex(mouseX + 70 + x, mouseY + 10 + y);
            vertex(mouseX + 70 + x, mouseY + 25 + y);
        endShape(CLOSE);
        
        //the Wheels of the truck
        fill(0);
        ellipse(mouseX + 50 + x, mouseY + 50 + y, 30, 30);
        ellipse(mouseX + 100 + x, mouseY + 50 + y, 30, 30);
        //the rims of the truck
        fill(155)
        ellipse(mouseX + 50 + x, mouseY + 50 + y, 20, 20);
        ellipse(mouseX + 100 + x, mouseY + 50 + y, 20, 20);
    }

    //blue truck
    drawTruck(0, 0, 0, 0, 255);
    //oragne truck
    drawTruck(100, 100, 255, 165, 0);
    //pink truck
    drawTruck(-100, -100, 255, 16, 240);
    //red truck
    drawTruck(-50, 300, 255, 0, 0);
    //yellow truck
    drawTruck(-150, 150, 255, 255, 0);




    //pain
    /*
    fill(0, 0, 255);
    beginShape();
        vertex(mouseX + 25, mouseY + 25);
        vertex(mouseX + 25, mouseY + 50);
        vertex(mouseX + 125, mouseY + 50);
        vertex(mouseX + 125, mouseY + 25);
        vertex(mouseX + 105, mouseY + 25);
        vertex(mouseX + 85, mouseY + 10);
        vertex(mouseX + 70, mouseY + 10);
        vertex(mouseX + 70, mouseY + 25);
    endShape(CLOSE);
    

    fill(0);
    ellipse(mouseX + 50, mouseY + 50, 30, 30);
    ellipse(mouseX + 100, mouseY + 50, 30, 30);

    fill(155)
    ellipse(mouseX + 50, mouseY + 50, 20, 20);
    ellipse(mouseX + 100, mouseY + 50, 20, 20);


    fill(255, 165, 0);
    beginShape();
        vertex(mouseX + 125, mouseY + 125);
        vertex(mouseX + 125, mouseY + 150);
        vertex(mouseX + 225, mouseY + 150);
        vertex(mouseX + 225, mouseY + 125);
        vertex(mouseX + 205, mouseY + 125);
        vertex(mouseX + 185, mouseY + 110);
        vertex(mouseX + 170, mouseY + 110);
        vertex(mouseX + 170, mouseY + 125);
    endShape(CLOSE);
    

    fill(0);
    ellipse(mouseX + 150, mouseY + 150, 30, 30);
    ellipse(mouseX + 200, mouseY + 150, 30, 30);

    fill(155)
    ellipse(mouseX + 150, mouseY + 150, 20, 20);
    ellipse(mouseX + 200, mouseY + 150, 20, 20);


    fill(255, 16, 240);
    beginShape();
        vertex(mouseX + -25, mouseY + -25);
        vertex(mouseX + -25, mouseY + -50);
        vertex(mouseX + -125, mouseY + -50);
        vertex(mouseX + -125, mouseY + -25);
        vertex(mouseX + -105, mouseY + -25);
        vertex(mouseX + -85, mouseY + -10);
        vertex(mouseX + -70, mouseY + -10);
        vertex(mouseX + -70, mouseY + -25);
    endShape(CLOSE);
    

    fill(0);
    ellipse(mouseX + -50, mouseY + -50, 30, 30);
    ellipse(mouseX + -100, mouseY + -50, 30, 30);

    fill(155)
    ellipse(mouseX + -50, mouseY + -50, 20, 20);
    ellipse(mouseX + -100, mouseY + -50, 20, 20);


    fill(255, 0, 0);
    beginShape();
        vertex(mouseX + -100, mouseY + 175);
        vertex(mouseX + -100, mouseY + 200);
        vertex(mouseX + -200, mouseY + 200);
        vertex(mouseX + -200, mouseY + 175);
        vertex(mouseX + -180, mouseY + 175);
        vertex(mouseX + -160, mouseY + 160);
        vertex(mouseX + -145, mouseY + 160);
        vertex(mouseX + -145, mouseY + 175);
    endShape(CLOSE);
    

    fill(0);
    ellipse(mouseX + -125, mouseY + 200, 30, 30);
    ellipse(mouseX + -175, mouseY + 200, 30, 30);

    fill(155)
    ellipse(mouseX + -125, mouseY + 200, 20, 20);
    ellipse(mouseX + -175, mouseY + 200, 20, 20);
    */
}