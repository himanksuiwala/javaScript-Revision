let arrayOfObjects = [
  {
    name: "Himank",
    age: 19,
  },
  {
    name: "Kiku",
    age: 9,
  },
  {
    name: "Paul",
    age: 29,
  },
];

// arrayOfObjects.forEach((item) => {
//   console.log(item);
// });

/**
  { name: 'Himank', age: 19 }
  { name: 'Kiku', age: 9 }
  { name: 'Paul', age: 29 }
   */

// let returedVal = arrayOfObjects.forEach((item) => {
//   console.log(item);
// });
// console.log(returedVal); //undefined



// let returnedVal = arrayOfObjects.filter((item) => item.age < 10);
// OR

let returnedVal = arrayOfObjects.filter((item) => {
  return item.age < 10;
});
console.log(returnedVal);  //[ { name: 'Kiku', age: 9 } ]
