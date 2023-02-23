//An array that contains my three favorite times
let times = ["00:00", "03:00", "21:00"];
//Two variables that allow my to edit a different div line with each
let second = document.getElementById("second");
let third = document.getElementById("third");

//Displaying my second favorite time in the second place div line
second.innerHTML = times[0];
//Displaying my third favorite time in the third place div line
third.innerHTML = times[1]; 