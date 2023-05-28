'use strict';
class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static maxAge = 20;
  static maxWeight = 100;

  static isMammals(obj) {
    return obj instanceof Mammals;
  }
}

class Birds extends Animals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static maxAge = 10;
  static maxWeight = 5;

  static isBirds(obj) {
    return obj instanceof Birds;
  }
}

class Fish extends Animals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static maxAge = 5;
  static maxWeight = 2;

  static isFish(obj) {
    return obj instanceof Fish;
  }
}

class Predators extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPredators(obj) {
    return obj instanceof Predators;
  }
}

class Whales extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isWhales(obj) {
    return obj instanceof Whales;
  }
}

class Primates extends Mammals {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isPrimates(obj) {
    return obj instanceof Primates;
  }
}

class Dog extends Predators {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isDog(obj) {
    return obj instanceof Dog;
  }
}

class Dolphin extends Whales {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isDolphin(obj) {
    return obj instanceof Dolphin;
  }
}

class Human extends Primates {
  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  static isHuman(obj) {
    return obj instanceof Human;
  }
}

// Создаем объекты для каждого класса
const dog1 = new Dog(5, "Buddy", 20, 4);
const dog2 = new Dog(3, "Max", 15, 4);

const dolphin1 = new Dolphin(10, "Flipper", 1500, 0);
const dolphin2 = new Dolphin(8, "Dolly", 1200, 0);

const human1 = new Human(30, "John", 70, 2);
const human2 = new Human(25, "Emma", 60, 2);

// Проверяем методы и свойства объектов
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
