// 09.js - 논리 연산자
// -----------------------------------------------------------
//  논리 연산자
// && : AND (모두 참일 때 true)
// || : OR  (하나라도 참이면 true)
// !  : NOT (true → false, false → true)
// -----------------------------------------------------------

const ex1 = 10 < 20 && 10 < 15; // true && false → false
const ex2 = 10 > 20 && 10 < 15; // false && true → false
console.log(ex1, ex2);

const ex5 = 10 < 0 || 10 < 20; // false || true → true
console.log(ex5);

// 복잡한 예시
const ex7 = (10 < 20 && 10 < 15) || 10 < 0 || (true && false && true) || true;
console.log(ex7); // true

// 부정 연산자
const ex9 = !(10 < 20); // !(true) → false
const ex10 = !10 < 20; // (!10) < 20 → true
console.log(ex9, ex10);

// Boolean 강제 변환
const x = 10; // truthy
console.log(!!x); // true
