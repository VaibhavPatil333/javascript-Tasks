var names = ["Maria", "Antony", "Joy", "Juan"];
function addName(n) {
  names.push(n);
  console.log(names);
}
addName("vaibhav");

function isName() {
  return names.includes("vaibhav");
}
console.log(isName());

function cmp(a, b, c, d) {
  let arr1 = [a, b, c, d];
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (names[i] == arr1[j]) {
        console.log(names[i]);
      }
    }
  }
}
cmp("Maria", "vaibhav", "Juan");
var arr2 = [];
function add(a, b, c, d) {
  arr2.push(a, b, c, d);
  for (let i = 0; i < arr2.length - 1; i++) {
    console.log(`${arr2[i]} = ${arr2[i].length}`);
  }
}
console.log(add("jack", "jill", "tom", "jerry"));
