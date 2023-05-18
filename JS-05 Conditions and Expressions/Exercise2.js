console.log(`${false || (true && false)}`); //false
console.log(`${true || 11 + 12}`); //evaluates to true.
console.log(`${31 + 22 || true}`); //evaluates to 53.
console.log(`${true && 1 + 7}`); //evaluates to 8.
console.log(`${32 * 4 >= 129}`); //evaluates to false.
console.log(`${1 + 2 && true}`); //evaluates to true.
console.log(`${false && 3 + 4}`); //evaluates to false.
console.log(`${false !== !true}`); //evaluates to false.
console.log(`${true === 4}`); //evaluates to false.
console.log(`${false === (847 === "847")}`); //evaluates to true.
console.log(`${false === (887 == "887")}`); //evaluates to false.
console.log(`${!true || !(100 / 5) === 20 || 328 / 4 === 82 || false}`); //evaluates to true
