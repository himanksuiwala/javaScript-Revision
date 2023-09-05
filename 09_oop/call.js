function setUsername(username) {
  this.username = username;
}

function createUser(username, email, age) {
  setUsername.call(this, username);
  this.email = email;
  this.age = age;
}

const u1 = new createUser("Himank", "s@goog.com", 99);
console.log(u1);
// createUser { username: 'Himank', email: 's@goog.com', age: 99 }

class User{
    
}