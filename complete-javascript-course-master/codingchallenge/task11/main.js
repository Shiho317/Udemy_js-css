'use script';

console.log('hello js');


//#1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice(1,3);

  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function(age, i){
  if(age >= 3){
    console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
}
  else{
    console.log(`Dog number ${i + 1} is still puppy 🐶`)
  };
  })
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);

//lecture

const createUserName = function(user){
  const username = user.toLowerCase().split(' ').map(name => name[0])
  .join('');
  return username
};

console.log(createUserName('Steven Thomas williams'));


//#2

// const calcAverageHumanAge = function(ages){
//   const dogAgesToHuman = ages.map(age =>
//     (age <= 2 ? age *2 : 16 + age * 4
//   ));
//   console.log(dogAgesToHuman);
  
//   const exclude = dogAgesToHuman.filter(function(age){
//   return age > 18;
// })
// console.log(exclude);

// const calculateAge = exclude.reduce(function(accu, curr){
//   return (accu + curr);
// },0)/exclude.length;
// console.log(calculateAge);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


//#3

const calcAverageHumanAge = ages => {
  const dogAgesToHuman = ages.map(age => 
    (age <= 2 ? age * 2 : 16 + age * 4)).filter(age => age > 18).reduce((accu, age, i, arr) => accu + age / arr.length, 0);
    console.log(dogAgesToHuman);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


//#4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs);

dogs.forEach(function(dog){
  return dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
})


const sarahsDog = dogs.find(function(dog){
  return dog.owners.includes('Sarah');
});
console.log(sarahsDog);
console.log(`Sarah's Dog is too ${sarahsDog.curFood < sarahsDog.recommendedFood * 0.9 ? 'little' : 'much'}`);

const ownersEatTooMuch = dogs.filter(function(dog){
  return dog.curFood > dog.recommendedFood * 1.10
}).flatMap(function(dog){
  return dog.owners
});
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(function(dog){
  return dog.curFood < dog.recommendedFood * 0.90;
}).flatMap(function(dog){
  return dog.owners
});
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much! and ${ownersEatTooLittle.join(' and ')}'s dog eat too little!!`);

console.log(dogs.some(function(dog){
  return dog.curFood === dog.recommendedFood
}));


const okay = function(dog){
  return dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10;
};

console.log(dogs.some(okay));

const okayDogs = dogs.filter(okay);
console.log(okayDogs);

const shallowSort = dogs.slice().sort(function(a, b){
  return a.recommendedFood - b.recommendedFood;
});
console.log(shallowSort);






