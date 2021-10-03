'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const createUserName = function(accs){
  accs.forEach(function(acc){
    acc.userName = acc.owner
    .toLowerCase()
    .split(' ')
    .map(function(name){
      return name[0]
    }).join('');
  });
};
createUserName(accounts);
console.log(accounts);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMoments = function(movements){
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal' ;

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}</div>
    <div class="movements__value">${mov}€</div></div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });    
  };
displayMoments(account1.movements);

const eurToUsd = 1.1;

const movementsUsd = movements.map(mov=>
  mov * eurToUsd
);

console.log(movements);
console.log(movementsUsd);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i) => `Movement ${i +1}: You ${mov > 0 ? 'deposit' : 'withdrawal'}${Math.abs()}`
);
console.log(movementsDescription);


const deposit = movements.filter(function(mov){
  return mov > 0;
})
console.log(movements);
console.log(deposit);

const depositFor = [];
for(const mov of movements) if(mov > 0) depositFor.push(mov);
console.log(depositFor);

const withDrawals = movements.filter(function(mov){
  return mov < 0;
});
console.log(movements);
console.log(withDrawals);

const withDrawalsFor = [];
for(const mov of movements) if(mov < 0) withDrawalsFor.push(mov);
console.log(withDrawalsFor);


const balance = movements.reduce(function(accu, curr){
  return accu + curr;
},0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(function(mov){
    return mov > 0}).reduce(function(accu, mov){
    return accu + mov;
  },0);
  labelSumIn.textContent = `${incomes}€`

  const outcomes = acc.movements.filter(function(mov){
    return mov < 0
  }).reduce(function(accu, mov){
    return accu + mov;
  }, 0);
  labelSumOut.textContent = `${outcomes}€`

  const interest = acc.movements.filter(function(mov){
    return mov > 0
  }).map(function(deposit){
    return (deposit * acc.interestRate) / 100
  }).filter(function(int, i, arr){
    return int >= 1;
  }).reduce(function(accu, int){
    return accu + int
  },0)
  
  labelSumInterest.textContent = `${interest}€`
  console.log(interest);
};
calcDisplaySummary(account1.movements);

const updateUI = function(acc){
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();

  currentAccount = accounts.find(function(acc){
    acc.userName === inputLoginUsername.value;
  });
console.log(currentAccount);

if(currentAccount?.pin === Number(inputLoginPin.value)){
  labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity = 100;

  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();

  updateUI(currentAccount);
}
});