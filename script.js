"use strict";

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
  const metersToFeet = input * 3.281;
  const feetToMeters = input / 3.281;

  // checks input to be converted
  if ( input == 0 ) {
    length.innerText = `${input} meter = ${metersToFeet} foot | ${input} foot = ${feetToMeters} meter`
  } else if ( input == 1 ){
    length.innerText = `${input} meter = ${metersToFeet} feet | ${input} foot = ${feetToMeters.toFixed(3)} meters`
  } else {
    length.innerText = `${input} meters = ${metersToFeet} feet | ${input} feet = ${feetToMeters.toFixed(3)} meters`
  }

  //  volume conversion
  const literToGallon = input * 0.264;
  const gallonToLiter = input / 0.264;

  // checks input to be converted
  if ( input == 0 ) {
    volume.innerText = `${input} liter = ${literToGallon} gallon | ${input} gallon = ${gallonToLiter} liter`
  } else if ( input == 1) {
    volume.innerText = `${input} liter = ${literToGallon} gallons | ${input} gallon = ${gallonToLiter.toFixed(3)} liters`
  } else {
    volume.innerText = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToLiter.toFixed(3)} gallons`
  }

  //  mass conversion
  const kilogramToPound = input * 2.204;
  const poundToKilogram = input / 2.204;

  // checks input to be converted
  if ( input == 0 ) {
    mass.innerText = `${input} kilogram = ${kilogramToPound} pound | ${input} pound = ${poundToKilogram} kilogram`
  } else if ( input == 1) {
    mass.innerText = `${input} kilogram = ${kilogramToPound} pounds | ${input} pound = ${poundToKilogram.toFixed(3)} kilograms`
  } else {
    mass.innerText = `${input} kilograms = ${kilogramToPound} pounds | ${input} pounds = ${poundToKilogram.toFixed(3)} kilograms`
  }
})

// clear input field and conversion values
clearBtn.addEventListener("click", function() {
  document.getElementById('convert-input').value = "";
  length.innerText = "";
  volume.innerText = "";
  mass.innerText = "";
})