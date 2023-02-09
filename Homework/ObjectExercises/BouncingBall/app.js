//The different variables for the ball, including x and y, radius, speed, and x and y directions
let ball = {
    x: 400, y: 300,
    radius: 50,
    speed: 5,
    xDirection: 1,
    yDirection: 1
}

//Creating the canvas and setting the ellipse mode
function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS);
    
}

function draw() {

    //A black background
    background(0);


    //Code for the ball's movement on the x-axis
    ball.x += ball.speed * ball.xDirection;

    if ((ball.x > width-ball.radius) || (ball.x < ball.radius)) {
        ball.xDirection = -ball.xDirection;
    }

    //Code for the ball's movement on the y-axis
    ball.y += ball.speed * ball.yDirection;

    if ((ball.y > height-ball.radius) || (ball.y < ball.radius)) {
        ball.yDirection = -ball.yDirection
    }

    //The ball
    ellipse(ball.x, ball.y, ball.radius, ball.radius);
}