//A variable for number that will be displayed
let number = 1000;
//Allows for the javascript to enter information into the div line
let counting = document.getElementById("counting");

//function for displaying the number into the HTML and for counting upwards by 1000
function count(){
    //Displays the number in HTML
    counting.innerHTML += number+", ";

    //Adds 1000 to the number
    number += 1000;

    //Displays the number in the console
    console.log(number);
}

//Loop that calls upon the count() function 5 times so that the number variable can equal 5000.
for(let n=0; n <5; n++) {
    count();
}