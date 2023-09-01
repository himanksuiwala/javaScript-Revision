const myObj = {
  js: "javaScript",
  cpp: "C++",
  switft: "Swift by apple",
  rb: "ruby",
};

// for (const key in myObj) {
//   console.log(myObj[key]);
// }

const arr = ["js", "rb", "cpp", "java"];

// for (const key in arr) {
//   console.log(arr[key]);
// }

// arr.forEach((val) => {
//   console.log(val);
// });

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of america");
map.set("FR", "France");
map.set("IN", "INDIA");
// Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'United States of america',
//     'FR' => 'France'
//   }
//Not iteratable
// for (const key in map) {
//   console.log(key);
// }

function sayHello(item) {
  console.log(`${item} ,hello`);
}

// arr.forEach(sayHello);

// arr.forEach((item, idx, arr) => {
//   console.log(item, idx, arr);
// });
/**
  js 0 [ 'js', 'rb', 'cpp', 'java' ]
rb 1 [ 'js', 'rb', 'cpp', 'java' ]
cpp 2 [ 'js', 'rb', 'cpp', 'java' ]
java 3 [ 'js', 'rb', 'cpp', 'java' ]

 */




