//constructor function

/* const car = {
    merk: 'BMW',//properti
    color: 'Red',
    maxSpeed: 1200,
    chassisNumber: 'F-202',

    drive: () => { //method
        console.log('Driving');
    },
    brake: ()=> {
        console.log('Brake');
    },
    turn: () => {
        console.log('turning');
    }

}

console.log(car.merk);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);
car.drive();
car.brake();
car.turn();
*/

class Car {
  constructor(brand, color, maxSpeed, chassisNumber) { //properti
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
}

Car.prototype.drive = function () {
  console.log(`${this.brand} ${this.color} is driving`);
};
Car.prototype.reverse = function () {
  console.log(`${this.brand} ${this.color} is reversing`);
};
Car.prototype.brake = function () {
  console.log(`${this.brand} ${this.color} is brake`);
};

const car1 = new Car("Toyota", "Silver", 1200, "A-01");

console.log(car1);

class Character {
  constructor(name, clan, level, job, Skill) {
    this.name = name;
    this.clan = clan;
    this.level = level;
    this.job = job;
    this.Skill = Skill;
  }
}

Character.prototype.getQuest = function () {
  console.log(`${this.name} ${this.clan} get quest at TownHall`);
};
Character.prototype.sleep = function () {
  console.log(`${this.name} ${this.clan} Sleep at House`);
};
Character.prototype.death = function () {
  console.log(
    `${this.name} ${this.clan} death while doing quest respawn back at house`
  );
};

const chara1 = new Character("Gojo", "Satoru", 12, "Mentor", "Six Eyes");
console.log(chara1);
chara1.getQuest();
chara1.sleep();
chara1.death();
console.log(typeof Character);
