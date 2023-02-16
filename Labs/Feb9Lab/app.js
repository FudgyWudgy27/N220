let time = checkResponse;
let coolThing = document.getElementById ("coolThing");

function checkResponse(time){
    console.log(time);

    if(time == "morning"){
        console.log("That is correct");
        //coolThing.innerHTML("That is correct");
    } else {
        console.log("Guess again");
        //coolThing.innerHTML("That is correct");
    }
}