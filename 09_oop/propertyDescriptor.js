const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
  name: "Ginger Tea",
  price: 1.99,
  brand: "Twinnings",
};

const newDescriptor = Object.getOwnPropertyDescriptor(chai, "name");
console.log(newDescriptor);
// {
//     value: 'Ginger Tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
Object.defineProperty(chai, "name", {
  writable: false,
//   enumerable: false,
});

chai.name = "Cahi";
console.log(chai);
