let country = 'Japan';
let continent = 'Asia';
let population = 30;

console.log( `my country,${country} is in ${continent}.and also have ${population}million people.`);

let isIsland = true;
let language = 'japanese';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'English';
const countryName = 'Japan';
const isLand = true;

console.log(`${population / 2}million`);
console.log(`${population * 1}million`);
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePop = 33;
console.log(population > averagePop);
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// population = 130;

if(population > 33){
  console.log(`${country}'s population is above average`);
}else{
  console.log(`the ${population} million is the ${averagePop} million minus the ${country}'s population`);
};

let first = '9' - '5';
let second = '19' - '13' + '17';
let third = '19' - '13' + 17;
let forth = '123' < 57;
let fifth = 5 + 6 + '4' + 9 - 4 - 2;

console.log(first);
console.log(second);
console.log(third);
console.log(forth);
console.log(fifth);

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

// if(numNeighbours === 1){
//   console.log("1 border! Why is this happening?");
// }else if(numNeighbours > 1){
//   console.log('More than 1 border');
// }else{
//   console.log('No borders');
// }

if(population < 50 && language === 'English' && continent !== 'island'){
  console.log(`You should live in ${country}`);
}else{
  console.log(`${country} does not meet your criteria`);
}

switch(language){
  case 'Chinese'||'Mandarin':
    console.log('MOST number of native speakers!');
    break
  
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break

  case 'English':
    console.log('3rd place');
    break

  case 'Hindi':
    console.log('Number 4');
    break

  case 'Arabic':
    console.log('5th most spoken language');
    break

  default:
    console.log('Great language too :D');
};

population = 130;

let result = population > 33 ? `${country}'s population is above ${averagePop}.` : `${country}'s population is below ${averagePop}.`;

console.log(result);


