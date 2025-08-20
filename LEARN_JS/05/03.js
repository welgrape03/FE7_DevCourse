// 03_함수와 일급 객체.js
// ---------------------------------------------
//  함수와 일급 객체
// - 자바스크립트에서 함수는 "일급 객체(first-class citizen)"
// - 즉, 함수도 하나의 값으로 취급되어 변수에 담기거나, 인자로 전달되거나,
//   반환값이 될 수 있으며, 프로퍼티를 가질 수도 있음
// ---------------------------------------------

// 1. 함수 생성 방법
// ---------------------------------------------

// (1) 함수 선언식
function greet1() {
  console.log("Hello (Declaration)");
}
greet1();

// (2) 함수 표현식
const greet2 = function () {
  console.log("Hello (Expression)");
};
greet2();

// (3) 화살표 함수
const greet3 = () => console.log("Hello (Arrow Function)");
greet3();

// ---------------------------------------------
// 2. 일급 객체로서의 함수 특징
// ---------------------------------------------

// (1) 변수나 데이터 구조에 담을 수 있다
const sayHello = function () {
  console.log("Hello, World");
};
sayHello();

// (2) 함수의 인자로 전달할 수 있다
function greet(fn) {
  fn(); // 전달받은 함수 실행
}
greet(sayHello);

// (3) 함수의 반환값으로 사용할 수 있다
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10

// (4) 런타임에 생성할 수 있다
// - new Function 구문 사용 (잘 쓰진 않음)
const dynamicFn = new Function("a", "b", "return a + b");
console.log(dynamicFn(3, 4)); // 7

// (5) 프로퍼티를 가질 수 있다
sayHello.lang = "korean";
console.log(sayHello.lang); // korean

// ---------------------------------------------
// 3. 연습 예제
// ---------------------------------------------

// calculator : 콜백 함수 실행
function calculator(callback) {
  console.log(callback(10, 20));
}
calculator((a, b) => a + b); // 30
calculator((a, b) => a - b); // -10

// stringProcessor : 문자열 가공
function stringProcessor(callback) {
  const text = "JavaScript";
  console.log(callback(text));
}
stringProcessor((str) => str.toUpperCase()); // JAVASCRIPT
stringProcessor((str) => str.length); // 10

// run : 함수 인자로 전달
function run(op) {
  console.log(op(5, 7));
}

function add(a, b) {
  return a + b;
}
run(add); // 12
run(function (a, b) {
  return a * b;
}); // 35
run((a, b) => Math.max(a, b)); // 7

// ---------------------------------------------
// ✅ 요약
// - 함수는 "값"처럼 다룰 수 있다 (저장, 전달, 반환, 생성, 속성 보유)
// - 이 때문에 자바스크립트에서는 고차 함수(Higher-Order Function) 구현 가능
