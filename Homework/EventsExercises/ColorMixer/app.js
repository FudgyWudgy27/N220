//Variables that allow JavaScript to edit the two main div lines
let CD = document.getElementById("colorDiv");
let Display = document.getElementById("Display");

//Variables for the rgb values
let r = 0;
let g = 0;
let b = 0;

//Edits the appearance of the colored div
CD.style.width = "400px";
CD.style.height = "150px";
CD.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";

//Displays the rgb values in the second div
Display.innerHTML = "current color: rgb(" +r+ ", " +g+ ", " +b+ ")";

//Function for adding one to a rgb value based on what button is clicked
function addOne(x){
    //Checks what button was clicked
    if(x == 0){//Adds one to the red value
        r++;
    } else if(x == 1){//Adds one to the green value
        g++;
    } else if(x == 2){//Adds one to the blue value
        b++;
    }

    //Updates the first div's color
    CD.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    //Updates the second div's text
    Display.innerHTML = "current color: rgb(" +r+ ", " +g+ ", " +b+ ")";
}

//Function for adding five to a rgb value based on what button is clicked
function addFive(x){
    //Checks what button was clicked
    if(x == 0){//Adds five to the red value
        r += 5;
    } else if(x == 1){//Adds five to the green value
        g += 5;
    } else if(x == 2){//Adds five to the blue value
        b += 5;
    }

    //Updates the first div's color
    CD.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    //Updates the second div's text
    Display.innerHTML = "current color: rgb(" +r+ ", " +g+ ", " +b+ ")";
}

//Function for adding ten to a rgb value based on what button is clicked
function addTen(x){
    //Checks what button was clicked
    if(x == 0){//Adds ten to the red value
        r += 10;
    } else if(x == 1){//Adds ten to the green value
        g += 10;
    } else if(x == 2){//Adds ten to the blue value
        b += 10;
    }

    //Updates the first div's color
    CD.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    //Updates the second div's text
    Display.innerHTML = "current color: rgb(" +r+ ", " +g+ ", " +b+ ")";
}