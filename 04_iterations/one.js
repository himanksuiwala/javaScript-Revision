const arr = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];

for (let num of arr) {
  console.log(num);
}
/*1 2 3 4 5 6 7 undefined 8 9 10*/

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of america");
map.set("FR", "France");
map.set("IN", "INDIA");
console.log(map);
/**
  Map(3) {
  'IN' => 'INDIA',
  'USA' => 'United States of america',
  'FR' => 'France'
}
 */
for (let [key, val] of map) {
  console.log(key, ":", val);
}

const Obj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for(let [key,val] of Obj){
//     console.log();
// }
