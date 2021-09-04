const num = 1;
const num2 = 2;
const sum = num + num2;

_ + 3; // в REPL можно обратится к предыдущему значению при помощи _

const multiply = (a, b) => {
  return a * b;
};

multiply(5, 25);

for (let i = 1; i <= 20; i++) {
  console.log(`Item: ${i}`);
}
