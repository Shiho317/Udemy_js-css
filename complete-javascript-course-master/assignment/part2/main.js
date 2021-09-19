console.log('hello js');

function describeCountry(country, population, capitalCity){
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const finLand = describeCountry('Finland', 6 , 'Helsinki');
const japan = describeCountry('Jaoan', 30, 'Tokyo');
const canada = describeCountry('Canada', 30, 'Ottawa');
console.log(finLand);
console.log(japan);
console.log(canada);


const worldPopulation = 7900;

function percentageOfWorld1(population){
  return population/worldPopulation*100
}
const china = percentageOfWorld1(1441);
console.log(china);


const percentageOfWorld2 = function(population2){
  return population2/worldPopulation*100
}
const unitedStates = percentageOfWorld2(1200);
console.log(unitedStates);


const percentageOfWorld3 = population3 =>{
  return population3/worldPopulation*100
}
const australia = percentageOfWorld3(250);
console.log(australia);


const describePopulation = (country, population) =>{
  const percentageOfWorld = percentageOfWorld1(1441);
  return `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world`
};
const chinesePopulation =
describePopulation('China',1441);
console.log(chinesePopulation);


// const populations = [];
// populations.push = [
//   {
//     country: 'Japan',
//     population: 30,
//   },
//   {
//     country: 'United States',
//     population: 120,
//   },
//   {
//     country: 'Canada',
//     population: 30,
//   },
//   {
//     country: 'australia',
//     population: 250,
//   },
// ];
// console.log(populations);

// console.log(populations[1]);
// console.log(populations[0]);

const populations = [30, 120, 30, 25];
console.log(populations);
console.log(populations.length);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
console.log(percentages[1]);

const neigbours = ['Germany','Sweden','Switzerland'];
console.log(neigbours);

neigbours.push('Utopia');
console.log(neigbours);

const removed = neigbours.pop("Utopia");
console.log(neigbours);

if(neigbours.includes('Germany')){
  console.log('Probably its a central European country :D')
}

console.log(neigbours[1]);
neigbours[1] = 'Repaublic of Sweden';
console.log(neigbours[1]);


// const myCountry = [
//   {
//     country: 'Japan',
//   },
//   {
//     capital: 'Tokyo',
//   },
//   {
//     language: 'Japanese',
//   },
//   {
//     population: 30,
//   },
//   {
//     neighbours: 'None',
//   },
// ];
// console.log(myCountry);


const yourCountry ={
  country: 'Finland',
  
  capital: 'Helshinki',
  
  language: 'finnish',
  
  population: 6,

  neighbours: ['Germany', 'Sweden', 'France'],

  describe: function(){
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${neigbours.length} neighbouring countries and a capital called ${this.capital}.`
  },

  checkIsland: function(){
    this.isIsland = `${this.neighbours.length === 0 ? true : false}`
    return this.isIsland
  }

}

console.log(yourCountry.checkIsland());

console.log(yourCountry.describe());
console.log(yourCountry);

console.log(`${yourCountry.country} has ${yourCountry.population} million ${yourCountry.language}-speaking people, ${neigbours.length} neighbouring countries and a capital called ${yourCountry.capital}.`);

// yourCountry.population = yourCountry.population - 2;
// console.log(yourCountry.population);

(yourCountry['population']) = (yourCountry['population']) - 2;
console.log(yourCountry.population);


for(let i = 1; i <= 50; i++){
  console.log(`Voter number ${i} is currently voting`);
};


const percentage2 = [];
for(let i = 0; i < populations.length; i++){
  const countryName = percentageOfWorld1(populations[i]);
  percentage2.push(countryName);
}
console.log(percentage2);


const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

for(let i = 0; i < listOfNeighbours.length; i++){
  console.log(`Neighbour:${listOfNeighbours[i]}`);
};




for(let i = 0; i < listOfNeighbours.length; i++){
  const neighBour = listOfNeighbours[i]

  for(let t = 0; t <= 3; t++){
    const neighBours = neighBour[t];
    
    if(neighBours){
      console.log(`Neighbour:${neighBours}`)
    };
  };
}

//answer
// for(let i = 0; i < listOfNeighbours.length; i++)
//    for(let y = 0; y < listOfNeighbours[i].legth; y++)
//  console.log(`Neighbour:${listOfNeighbours[i][y]}`);


const percentages3 = [];
let i = 0;
while(i < populations.length){
  const per = percentageOfWorld1(populations[i]);
  percentages3.push(per);
  i++;
}
console.log(percentages3);

