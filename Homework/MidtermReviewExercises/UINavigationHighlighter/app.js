//Varaiables that allows the JavaScript to edit the different div lines
let tree = document.getElementById("tree");
let helicopter = document.getElementById("helicopter");
let train = document.getElementById("train");
let frog = document.getElementById("frog");
let sun = document.getElementById("sun");
let grass = document.getElementById("grass");

//Variable that allows for the JavaScript to edit the display div line
let display = document.getElementById("display");

//All of the variables for the div lines put into an array
let highlight = [tree, helicopter, train, frog, sun, grass];
//An array that gives the function text to put into the display div
let hDisplay = ["Tree", "Helicopter", "Train", "Frog", "Sun", "Grass"]

//Function that highlights and unhighlight div lines based on what is clicked
function highlightDiv(x){
    //A loop to edit the div lines that need to be edited. 
    for(let i=0; i < highlight.length; i++){
        if(i==x){
            //Highlights the clicked div
            highlight[i].style.backgroundColor = "#FFFF00";
            highlight[i].style.fontWeight = "bold";
        } else {
            //Unhighlights the other divs
            highlight[i].style.removeProperty("background-color");
            highlight[i].style.removeProperty("font-weight");
        }
        console.log(i)
    }
    //Displays the text of the clicked div
    display.innerHTML = hDisplay[x];
    console.log(x);
}