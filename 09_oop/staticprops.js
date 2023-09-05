class User {
  constructor(username) {
    this.username = username;
  }

  logUsername() {
    console.log(`Username: ${this.username}`);
  }

  static generateId() {
    return `GeneratedId: ${this.username}`;
  }

  useGeneratedIdForHash() {
    this.id = generateId();
    console.log(`Hashed Id:`, this.id);
  }
}

let u1 = new User("Himank");
u1.logUsername();
console.log(u1.useGeneratedIdForHash());
