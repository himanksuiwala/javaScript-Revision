let num = "aa123aa";

console.log(typeof num); //string

let valueInNumber = Number(num);

console.log(typeof valueInNumber); //number
console.table([typeof null, typeof undefined, valueInNumber]);
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │  'object'   │
│    1    │ 'undefined' │
│    2    │     NaN     │
└─────────┴─────────────┘ */

console.table([
  Boolean(1222),
  Boolean(-220),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  true  │
│    1    │  true  │
│    2    │ false  │
│    3    │ false  │
│    4    │ false  │
└─────────┴────────┘
 */
// *****************************************Operations**************************************

console.table(["1" + 2, 1 + "2", "1" + 2 + 2, 1 + 2 + "2"]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  '12'  │
│    1    │  '12'  │
│    2    │ '122'  │
│    3    │  '32'  │
└─────────┴────────┘

*/
