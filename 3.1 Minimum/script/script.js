"use strict";

window.addEventListener("load", function() {


console.log("Script loaded!");

// Oplossing 1
let lowestNumber = (number1, number2) => {
  console.log(Math.min(number1, number2));
}

lowestNumber(3, 25);

// Oplossing 2
let lowestNumber2 = (number1, number2) => {

  if (number1 < number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }

}

lowestNumber2(75, 60);


});