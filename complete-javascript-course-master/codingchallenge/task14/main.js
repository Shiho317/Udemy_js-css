'use script';

console.log('hello js');

//#1

// const Car = function(make, speed){
//   this.make = make;
//   this.speed = speed;
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// Car.prototype.accelerate = function(){
//   console.log(10 + this.speed)
// };

// car1.accelerate();
// car2.accelerate();

// Car.prototype.brake = function(){
//   console.log(this.speed - 5);
// };

// car1.brake();
// car2.brake();

//#1

// const Car = function(make, speed){
//   this.make = make;
//   this.speed = speed;
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// Car.prototype.accelerate = function(){
//   const increase = this.speed += 10;
//   console.log(increase);
// };

// car1.accelerate();
// car2.accelerate();

// Car.prototype.brake = function(){
//   const decrease = this.speed -= 5;
//   console.log(decrease);
// };

// car1.brake();
// car1.brake();
// car1.brake();
// car2.brake();


//#2

class Car {
  constructor(make, speed){
  this.make = make;
  this.speed = speed;
  }

accelerate(){
  this.speed += 10;
  console.log(this.speed);
};

brake(){
  this.speed -= 5;
  console.log(this.speed);
};

get speedUS(){
  return this.speed / 1.6;
}

set speedUS(speed){
  this.speed = speed * 1.6;
}
};

const car1 = new Car('Ford', 120);
car1.accelerate();
car1.brake();
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1);


//#3

// const EV = function(make, speed, charge){
//   Car.call(this, make, speed);
//   this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function(){
//   this.speed += 20;
//   this.charge --;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   )
// };

// const car4 = new EV('Tesla', 120, 23);
// car4.chargeBattery(90);
// console.log(car4);
// car4.brake();
// car4.accelerate();


//#4

class CarCl {
  constructor(make, speed){
  this.make = make;
  this.speed = speed;
  }

accelerate(){
  this.speed += 10;
  console.log(this.speed);
};

brake(){
  this.speed -= 5;
  console.log(this.speed);
};

get speedUS(){
  return this.speed / 1.6;
}

set speedUS(speed){
  this.speed = speed * 1.6;
}
};

class EVCl extends CarCl{
  #charge;

  constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
  }

  accelerate(){
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`
    );
    return this;
  };
  
  brake(){
    this.speed -= 5;
    console.log(this.speed);
    return this;
  };
  
  chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this;
  }
  

  get speedUS(){
    return this.speed / 1.6;
  }
  
  set speedUS(speed){
    this.speed = speed * 1.6;
  }
}

const CAR1 = new EVCl('Rivian', 120, 23);
console.log(CAR1);

CAR1.accelerate().chargeBattery(50).brake().accelerate();

console.log(CAR1.speedUS);