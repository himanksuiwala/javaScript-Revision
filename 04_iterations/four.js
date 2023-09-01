const myNums = [1, 2, 3, 4, 5];

let returnedFromReduced = myNums.reduce((acc, currval) => {
  console.log(`${acc} + ${currval}`);
  return acc + currval;
}, -15);
console.log(returnedFromReduced);
/*
-15 + 1
-14 + 2
-12 + 3
-9 + 4
-5 + 5
0
*/
