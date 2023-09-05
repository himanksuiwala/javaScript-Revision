// class User {
//   constructor(itemName, itemPrice, itemBrand) {
//     this.itemBrand = itemBrand;
//     this.itemName = itemName;
//     this.itemPrice = itemPrice;
//   }

//   hashedItemName() {
//     return `${this.itemName}xyz`;
//   }
// }

User.prototype.hashedItemName = function () {
  return `${this.itemName}xyz`;
};

let item1 = new User("Coffee", 1.99, "Nescafe");
console.log(item1.hashedItemName()); //Coffeexyz
console.log(item1); //User { itemBrand: 'Nescafe', itemName: 'Coffee', itemPrice: 1.99 }

function User(itemName, itemPrice, itemBrand) {
  this.itemBrand = itemBrand;
  this.itemName = itemName;
  this.itemPrice = itemPrice;
}
