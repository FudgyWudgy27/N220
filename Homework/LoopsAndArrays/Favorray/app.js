//An array of my 5 favorite things
let favorites = ["Steak", "Video games", "Friends", "Loaded baked potato", "Water"];

//A variable that allows the javascript to edit the div line
let myfavorites = document.getElementById("myfavorites");

//The loop that write an item from the array followed by some text. Does this for every item in the array.
for(let i = 0; i < favorites.length; i++){
    myfavorites.innerHTML += favorites[i]+", is one of my favorite things.<br>";
    console.log(i);
}