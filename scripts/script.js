// JavaScript Document
console.log("Mario");

const maps = [
 "mariokaart1.jpg",
 "mariokaart2.jpg"
]

let currentMap = 0;


const map = document.querySelector("#map");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

previousButton.addEventListener("click", previousMap);
nextButton.addEventListener("click", nextMap);

function nextMap() {
    currentMap = currentMap + 1;

    map.src = "images/" + maps[currentMap];
}

function previousMap() {
    currentMap = currentMap - 1;

    map.src = "images/" + maps[currentMap];
}


// var bowser1 = document.querySelector ("#bowser1");

// function changeimage() {
//     bowser1.src= "images/bowser1.png"
// }


// function pictureChange (){
    // document.getElementById(bowser1)
// }



// image.addEventListener()
// function changeimage()
// {
// document.getElementById("bowser1").src="iimages/bowser1.png"
// }