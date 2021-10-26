'use strict';

//Constructor function

const Person = function(firstName, birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
const joe = 'joe';
console.log(joe instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
  console.log(2017 - this.birthYear);
}
jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
  return [...new Set(this)];
};
console.log(arr.unique());


//ES6 Classes

class PersonCl{
  constructor(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

  greet(){
    console.log(`Hey ${this.firstName}`);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  //static metods
  static hey(){
    cconsole.log('Hey there!');
  }
}

class StudentsCl extends PersonCl{
  constructor(firstName, birthYear, course){
    super(firstName, birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }

  calcAge(){
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`
    );
  }
}

const martha = new StudentsCl('Martha', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
jessica.greet();


//setters and getters

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  }
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//Object.create

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const Student = function (firstName, birthDay, course){
  this.firstName = firstName;
  this.birthDay = birthDay;
  this.course = course;
}

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();

//Inheritance

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course){
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// }

// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();


//another class

class Account {
  //Public fields(instances)
  locale = navigator.language;

  //private fields
  #movements = [];
  // #pin;

  constructor(owner, currency, pin){
  this.owner = owner;
  this.currency = currency;
  this.#pin = pin;
  this.#movements = [];
  this.locale = navigator.language;

  console.log(`Thanks for opening an account ${owner}`);
  }

  //public methods

  //public interface

  getMovements(){
    return this.#movements;
  }

  deposit(val){
    this.#movements.push(val);
    return this;
  }
  withdraw(val){
    this.deposit(-val);
    return this;
  }

  requestLoan(val){
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  //private methods
  // #approveLoan(val){
  //   return true;
  // }
  _approveLoan(val){
    return true;
  }
  
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);


//chaining methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());



