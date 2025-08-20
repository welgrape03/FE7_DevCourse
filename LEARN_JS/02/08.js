// 08.js - 삼항 연산자 활용 예제
// -----------------------------------------------------------

// 1. 양수/0/음수 판별
const num = -10;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result); // Negative

// 2. 세 수 중 최댓값
const a = 10;
const b = 20;
const c = 15;
const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max); // 20

// 3. 짝수/홀수 판별
const number = 9;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd); // Odd

// 4. 로그인 여부
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome" : "Please Log In";
console.log(message);

// 5. 성인/미성년자 판별
const age = 19;
const adultOrMinor = age >= 18 ? "Adult" : "Minor";
console.log(adultOrMinor); // Adult
