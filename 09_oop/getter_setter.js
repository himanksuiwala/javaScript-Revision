class User {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(password) {
    this._password = password;
  }
}

let user = new User("Himank", "paassword");
console.log(user); //User { user: 'Himank', _password: 'paassword' }
console.log(user.password, user._password); //PAASSWORD paassword
