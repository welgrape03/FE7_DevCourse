// 03.js - 함수 기본
// -----------------------------------------------------------

// 함수 선언식
function greet() {
  console.log("greet");
}
greet();

// 함수 표현식 (네이밍 함수)
const hello = function hello() {
  console.log("hello");
};
hello();

// 익명 함수
const afternoon = function () {
  console.log("afternoon");
};
afternoon();

// 화살표 함수
const arrFunc = () => {
  console.log("arrow function");
};
arrFunc();
