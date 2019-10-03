const range = require("./range");
const numbers = [1, 2, 2, 2, 1, 3, 3, 1, 2, 4, 5];
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
}

// console.log(Math.max.apply(Math, numbers));

let count = Array.apply(null, Array(max + 1)).map(() => 0);

for (x of numbers) {
  count[x] += 1
}
console.log(count);

