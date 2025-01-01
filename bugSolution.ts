function printNumbers(n: number): void {
  if (n <= 0) {
    console.log("No numbers to print.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // Prints "No numbers to print."
printNumbers(-5); // Prints "No numbers to print."