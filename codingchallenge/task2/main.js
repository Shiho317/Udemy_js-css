//#1

//my answer

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;


const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight **2;

console.log(markBMI > johnBMI);

//answer

// + add
//const markHigherBMI = markBMI > johnBMI;
//console.log(markBMI, johnBMI)

//#2

//my answer

if(markBMI > johnBMI){
  console.log(`Mark's BMI:${markBMI} is higher than John's:${johnBMI}!`);
}else{
  console.log(`John's BMI:${johnBMI} is higher than Mark's:${markBMI}!`);
}

//correct all

//#3

// let scoreD1 = 96;
// let scoreD2 = 108;
// let scoreD3 = 89;
// let scoreK1 = 88;
// let scoreK2 = 91;
// let scoreK3 = 110;

// const dolphinsAverage = (scoreD1 + scoreD2 + scoreD3)/3;
// const koalasAverage = (scoreK1 + scoreK2 + scoreK3)/3;

// if(dolphinsAverage > koalasAverage){
//   console.log('Dolphins is a winner!');
// }else if(dolphinsAverage < koalasAverage){
//   console.log('Koalas is a winner!');
// }else{
//   console.log('It is a draw!');
// }

//Bonus1

// let scoreD1 = 97;
// let scoreD2 = 112;
// let scoreD3 = 101;
// let scoreK1 = 109;
// let scoreK2 = 95;
// let scoreK3 = 123;

// const dolphinsAverage = (scoreD1 + scoreD2 + scoreD3)/3;
// const koalasAverage = (scoreK1 + scoreK2 + scoreK3)/3;

// if(dolphinsAverage > 100 && dolphinsAverage > koalasAverage){
//   console.log('Dolphins is a winner!');
// }else if(koalasAverage > 100 && koalasAverage > dolphinsAverage){
//   console.log('Koalas is a winner!');
// }else{
//   console.log('No winner.');
// }

//Bonus2

let scoreD1 = 97;
let scoreD2 = 112;
let scoreD3 = 101;
let scoreK1 = 109;
let scoreK2 = 95;
let scoreK3 = 106;

const dolphinsAverage = (scoreD1 + scoreD2 + scoreD3)/3;
const koalasAverage = (scoreK1 + scoreK2 + scoreK3)/3;

if(dolphinsAverage >= 100 && dolphinsAverage > koalasAverage){
  console.log('Dolphins is a winner!');
}else if(koalasAverage >= 100 && koalasAverage > dolphinsAverage){
  console.log('Koalas is a winner!');
}else if(koalasAverage >= 100 && dolphinsAverage >= 100 && koalasAverage === dolphinsAverage){
  console.log('Both win!!');
}else{
  console.log('No winner.');
}


//#4

//my answer
let bills = 430;

switch (bills){
  case bills < 50 || bills > 300:
  var tip = bills * 0.15;
  console.log(tip);
  break

  default:
  var tip = bills * 0.2;
  console.log(tip);
};

const totalValue = bills + tip;

console.log(`The bill was ${bills}, the tip was ${tip}, and the total value ${totalValue}`);


//answer

// const bills = 275;

// const tip = bills >= 50 && bills <=300 ? bills * 0.2 : bills * 0.15;

// console.log(tip)

// const totalValue = bills + tip;

// console.log(`The bill was ${bills}, the tip was ${tip}, and the total value ${totalValue}`);


