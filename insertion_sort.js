const range = require("./range")
const a = [5, 2, -3, 4, 6, -7, 1, 9, 12, 5, -6]

let item;
for (let k in range(a.length)) {
    item = a[k]
    i = k
    while (i > 0 && a[i - 1] > item) {
        a[i] = a[i - 1]
        i -= 1
    }
    a[i] = item
    console.log(a)
}
console.log(a)