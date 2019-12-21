const range = require("./range");
const numbers = [1, 2, 2, 2, 1, 3, 3, 1, 2, 4, 5];
const max = Math.max.apply(Math, numbers);

let count = Array.apply(null, Array(max + 1)).map(() => 0);
for (x of numbers)
    count[x] += 1;

let arr = [];
for (x in range(max + 1))
  for (i in range(count[x]))
    arr.push(parseInt([x]));

console.log(arr);
