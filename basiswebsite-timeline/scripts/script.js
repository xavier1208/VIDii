// JavaScript Document
console.log("Mario");

const maps = [
  "mariokaart1.jpg",
  "mariokaart2.jpg",
  "mariokaart3.jpg",
  "mariokaart4.jpg",
];

const jaartallen = ["1985", "1990", "1991", "2013"];

const titelgames = [
  "Super Mario Bros",
  "Super Mario Bros 3",
  "Super Mario World 3",
  "Super Mario 3D World",
];

const informatie = [
  "1985 - Super Mario Bros: Bowser makes his debut as the main antagonist in the original Super Mario Bros. game. He kidnaps Princess Peach and holds her captive in his castle, prompting Mario's quest to rescue her.",
  "1990 - Super Mario Bros 3: Bowser returns as the main antagonist, attempting to conquer the Mushroom Kingdom. He uses his Koopalings to hinder Mario's progress. The game introduces various forms and abilities for Bowser, including his giant-sized form and his airship battles.",
  "1991 - Super Mario World: Bowser once again kidnaps Princess Peach and takes over Dinosaur Land. Mario embarks on a journey through different worlds, defeating Bowser's minions and ultimately confronting Bowser himself in his castle.",
  "2013 - Super Mario 3D World: Bowser continues his role as the main antagonist in this game. He kidnaps the Sprixie Princesses and plans to take over the Sprixie Kingdom. Mario and his friends embark on a journey through various colorful and creative levels to rescue the princesses and stop Bowser's plans.",
];

const bowser1 = [
  "bowserversie1.png",
  // "bowserversie2.png",
  "new1.png", 
  "bowserversie3.png",
  "bowserversie4.png",
];

const bowser5 = [
  "bowserversie1.png",
  // "bowserversie2.png",
  "new1.png",
  "bowserversie3.png",
  "bowserversie4.png",
];

let currentMap = 0;

const map = document.querySelector("#map");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const bowser = document.querySelector("#bowser");

const panel = document.querySelector("article section");
const title = document.querySelector("h2");
const tweedetitel = document.querySelector("h3");
const informatietekst = document.querySelector("h4");
const bowser2 = document.querySelector("#bowser1");
const bowserversie1 = document.querySelector("#bowser");

previousButton.addEventListener("click", previousMap);
nextButton.addEventListener("click", nextMap);

function nextMap() {
  previousButton.disabled = false;
  currentMap = currentMap + 1;

  map.src = "images/" + maps[currentMap];
  panel.className = "map" + currentMap;
  title.innerHTML = jaartallen[currentMap];
  tweedetitel.innerHTML = titelgames[currentMap];
  informatietekst.innerHTML = informatie[currentMap];
  bowser2.src = "images/" + bowser1[currentMap];
  bowserversie1.src = "images/" + bowser5[currentMap];

  if (currentMap == 3) {
    nextButton.disabled = true;
  }

  bowser.className = "map" + currentMap;
}

function previousMap() {
  currentMap = currentMap - 1;

  map.src = "images/" + maps[currentMap];
  if (currentMap == 0) {
    previousButton.disabled = true;
  }
  nextButton.disabled = false;

  bowser.className = "map" + currentMap;

  panel.className = "map" + currentMap;
  title.innerHTML = jaartallen[currentMap];
  tweedetitel.innerHTML = titelgames[currentMap];
  informatietekst.innerHTML = informatie[currentMap];
  bowser2.src = "images/" + bowser1[currentMap];
  bowserversie1.src = "images/" + bowser5[currentMap];
}