"use strict";
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const randomColor = () => {
  return Math.floor(Math.random() * hexColor.length);
};

btn.addEventListener("click", (e) => {
  let hash = "#";
  for (let i = 6; i > 0; i--) {
    const random = randomColor();
    hash += hexColor[random];
  }
  change(hash);
});

const change = (hash) => {
  main.style.background = hash;
  color.innerHTML = hash;
};
