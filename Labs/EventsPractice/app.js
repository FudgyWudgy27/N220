
//application vars
let dvWheel = document.getElementById("wheel");
let colors = [ "#f9ff40", "#ffcc40", "#ff821c", "#ff591c", "#d11b1b", "#940f5a",  "#611069", "#4d0e9e", "#1430e3", "#14d9e3", "#05a80a", "#b4fa3c" ];
let display = document.getElementById("display");

//setup
colors.forEach( function(color, i) {
  let rot = (i / colors.length) * 360;
  
  let newSelection = document.createElement("div");
  newSelection.style.backgroundColor = color;
  newSelection.style.transform = `rotate(${rot}deg) translate(8em)`;
  newSelection.dataset.color = color;
  newSelection.dataset.index = i;
  //newSelection.innerHTML = color;
  newSelection.classList.add("option");
  wheel.appendChild(newSelection);
  
  //add event listener to newSelection
    newSelection.addEventListener("click", showComplementary);
})

//functions
function showComplementary(){
    let ind = Number( event.target.dataset.index);
    console.log(ind);

    let complementaryIndex = ind + Math.floor(colors.length/2);
    if(complementaryIndex >= 12){
        complementaryIndex-=12;
    }
    console.log(complementaryIndex);

    let complementaryColor = colors[complementaryIndex];
    console.log(complementaryColor);

    display.style.color = complementaryColor;
    display.innerHTML = complementaryColor;
}

//make handler for clicking on new selection

//
//Use the 'index' property of the dataset to get color position in the array

//for analogous - two away from current
//for complementary - half away from current
//for split - half away from current, then +/- 2