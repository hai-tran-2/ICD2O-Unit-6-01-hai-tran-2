// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * this function find type of triangle
 */

function calculteSumOfTwoNumber() {
  // input
  let firstNumber = parseFloat(document.getElementById("first-number").value)
  let secondNumber = parseFloat(document.getElementById("second-number").value)
  let sumOfNumbers = 0
  let counter = 0

  // process
  while (counter < secondNumber) {
    sumOfNumbers = sumOfNumbers + firstNumber
    counter++
    // output
    document.getElementById("result").innerHTML =
      "The sum of two number is " + sumOfNumbers
  }
}
