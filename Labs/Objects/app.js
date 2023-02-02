let bicycle = {
    age: 0,
    wear: 0
}

function destroy(x){
    bicycle.age += x;

    if(bicycle.age >= 5){
        bicycle.wear = 100;
    } else {
        bicycle.wear+=(20*x);
    }
}

destroy(10);



console.log(bicycle);
