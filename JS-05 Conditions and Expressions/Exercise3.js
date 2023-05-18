let num1, start, end;
function range(num1) {
  //   for (let i = start; i <= end; i++) {
  if (num1 >= 0 && num1 <= 25) {
    return `${num1} is between 0 and 25`;
  } else if (num1 >= 26 && num1 <= 100) {
    return `${num1} is between 26 and 100`;
  } else if (num1 > 100) {
    return `${num1} is greater than 100`;
  } else if (num1 < 0) {
    return `${num1} is less than 0 `;
  }
}
// }
console.log(range(101));
