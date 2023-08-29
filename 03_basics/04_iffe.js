(function f() {
  console.log("HELLO");
})();
//; is required

(() => {
  console.log("MESSAGE-2");
})();

((name) => {
  console.log(`Hello ${name}`);
})('COco');
