const obj = {
  name: "Himank",
  age: 99,
  getAllFriends: function () {
    console.log(nestedObj.nestedFunc());
    console.log(this);
  },
};
const nestedObj = {
  nestedName: "Suiwala",
  nestedAge: 123,
  nestedFunc: function () {
    console.log("Nested", this);
  },
};
console.log(obj.getAllFriends());
/*
 Nested {
  nestedName: 'Suiwala',
  nestedAge: 123,
  nestedFunc: [Function: nestedFunc]
}
undefined
{ name: 'zHimank', age: 99, getAllFriends: [Function: getAllFriends] }
undefined
*/

function User(name, age, school) {
  this.name = name;
  this.age = age;
  this.school = school;
  return this;
}

let u1 = User("Himank", 123, "GGn");
let u2 = User("Suiwala", 321, "DELhi");
// console.log(u1);
/*
  name: 'Himank',
  age: 123,
  school: 'GGn'
*/
u1 = new User("Himank", 123, "GGn");
u2 = new User("Suiwala", 321, "DELhi");
console.log({ u1, u2 });
/*
{
  u1: User { name: 'Himank', age: 123, school: 'GGn' },
  u2: User { name: 'Suiwala', age: 321, school: 'DELhi' }
}

*/
// background-color: #2b2a33;