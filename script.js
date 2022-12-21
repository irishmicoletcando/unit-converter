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
  const input = inputUnit.value;
  // length conversion
  const metersToFeet = (input * 3.281)
  const feetToMeters = (input / 3.281);

  // checks input if it is 0
  if ( input == 0 ) {
    length.innerText = `${input} meter = ${metersToFeet} foot | ${input} foot = ${feetToMeters} meter`
  } else if ( input == 1 ){
    length.innerText = `${input} meter = ${metersToFeet} feet | ${input} foot = ${feetToMeters.toFixed(3)} meters`
  } else {
    length.innerText = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters.toFixed(3)} meters`
  }

  //  volume conversion
  const literToGallon = (input * 0.264);
  const gallonToLiter = (input / 0.264);

  // checks input if it is 0
  if ( literToGallon === 0 && gallonToLiter === 0 ) {
    volume.innerText = `${input} liter = ${literToGallon} gallon | ${input} gallon = ${gallonToLiter} liter`
  } else {
    volume.innerText = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToLiter.toFixed(3)} gallons`
  }


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
