// 07.js - 삼항 연산자
// -----------------------------------------------------------
//  삼항 연산자
// - 조건 ? 참일 때 값 : 거짓일 때 값
// - 간단한 조건 분기에 유용
// -----------------------------------------------------------

const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? "살 수 있다" : "살 수 없다";
console.log(buyAble);

// 학점 판정 예제
const score = 96;
const grade =
  score >= 90
    ? score > 95
      ? "A+"
      : "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

console.log(grade); // A+
