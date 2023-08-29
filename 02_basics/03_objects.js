// Object.create

let newKey = Symbol("Key1");

const user = {
  name: "Himank",
  age: 23,
  location: "Gurgaon",
  email: "himank@google.com",
  isLoggedIn: false,
  [newKey]: "symKey",
  lastLoginDays: ["Monday", "Saturday"],
};

user.email = "coco@gmal.com";
console.log(user.email);
// Object.freeze(user);
user.email = "casdasdao@gmal.com";
console.log(user.email);
//coco@gmal.com
//coco@gmal.com

user.greeting = function () {
  console.log("Heya");
};

user.Bye = function () {
  console.log(`Byea ${this.name}`);
};

console.log(user.greeting);
console.log(user.greeting());
/**
 [Function (anonymous)]
Heya
undefined

 * 
 */

// console.table([user.greeting, user.greeting(), user.Bye()]);
