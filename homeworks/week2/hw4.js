function printFactor(n) {
  let self = n;
  console.log(1);
  for (let i = 2; i < n; i += 1) {
    let hasPrint = false;
    while (self % i === 0) {
      self /= i;
      if (!hasPrint) {
        console.log(i);
        hasPrint = true;
      }
    }
  }
  console.log(n);
}

printFactor(10);
console.log();
printFactor(7);
console.log();
printFactor(120);
