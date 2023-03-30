let UI = document.querySelector("#UserInput");

let char = UI.value;

function check(){  
        if(UI.vlaue === "a" || char==="e" || char==="i" || char==="o" || char==="u"){
            return true;
        }
}

function test(){
    console.log(check());
}