//Variable for recording the click position
let clickPoint = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Records the current mouse position when the mouse is pressed.
  if(mouseIsPressed) {
    clickPoint.x = mouseX;
    clickPoint.y = mouseY;
  }
  
  //Measures distance of the line
  let d = distance( clickPoint, { x: mouseX, y: mouseY });
  
  //Changes the color of the line depending on the distance
  if(d > 120) { 
    stroke("#FF0000");
  } else {
    stroke("#000000");
  }
  

  //The line
  line (clickPoint.x, clickPoint.y, mouseX, mouseY);
}


//A funciton that lets distance work
function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);
}