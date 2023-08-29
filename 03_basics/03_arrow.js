const user = {
  username: "Himank",
  price: 1234,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Coco";
user.welcomeMessage();
/**
Himank, welcome to website
Coco, welcome to website
 */

// function thisFunction() {
//   let user = "himank";
//   console.log(this.user); //undefined
//   console.log(this); //complete this
// }

// const thisFunction = function () {
//   let user = "himank";
//   console.log(this.user); //undefined
//   console.log(this); //complete this
// };

const thisFunction = () => {
  let user = "himank";
  console.log(this.user); //undefined
  console.log(this); //{}
};

// thisFunction();

// const addTwo = (n1, n2) => {
//   return n1 + n2;
// };
// const addTwo = (n1, n2) => n1 + n2;
// const addTwo = (n1, n2) => (n1 + n2);
const addTwo = (n1, n2) => ({ username: "Himnank" });
console.log(addTwo(10, 20));
