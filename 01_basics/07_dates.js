let myDate = new Date();
console.table([
  myDate.toDateString(),
  myDate.toISOString(),
  myDate.toLocaleString(),
]);
console.log(typeof myDate);
/*
┌─────────┬────────────────────────────┐
│ (index) │           Values           │
├─────────┼────────────────────────────┤
│    0    │     'Tue Aug 29 2023'      │
│    1    │ '2023-08-28T20:17:40.437Z' │
│    2    │  '29/8/2023, 1:47:40 am'   │
└─────────┴────────────────────────────┘
Object
*/

let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString()); //23/1/2023, 5:03:00 am
let createdDate = new Date("01-14-2023");
let myTimeStamp = Date.now();
console.log(myTimeStamp); //1693254623796
console.log(createdDate.getTime()); //1673634600000
console.log(Math.floor(Date.now() / 1000)); //in seconds
