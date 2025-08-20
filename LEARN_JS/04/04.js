// 04.js - 함수 매개변수, arguments
// -----------------------------------------------------------

// 호출
// 함수는 함수의 이름과 소괄호를 이용해서 호출
function sum() {}
sum();

// 함수의 매개변수
function sum(a, b) {
  console.log(a + b);
}
sum(10, 20);

// 가변 인자 함수 (ES5) - arguments 객체
function sum() {
  console.log(arguments[0] + arguments[1]);
}
sum(10, 20);

// arguments는 유사 배열 객체
// console.log(arguments[0]); // 10
// console.log(arguments.length);

// -----------------------------------------------------------
// 함수 vs 메서드
const obj = {
  name: "sucoding",
  greet: function () {
    console.log("greet");
  },
};
obj.greet(); // 메서드 호출
