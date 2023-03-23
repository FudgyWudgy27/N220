//lets the JS file use the information put into the username input field
let UserName = document.querySelector("#Username");
//lets the JS file use the information put into the password input field
let PassWord = document.querySelector("#Password");
//lets the JS file change the information in the Div line
let Result  = document.getElementById("Result");

//Function for checking if the username and password are correct.
function SignIn(){
    //Checks if the input values are correct
    if((UserName.value=="Username")&&(PassWord.value=="Password")){
        //if yes, then displays "Success"
        Result.innerHTML = "Success";
    } else {
        //if no, then displays "Wrong information"
        Result.innerHTML = "Wrong information";
    }
}