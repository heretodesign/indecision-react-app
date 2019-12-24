
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi, I am ${this.name}`;
  }
  getDescription() {
    return `My name is ${this.name} && I am ${this.age} years old!`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getHomeLocation() {
    let greeting = super.getGretting();

    if (this.homeLocation) {
      greeting += `I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Person('Abel Sen');
console.log(me.getGretting());

const me1 = new Person('Abel Sen', 20);
console.log(me.getDescription());

const col = new Student('Abel Sen', 20, 'Computer Science');
console.log(me.getGretting());

const adv = new Traveller('Abel', 30, 'Mal');
console.log(adv.getGretting);

const other = new Person();
console.log(other.getGretting);

const other1 = new Person();
console.log(other.getDescription);

const stu = new Student();
console.log(stu);
