"use strict";

window.addEventListener("load", function () {

// Mijn oplossing
  for (let count = 1; count <= 100; count++) {

    if ((count % 3 == 0 && count % 5 == 0)) {
      console.log("FizzBuzz");
    } else if (count % 3 == 0) {
      console.log("Fizz");
    } else if (count % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log (count);
    }
  }


  // Oplossing uit boek
  // for (let n = 1; n <= 100; n++) {
  //   let output = "";
  //   if (n % 3 == 0) output += "Fizz";
  //   if (n % 5 == 0) output += "Buzz";
  //   console.log(output || n);
  // }

});