//Allows for javascript to edit the contents of the div line
let beepbop = document.getElementById("beepbop");

//The loop that runs for 25 iterations
for(let i=1; i<26; i++){

    if(i%3==0){ //Checks to see if the current iteration number is divisible by 3
        if(i%5==0){ //If the iteration is divisible by 3 check if it is also divisible by 5
            beepbop.innerHTML += "beepbop, "; //If the iteration is divisible by both 3 and 5, then writes beepbop in the div
            console.log(i);
        } else {
            beepbop.innerHTML += "beep, ";//If the iteration is only divisible by 3, then writes beep in the div
            console.log(i);

        }
    } else if(i%5==0){ //Checks if the current iteration number is divisble by 5
        beepbop.innerHTML += "bop, "; //If the iteration is dvisible by 5, then writes bop in the div line
        console.log(i);

    } else {
        beepbop.innerHTML += i+", "; //If the iteration is not divisble by 3 or 5, then writes the iteration number in the div line
    }
}