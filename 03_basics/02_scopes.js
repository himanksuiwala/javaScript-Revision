let a = 100;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner,", a);
}

// console.log(a);
/*
Inner, 10
100 */

// console.log(b); //b is not defined

function one() {
  const username = "Himank";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  //   console.log(website); //Website is not defined

  two();
}
one(); //Himank

if (true) {
  const username = "himank";
  if (username == "himank") {
    const website = "youtube";
    // console.log(username + website);
  }
  //   console.log(website); //not defined
}
// console.log(username); //not defined

addOne(1); //2
// addTwo(6); //cannot access before initialization

function addOne(num) {
  console.log(num + 1);
}

const addTwo = function (num) {
  console.log(num + 2);
};
console.log(addTwo());
/*
NaN
undefined 
*/
