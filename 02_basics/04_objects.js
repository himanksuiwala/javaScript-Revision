const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
  email: "gog@gog.com",
  fullname: {
    firstname: "Coco",
    lastname: "Melon",
  },
};

console.log(regularUser + tinderUser);
console.log({ regularUser, tinderUser });
console.log({ ...regularUser, ...tinderUser });
console.log(Object.assign({}, regularUser, tinderUser));
/**
 * [object Object][object Object]
{
  regularUser: {
    email: 'gog@gog.com',
    fullname: { firstname: 'Coco', lastname: 'Melon' }
  },
  tinderUser: { id: '123abc', name: 'Sammy', isLoggedIn: false }
}
{
  email: 'gog@gog.com',
  fullname: { firstname: 'Coco', lastname: 'Melon' },
  id: '123abc',
  name: 'Sammy',
  isLoggedIn: false
}
{
  email: 'gog@gog.com',
  fullname: { firstname: 'Coco', lastname: 'Melon' },
  id: '123abc',
  name: 'Sammy',
  isLoggedIn: false
}

 */

console.log(Object.keys(regularUser));
console.log(Object.values(tinderUser));
/*
[ 'email', 'fullname' ]
[ '123abc', 'Sammy', false ]
*/