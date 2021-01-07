"use strict";

window.addEventListener("load", function () {
  

// Mijn oplossing (Mislukt. Niet kunnen oplossen.)
// let size = 8; // Size = width * height

// let i = 1;
// let output = "";
// while (i <= size) {


//   output += "#";
//   i++;

//   console.log(output);


// }

// Oplossing
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);







});