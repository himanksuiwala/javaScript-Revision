function outer() {
  let outerName = "OUTER";

  function inner() {
    let innerName = "INNER";
    console.log("At Inner", outerName);

    function superInner() {
      let superInnerName = "SUPERINNERNAME";
      console.log("At superInner", outerName);
    }
    superInner();
  }

  inner();
}

outer();
