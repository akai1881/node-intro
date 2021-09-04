// ! ----------  1 ------------

console.log(global);
// console.log(module);

// const mod = require('./utils.js');
// const { getGreeting, multiplyNumber, PORT, car, routing } = require('./utils.js');
const User = require('./userModel.js');

const user = new User('Tilek', 22);
const main = '/';
const greet = mod.getGreeting('James');
const result = mod.multiplyNumber(20, 10);

// const path = mod.routing[main];s

console.log(greet);
console.log(result);
console.log(`This is port ${mod.PORT}`);
console.log(mod.car);
console.log(user.getAge());
// console.log(path());
