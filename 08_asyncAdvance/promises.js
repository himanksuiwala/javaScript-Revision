// let firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("logging after 1000ms");
//     resolve();
//   }, 5000);
// });

// firstPromise.then((status) => {
//   console.log("Logged here", status);
// });

// new Promise((resolve, reject) => {
//   // console.log({ resolve, reject });
//   setTimeout(() => {
//     console.log("Second Log");
//     resolve({ name: "Himank", age: 123 });
//   }, 1500);
// }).then((data) => {
//   JSON.stringify(data);
//   JSON.parse(data);
//   console.log("After resolveing the promise", typeof data);
//   /*
//    { resolve: [Function (anonymous)], reject: [Function (anonymous)] }
//     Second Log
//     After resolveing the promise { name: 'Himank', age: 123 }
//    */
// });

// let newPromise = new Promise((resolve, reject) => {
//   let condition = true;
//   setTimeout(() => {
//     if (condition) {
//       resolve("Welcome! You're Authorized");
//     } else {
//       reject("Don't try to sneak inn");
//     }
//   }, 1500);
// });

// newPromise
//   .then((status) => {
//     console.log(status);
//     return "Hello";
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .then((status) => {
//     console.log("from previous", status);
//   })
//   .finally(() => {
//     console.log("either resolved or rejected");
//   });

let promiseForAsync = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve("Welcome! You're Authorized");
    } else {
      reject("Don't try to sneak inn");
    }
  }, 1500);
});

async function consumerAsyncPromise() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // console.log(typeof response);
    // console.log(typeof response.json());
  } catch (error) {
    console.log(error);
  }
}

// async function consumerAsyncPromise() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     return await response.json();
//     // const data = await response.json();
//     // console.log(typeof response);
//     // console.log(typeof response.json());
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumerAsyncPromise().then((response) => {
//   console.log(response);
// });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
  });
