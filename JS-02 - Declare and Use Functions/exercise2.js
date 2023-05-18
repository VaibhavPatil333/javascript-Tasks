let n1 = "amar";
let n2 = "akbar";
let n3 = "anthony";
console.log(`Welcome ${n1}, ${n2}, ${n3}`);

function age(b1, b2, b3) {
  let age1 = 2023 - b1;
  let age2 = 2023 - b2;
  let age3 = 2023 - b3;
  return `Welcome ${n1}, you are ${age1}. ${n2}, you are ${age2}. ${n3}, you are ${age3}.`;
}
console.log(age(1998, 2000, 2002));
