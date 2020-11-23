"use strict";
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");
const simpleColor = [
  "C54428",
  "5D2418",
  "AFA21F",
  "3DA217",
  "17A267",
  "176FA2",
  "5B61B8",
  "8E5BB8",
  "fff",
];
const hashAdding = "#";
const colors = [];
for (let i = 0; i < simpleColor.length; i++) {
  colors.push(hashAdding + simpleColor[i]);
}

btn.addEventListener("click", (e) => {
  const random = randomColor();
  main.style.background = colors[random];
  color.textContent = colors[random];
});

const randomColor = () => {
  return Math.floor(Math.random() * colors.length);
};
