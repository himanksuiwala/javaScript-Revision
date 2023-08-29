const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
myArr.unshift(90);
console.log(myArr);
myArr.shift();
console.log(myArr);
/*
[
  90, 1, 2, 3, 4,
   5, 6, 7, 8, 9,
   0
]
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
*/

console.table([
  myArr.includes(0),
  myArr.includes(-1),
  myArr.indexOf(5),
  myArr.indexOf(10),
]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  true  │
│    1    │ false  │
│    2    │   4    │
│    3    │   -1   │
└─────────┴────────┘
*/

const newArr = myArr.join();
console.log(typeof newArr); //string

// SLICE vs SPLICE

const myn1 = myArr.slice(1, 3);
console.log("sliced:", myn1);
console.log("Orignal", myArr);

const myn2 = myArr.splice(1,3)
console.log("sliced2:", myn2);
console.log("Orignal", myArr);
/*
sliced: [ 2, 3 ]
Orignal [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
sliced2: [ 2, 3, 4 ]
Orignal [
  1, 5, 6, 7,
  8, 9, 0
]
*/