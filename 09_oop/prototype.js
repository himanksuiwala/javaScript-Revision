let heroPower = {
  thor: "Hammer",
  spiderman: "Sling",
  getSpideyPower: function () {
    console.log(`Spidey has power of ${this.spiderman}`);
  },
};

Object.prototype.heyHimank = function () {
  console.log(
    "This function can be called by any Object(Functions, strings, Array etc.)"
  );
};
String.prototype.byeHimank = 101;

let str = "himank";

// console.log(str.byeHimank);
// console.log(heroPower.heyHimank());
// 101
// This function can be called by any Object(Functions, strings, Array etc.)
// undefined
const User = {
  name: " Username",
  age: 123,
};
const TA = {
  isAvailable: true,
  makeAssignment: "JS",
};
const Teacher = {
  makeVideo: false,
  __proto__: TA,
};
console.log(Teacher.isAvailable); //true
console.log(Teacher.makeAssignment); //JS

// Teacher.__proto__ = User;
Object.setPrototypeOf(Teacher, User);
console.log(Teacher.name); // Username
