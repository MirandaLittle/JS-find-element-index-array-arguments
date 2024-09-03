'use strict';

// JS find() element, index, array example

const isEvenNumber = (element, index, array) => {
  console.log({
    element,
    index,
    array
  });
  return element % 2 === 0;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];

const foundEven = numbers.find(isEvenNumber);
console.log("foundEven: " + foundEven); // 2

// Same example but with an anonymous function
console.log("\n\nAnon callback function: ");

const foundEvenWithAnonFn = numbers.find((element, index, array) => {
  console.log({
    element,
    index,
    array
  });
  return element % 2 === 0;
});

console.log("foundEvenWithAnonFn: " + foundEvenWithAnonFn);