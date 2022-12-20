'use strict'

const convertBtn = document.getElementById("convert-btn");
const inputUnit = document.getElementById("convert-input");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
const clearBtn = document.getElementById("clear-btn");
/*
conversion units
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// show converted values when button is clicked
convertBtn.addEventListener("click", function() {
  // length conversion
  const metersToFeet = (inputUnit.value * 3.281)
  const feetToMeters = (inputUnit.value / 3.281);

  length.innerText = `${inputUnit.value} meters = ${metersToFeet} feet | ${inputUnit.value} feet = ${feetToMeters.toFixed(3)} meters`

})

// // clear input field and conversion values
// clearBtn.addEventListener("click", function() {
//   inputUnit.innerText = "";
// })


// meters to feet
// let metersToFeet = inputUnit * 3.281;
// // feet to meters
// let feetToMeters = inputUnit / 3.281;
// // liter to gallon
// let literToGallon = inputUnit * 0.264;
// // gallon to liter 
// let gallonToLiter = inputUnit / 0.264;
// // kilogram to pound
// let kilogramToPound = inputUnit * 2.204;
// // pount to kilogram
// let poundToKilogram = inputUnit / 2.204;
