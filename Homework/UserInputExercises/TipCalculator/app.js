//Lets JS get the information from the Input box.
let IN = document.querySelector("#InputNumber");

//Function that calculates the tip and total of the payment
function CalculateTip(){
    //Turning the value in the Input into a number.
    let INV = Number(IN.value);

    //The math to calculate the tip
    let Tip = Number(INV*.2);
    //Rounds the tip down and turns the Tip variable value into a number
    Tip = Number(Tip.toFixed(2));

    //The math to calculate the base price along with the tip for a total value
    let Total = INV+Tip;

    //Displays the required text into the console.
    console.log("Tip: "+Tip+" Total: "+ Total);
}