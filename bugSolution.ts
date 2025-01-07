function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB;
}

let result1 = addSafe(1, "2"); // Works correctly
let result2 = add(1, 2); // Works correctly
console.log(result1); // 3
console.log(result2); //3