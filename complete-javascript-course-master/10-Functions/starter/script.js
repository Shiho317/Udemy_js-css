'use strict';

const greet = (greeting) =>{
  return (name) =>{
    console.log(`${greeting}${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));