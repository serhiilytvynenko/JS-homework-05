'use strict';
class Animals {
  constructor(age, name, weight) {
    this.age = age;
    this.name = name;
    this.weight = weight;
  }

  move() {
    console.log(`${this.name} is moving.`);
  }

  say() {
    console.log(`${this.name} is making a sound.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  static isAnimals(obj) {
    return obj instanceof Animals;
  }
}

class Mammals extends Animals {
  static maxAge = 20;
  static maxWeight = 100;

  static isMammals(obj) {
    return obj instanceof Mammals;
  }
}

class Birds extends Animals {
  static maxAge = 10;
  static maxWeight = 5;

  static isBirds(obj) {
    return obj instanceof Birds;
  }
  move() {
    console.log(`${this.name} is running.`);
  }

  say() {
    console.log(`${this.name} is barking.`);
  }

  eat() {
    console.log(`${this.name} is eating bones.`);
  }
}

class Fish extends Animals {
  static maxAge = 5;
  static maxWeight = 2;

  static isFish(obj) {
    return obj instanceof Fish;
  }
  move() {
    console.log(`${this.name} is running.`);
  }

  say() {
    console.log(`${this.name} is barking.`);
  }

  eat() {
    console.log(`${this.name} is eating bones.`);
  }
}

class Predators extends Mammals {
  static isPredators(obj) {
    return obj instanceof Predators;
  }
}

class Whales extends Mammals {
  static isWhales(obj) {
    return obj instanceof Whales;
  }
}

class Primates extends Mammals {
  static isPrimates(obj) {
    return obj instanceof Primates;
  }
}

class Dog extends Predators {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight);
    this.limbAmount = limbAmount;
  }

  static isDog(obj) {
    return obj instanceof Dog;
  }

  move() {
    console.log(`${this.name} is running.`);
  }

  say() {
    console.log(`${this.name} is barking.`);
  }

  eat() {
    console.log(`${this.name} is eating bones.`);
  }
}

class Dolphin extends Whales {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight);
    this.limbAmount = limbAmount;
  }

  static isDolphin(obj) {
    return obj instanceof Dolphin;
  }

  move() {
    console.log(`${this.name} is swimming.`);
  }

  say() {
    console.log(`${this.name} is making dolphin sounds.`);
  }

  eat() {
    console.log(`${this.name} is eating fish.`);
  }
}

class Human extends Primates {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight);
    this.limbAmount = limbAmount;
  }

  static isHuman(obj) {
    return obj instanceof Human;
  }

  move() {
    console.log(`${this.name} is walking.`);
  }

  say() {
    console.log(`${this.name} is talking.`);
  }

  eat() {
    console.log(`${this.name} is eating a meal.`);
  }
}

const dog1 = new Dog(5, "Buddy", 20, 4);
const dog2 = new Dog(3, "Max", 15, 4);

const dolphin1 = new Dolphin(10, "Flipper", 1500, 0);
const dolphin2 = new Dolphin(8, "Dolly", 1200, 0);

const human1 = new Human(30, "John", 70, 2);
const human2 = new Human(25, "Emma", 60, 2);

console.log("=== Testing Dog ===");
dog1.move();
dog1.say();
dog1.eat();
console.log(Dog.isDog(dog1));

console.log("=== Testing Dolphin ===");
dolphin2.move();
dolphin2.say();
dolphin2.eat();
console.log(Dolphin.isDolphin(dolphin2));

console.log("=== Testing Human ===");
human1.move();
human1.say();
human1.eat();
console.log(Human.isHuman(human1));
