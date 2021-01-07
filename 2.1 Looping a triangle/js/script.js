"use strict";

window.addEventListener("load", function () {


  // My own partial solution:   
  let aantal = 1;
  const output = document.querySelector("#output");
  while (aantal <= 7) {


    for (let i = 0; i < 7; i++) {
      output.innerHTML += "#";
    }
    aantal++;

  }


  // Solution:
  for (let line = "#"; line.length < 8; line += "#")
    console.log(line);


}); // Einde load eventlistener