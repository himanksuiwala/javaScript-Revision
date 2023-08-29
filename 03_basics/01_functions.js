function sum(n1, n2) {
  return n1 + n2;
}

// console.log(sum);
// console.log(sum());
// console.log(sum(3, null));
// console.log(sum(3, undefined));
// console.log(sum(3, "as"));
// console.log(sum(10, 20));
/*
[Function: sum]
NaN
3
NaN
3as
30
 */

function loginUserMessage(username) {
  if (!username) return;
  return `${username} just logged in`;
}
// console.log(loginUserMessage());
//undefined just logged in
//undefined

function calculate(...num1) {
  return num1;
}
console.table([
  calculate(10, 20),
  calculate(10, 20, 30),
  calculate(10, undefined),
  calculate(null, undefined),
]);
/**
┌─────────┬──────┬───────────┬────┐
│ (index) │  0   │     1     │ 2  │
├─────────┼──────┼───────────┼────┤
│    0    │  10  │    20     │    │
│    1    │  10  │    20     │ 30 │
│    2    │  10  │ undefined │    │
│    3    │ null │ undefined │    │
└─────────┴──────┴───────────┴────┘
 */

function calculatePrice(val1, val2, ...nums) {
  return nums;
}

console.log(calculatePrice(10, 20, 30, 40, 50, 60));
//[ 30, 40, 50, 60 ]
