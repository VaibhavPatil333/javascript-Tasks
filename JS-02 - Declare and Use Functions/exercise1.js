const fees = 3;
const interest = 0.1;
const spendings = 1000;
let transaction = 10;

function calculation(f, i, s, trn) {
  var total = s;
  for (let i = 1; i <= trn; i++) {
    total = total + f + (total * i) / 100;
  }
  return total;
}

// calculation(3, 0.1, 1000, 10);
console.log(
  `Total spending of maria in a month= ${calculation(3, 0.1, 1000, 10)}`
);
