let arr = ["banana", "apple", "orange"];
let obj = { name: "철수", age: 20 };

for (let index in arr) {
  console.log(index); // 0, 1, 2
  console.log(arr[index]); // banana, apple, orange
}

for (let value of arr) {
  console.log(value); // banana, apple, orange
}

arr.forEach((value, index) => {
  console.log(index, value);
  // 0 banana, 1 apple, 2 orange
});

console.log(Object.keys(arr)); // ["0","1","2"]
console.log(Object.values(arr)); // ["banana","apple","orange"]
console.log(Object.entries(arr)); // [["0","banana"], ["1","apple"], ["2","orange"]]
