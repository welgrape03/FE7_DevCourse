// 00_콜백과 고차 함수.js
// ---------------------------------------------
//  콜백 함수 (Callback Function)
// - 다른 함수의 "인자"로 전달되는 함수
// - 전달된 함수는 나중에 호출됨
// ---------------------------------------------

// 1. 기본 예제
function greet(name) {
  console.log(`Hello, ${name}`);
}
function processUserInput(callback) {
  const name = "John";
  callback(name); // 전달된 함수 실행
}
processUserInput(greet); // Hello, John

// ---------------------------------------------
// 2. 동기 콜백 (Synchronous Callback)
// - 즉시 실행되는 콜백
[1, 2, 3].forEach(function (num) {
  console.log(num);
});
// 출력
// 1
// 2
// 3

// ---------------------------------------------
// 3. 비동기 콜백 (Asynchronous Callback)
// - 일정 시간이 지난 뒤 실행
console.log("시작");
setTimeout(function () {
  console.log("3초 후 실행");
}, 3000);
console.log("끝");
// 출력 순서: 시작 → 끝 → 3초 후 실행

// ---------------------------------------------
// 4. 고차 함수 (Higher-Order Function)
// - 함수를 인자로 받거나, 함수를 반환하는 함수

// (1) 함수를 반환하는 함수
function calculator(callback) {
  return () => callback(10, 20);
}
const sumFn = calculator((a, b) => a + b);
console.log(sumFn()); // 30

const mulFn = calculator((a, b) => a * b);
console.log(mulFn()); // 200

// (2) 인자로 함수 받기
function run(op) {
  console.log(op(5, 7));
}
run((a, b) => a + b); // 12
run((a, b) => Math.max(a, b)); // 7

// ---------------------------------------------
// 5. 클로저 활용 예제
// - 함수가 자신이 선언된 환경(Lexical Environment)의 변수를 기억하고 사용하는 것
function makeGreeter(name) {
  return function () {
    return `Hello! ${name}`;
  };
}
const greetJohn = makeGreeter("John");
console.log(greetJohn()); // Hello! John

// ---------------------------------------------
// 6. 연산자 선택 함수
function getOperation(op) {
  if (op === "add") return (a, b) => a + b;
  else return (a, b) => a - b;
}
const add = getOperation("add");
console.log(add(5, 3)); // 8

const minus = getOperation("something");
console.log(minus(5, 3)); // 2 (기본적으로 뺄셈 반환)

// ---------------------------------------------
// ✅ 요약
// - 콜백 함수는 다른 함수에 인자로 전달되어 실행되는 함수
// - 동기 콜백: 즉시 실행, 비동기 콜백: 나중에 실행
// - 고차 함수: 함수를 반환하거나 인자로 받는 함수
// - 클로저: 함수가 외부 환경의 변수를 기억하는 현상
