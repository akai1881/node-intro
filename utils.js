const multiplyNumber = (a, b) => {
  return a * b;
};

const getGreeting = (name) => `Hello ${name}`;

const car = {
  brand: 'Ford',
  model: 'Mustang',
  make: 2005,
  hp: 200,
};

const PORT = 3000;

// module.exports = {
//   multiplyNumber,
//   getGreeting,
//   car,
//   PORT,
// };

// module.exports = {
//   multiplyNumber,
//   getGreeting,
//   car,
//   PORT,
// };

exports.multiplyNumber = multiplyNumber;

exports.getGreeting = getGreeting;

exports.car = car;

exports.PORT = PORT;

exports.routing = {
  '/': () => 'index.html',
  '/user': () => ({ user: 'Kubat' }),
};
