//#1
//my answer

let scoreD1 = 44;
let scoreD2 = 23;
let scoreD3 = 71;
let scoreK1 = 65;
let scoreK2 = 54;
let scoreK3 = 49;

scoreD1 = 85;
scoreD2 = 54;
scoreD3 = 41;
scoreK1 = 23;
scoreK2 = 34;
scoreK3 = 27;

function calcAverage(x, y, z){
  return (x+y+z)/3
}
const avgDolphins = calcAverage(scoreD1, scoreD2, scoreD3);
console.log(avgDolphins);

const avgKoalas = calcAverage(scoreK1, scoreK2, scoreK3);
console.log(avgKoalas);

function checkWinner(i, n){
  if(i >= n*2){
    console.log(`Dolphins win(${i} vs ${n})`);
  }else if (n >= i*2){
    console.log(`Koalas win(${n} vs ${i})`);
  }else{
    console.log("No team wins!");
  }
}
checkWinner(avgDolphins, avgKoalas);


//#2
//my answer
// const bills = [125, 555, 44];
// console.log(bills);
function calcTip(bill){
  if(bill > 300 || bill < 50){
    tip = bill * 0.2
  }else{
    tip = bill * 0.5
  }
  return tip
}
// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));

// const tips = [];
// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// console.log(tips);

// const total = [];
// total.push(bills[0]+tips[0]);
// total.push(bills[1]+tips[1]);
// total.push(bills[2]+tips[2]);
// console.log(total);

// console.log(bills, tips, total);


//#3
//my answer

const Obj = [
  {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
  },
  {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
  },
];
console.log(Obj);

function calcBMI(i){
  return Obj[i].mass / Obj[i].height ** 2
}
console.log(calcBMI(0));
console.log(calcBMI(1));

console.log(`Mark's BMI (${Math.trunc(calcBMI(0))}) is higher than John's (${Math.trunc(calcBMI(1))})`);

//answer
//const mark = {
//   fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
// };

//const john = {
//  fullName: 'John Smith',
// mass: 92,
// height: 1.95,
// calcBMI: function(){
//   this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
// };

//mark.calcBMI();
//John.calcBMI();
//console.log(mark.bmi, john.bmi);

//if(mark.bmi > john.bmi){
//   console.log(`${mark.fullName}'s BMI (${Math.trunc(mark.bmi)}) is higher than John's (${Math.trunc(john.bmi)})`)
// }else if(mark.bmi < john.bmi){
//   console.log(`${john.fullName}'s BMI (${Math.trunc(john.bmi)}) is higher than ${mark.fullName}'s (${Math.trunc(mark.bmi)})`)
// }


//#4
//my answer
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
  console.log(calcTip(bills[i]));
  tips.push(calcTip(bills[i]));
  const total = bills[i] + calcTip(bills[i]);
  console.log(total);
  totals.push(total);
}
console.log(totals);
console.log(tips);

function calcAverage(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length
}
console.log(calcAverage(totals));

