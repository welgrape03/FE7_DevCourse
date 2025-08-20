// 07.js - 다양한 함수 정의 방식
// -----------------------------------------------------------

// 1. 화살표 함수
const sum = (num1, num2) => {
  return num1 + num2;
};
const sum2 = (num1, num2) => num1 + num2;

// 객체 반환 시 소괄호로 감싸기
const returnValue = () => ({ name: "sucoding" });
console.log(returnValue());

// 2. 함수 선언식
function sumDecl(num1, num2) {
  return num1 + num2;
}

// 3. 함수 표현식
const sumExpr = function (num1, num2) {
  return num1 + num2;
};
