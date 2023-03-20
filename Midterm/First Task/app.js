//An array consisting of the required words
let words = ["Cirro", "cumulo", "nimbo", "strato"];

//A variable that allows the JavaScript to edit a div line in the HTML
let display = document.getElementById("display");

//A loop that writes every word in the array with the word "and" inbetween
for(i=0; i<words.length; i++){
    display.innerHTML += words[i]+" and "
}