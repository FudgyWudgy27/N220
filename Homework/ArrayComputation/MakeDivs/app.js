//A variable for the base div that allows the other divs to be created from
let BaseDiv = document.getElementById("BaseDiv");


//The array of objects for the customization of the new div lines.
let objects = [

    { color: "#FF0000", height: "100px", width: "300px" },
   
    { color: "#FFFF00", height: "200px", width: "200px" },
   
    { color: "#ff0000", height: "300px", width: "100px" },
   
   ];

   //The for loop that creates the new div lines
   for(i=0; i<objects.length;i++){
    //Creates the element for the new div line
    let NewDiv = document.createElement("div")
    //Gives the new div line color
    NewDiv.style.backgroundColor = objects[i].color;
    //Gives the new div line height
    NewDiv.style.height = objects[i].height;
    //Gives the new div line width
    NewDiv.style.width = objects[i].width;
    //Add the new div line to the HTML page
    BaseDiv.appendChild(NewDiv);
   }