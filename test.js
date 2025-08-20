function calculator(callback) {
  console.log(callback(10, 20));
}
calculator((a, b) => a + b);

function upper(callback) {
  const text = "javascript";
  console.log(callback(text));
}
upper((str) => str.toUpperCase());
