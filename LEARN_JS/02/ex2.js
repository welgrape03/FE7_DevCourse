// 삼항 연산자
// 1. 숫자비교
const num = -10;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

// 2. 최댓값 찾기
let a = 10;
let b = 20;
let c = 30;
console.log(a > b ? (a > c ? a : c) : b > c ? b : c);

// 3. 짝수 홀수 확인
let number = 10;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 4. 로그인 확인
let isLoggedIn = true;
console.log(isLoggedIn === true ? "Welcome" : "Please log in");

// 5. 성인 확인
let age = 23;
console.log(age > 18 ? "Adult" : "Minor");
