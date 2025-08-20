// 02.js - typeof 연산자
// -----------------------------------------------------------
//  typeof
// - 값의 자료형을 문자열로 반환하는 연산자
// -----------------------------------------------------------

let num = 42;
console.log(typeof num); // "number"

let name = "John";
console.log(typeof name); // "string"

let isTrue = true;
console.log(typeof isTrue); // "boolean"

let person = { name: "Alice", age: 30 };
console.log(typeof person); // "object"

let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits); // "object" (배열도 사실은 객체)

console.log(typeof null); // "object" (JS 초기 설계 오류지만 표준으로 굳어짐)

console.log(typeof ("A" + "B")); // "string"
console.log(typeof "A" + "B"); // "stringB" (우선순위 주의!)
