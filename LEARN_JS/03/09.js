// 9.js - 배열과 객체 순회
// -----------------------------------------------------------

const arr = ["banana", "apple", "orange"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

const obj = { name: "철수", age: 20, key: "h1" };
console.log(obj.name);
console.log(obj.age);

// for → 배열 인덱스를 직접 다루고 싶을 때
console.log("=== for (let i=0) ===");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...in → 객체의 속성(key)을 순회할 때
console.log("=== for...in (배열 index 순회) ===");
for (const index in arr) {
  console.log(arr[index]);
}

console.log("=== for...in (객체 key 순회) ===");
for (const key in obj) {
  console.log(obj[key]);
}

// for...of → 배열·문자열 등 이터러블의 값(value)을 순회할 때
console.log("=== for...of (배열 value 순회) ===");
for (const value of arr) {
  console.log(value);
}
