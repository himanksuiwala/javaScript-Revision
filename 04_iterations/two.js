const myObj = {
  js: "javaScript",
  cpp: "C++",
  switft: "Swift by apple",
  rb: "ruby",
};

for (const key in myObj) {
  console.log(myObj[key]);
}

const arr = ["js", "rb", "cpp", "java"];

for (const key in arr) {
  console.log(arr[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of america");
map.set("FR", "France");
map.set("IN", "INDIA");
//Not iteratable
// for (const key in map) {
//   console.log(key);
// }
