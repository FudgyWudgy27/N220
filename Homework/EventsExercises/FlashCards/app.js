//A variable for JavaScript to edit the div line.
let display = document.getElementById("display");
//A variable for the first button
let element = document.getElementById("question");
//An event listner that checks when one of the buttons has been clicked
element.addEventListener("click", answer);

//Fucntion for getting the data-response attribute and displaying it in the div
function answer(event){
    //Making a variable to hold the data-response value
    let response = event.target.getAttribute("data-response");
    //displaying the data-response value in the div line.
    display.innerHTML = response;
}