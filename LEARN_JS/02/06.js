// 06.js - 비교 연산자
// -----------------------------------------------------------
//  비교 연산자
// ==   : 값만 비교 (암묵적 형 변환 발생)
// ===  : 값 + 타입까지 비교
// !=   : 값이 다르면 true
// !==  : 값 또는 타입이 다르면 true
// >, <, >=, <= : 대소 비교
// 결과는 항상 Boolean 값(true/false)
// -----------------------------------------------------------

const a = 10 < 20; // true
const b = 10 > 20; // false
console.log(a, b);

const c = 10;
const d = "10";

console.log(c == d); // true (문자열 "10" → 숫자 10 자동 변환)
console.log(c === d); // false (타입 다름)

console.log(c != d); // false
console.log(c !== d); // true

const age1 = 25;
const age2 = 30;
console.log(age1 > age2); // false
console.log(age1 === age2); // false
