class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `Hi, my name is ${this.name}`;
  }

  getAge() {
    return `I'm ${this.age} years old`;
  }
}

module.exports = User;
