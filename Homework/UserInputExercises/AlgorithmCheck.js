/*
The three tasks that I will be completing for this homework are Tip Calculator, Password Protected, and Number Guesser (easier).

For the Tip Calculator assignment I will need to make an input field that will only accept numbers.
I will then need a button that runs a function that will multiply the inputed number by .2.
The function will then display the value of that multiplication formula and that result added to the inputed number.
let TotalVariable = InputVariable + TipVariable
console.log("Tip: "+ TipVariable +" Total: "+ TotalVariable)

For the Password Protected assignment I will need to make two input fields, one button, and three div lines.
First div line will be blank but have an ID so that the JavaScript can input text into it.
Second and third div lines will say "Username:" and "Password" respectively.
When the button is pressed, it will run a function that checks if the first input field has the word "Username" and the second input has the word "Password" inside of it.
If those have been typed into the inputs, then it will display "Success" in the first div. If they are different, then it will display "Wrong information" in the first div.
if((UsernameVariable.value=="Username")&&(PasswordVariable.value=="Password")){
    FirstDiv.innerHTML("Success");
} else {
    FirstDiv.innerHTML("Wrong information");
}

For the Number Guesser (easier) task I will need an input that only accepts numbers, button, and two div.
The first div line will tell the user to guess a number between 1-20.
The second div will start blank and have an ID for the JavaScript to input text.
The button will run a function to see if the inputed value is less, equal, or greater than the selected number.
The function will then remove what is inside the input and write text in the second div line telling the user how their inputted number is related to the selected number.
if(InputVariable==SelectedNumber){
    SecondDiv.innerHTML("You guessed the correct number");
} else if(InputVariable>SelectedNumber){
    SecondDiv.innerHTML("You guessed higher than the selected number");
} else if(InputVariable<SelectedNumber){
    SecondDiv.innerHTML("You guessed lower than the selected number");
}
*/