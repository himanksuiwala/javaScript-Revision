class User {
  constructor(user) {
    this.user = user;
  }

  logName() {
    console.log(`Username is ${this.user}`);
  }
}

class Teacher extends User {
  constructor(user, classTaught, subject) {
    super(user);
    this.classTaught = classTaught;
    this.subject = subject;
  }

  addCourse() {
    console.log(`New Course was added by ${this.user}`);
  }
}

let t1 = new Teacher("Himank", 12, "Polity");
console.log(t1); //Teacher { user: 'Himank', classTaught: 12, subject: 'Polity' }
console.log(t1 instanceof Teacher, t1 instanceof User); //true true
console.log(t1.addCourse()); //New Course was added by Himank

let u1 = new User("himank");
console.log(u1.logName()); //Username is himank
