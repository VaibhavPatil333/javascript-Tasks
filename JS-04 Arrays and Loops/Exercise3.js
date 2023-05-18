/*– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.*/
let xvalue = 10;
console.log(xvalue);
while (xvalue > 0) {
  console.log((xvalue -= 0.5));
}
console.log("************************************");
/*- Print all the odd numbers between 1 - 100.*/
let i = 1;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
console.log("************************************");
/*- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]*/
function printno(n) {
  i = 1;
  while (i <= n) {
    console.log(`[${i}]`);
    i++;
  }
}
printno(6);

console.log("************************************");
/*- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190*/

function sum(n) {
  let i = 1;
  var sum1 = 0;
  while (i <= n) {
    sum1 += i;
    i++;
  }
  return sum1;
}
console.log(sum(10));
