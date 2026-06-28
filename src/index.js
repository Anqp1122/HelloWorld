function greet(name = "World") {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

if (require.main === module) {
  console.log(greet());
  console.log(`1 + 2 = ${add(1, 2)}`);
  console.log(`3 x 4 = ${multiply(3, 4)}`);
}

module.exports = { greet, add, multiply };
