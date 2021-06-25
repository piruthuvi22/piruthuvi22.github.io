let num = 68;
let i = 1;

if (num <= i) {
  console.log("not a prime number");
} else {
  do {
    i = i + 1;
  } while (num % i !== 0);
  if (num == i) {
    console.log("prime number");
  } else {
    console.log("not a prime number");
  }
}
