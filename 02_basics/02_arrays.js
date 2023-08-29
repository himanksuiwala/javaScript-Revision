const marvel_heroes = ["spiderman", "thor", "Ironman"];
const dc = ["batman", "flash", "superman"];

// dc.push(marvel_heroes);
// console.log(dc);
// dc.concat(marvel_heroes);
// console.log(dc);
//[ 'batman', 'flash', 'superman', [ 'spiderman', 'thor', 'Ironman' ] ]

let allHeores = dc.concat(marvel_heroes);
allHeores = [...dc, ...marvel_heroes];
console.log(allHeores);
// ["batman", "flash", "superman", "spiderman", "thor", "Ironman"];
let nestedArr = [1, 2, 3, [4, 5, 6], 9, 0];
flattenedArr = nestedArr.flat(1);
console.log(flattenedArr);
[1, 2, 3, 4, 5, 6, 9, 0];

console.table([
  Array.isArray("Himank"),
  Array.from("Himank"),
  Array.from({ name: "Himank" }),
]);
/*
┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬────────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │  5  │ Values │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼────────┤
│    0    │     │     │     │     │     │     │ false  │
│    1    │ 'H' │ 'i' │ 'm' │ 'a' │ 'n' │ 'k' │        │
│    2    │     │     │     │     │     │     │        │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴────────┘
*/

let n1 = 10,
  n2 = 20,
  n3 = 30;
console.log(Array.of(n1, n2, n3));
