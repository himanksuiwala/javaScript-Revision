function User(user, password) {
  this._user = user;
  this._password = password;

  Object.defineProperty(this, "user", {
    get: function () {
      return this._user.toUpperCase();
    },
    set: function (val) {
      this._user = val;
    },
  });
}

const u1 = new User("Himank", "abc");
console.log(u1.user, u1._user); //HIMANK Himank
