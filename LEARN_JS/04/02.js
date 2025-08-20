// 02.js - 반복문 응용 문제
// -----------------------------------------------------------

// 1. 피보나치 수열
let n = 10;
let result = [0, 1];
for (let i = 1; i < 9; i++) {
  result[i + 1] = result[i - 1] + result[i];
}
console.log(`피보나치 수열(${n}항):`, result);

// 2. 소수 찾기
const primes = [];
for (let i = 0; i < 100; i++) {
  let isPrime = true;
  for (let divisor = 2; divisor < i; divisor++) {
    if (i % divisor === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && i !== 1) primes.push(i);
}
console.log(primes);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25]; // 배열
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log(sum);

// 4. 문자열 뒤집기
const str = "Hello, World!";
let result4 = "";
for (let i = str.length - 1; i >= 0; i--) {
  result4 += str[i];
}
console.log(result4);

// 5. 팩토리얼
let c = 5;
let factorial = 1;
for (let i = 1; i <= c; i++) factorial *= i;
console.log(`${c}의 팩토리얼:`, factorial);

// 6. 암스트롱 수(세 자리)
for (let i = 100; i < 1000; i++) {
  const one = i % 10;
  const ten = Math.floor((i / 10) % 10);
  const hundred = Math.floor(i / 100);

  if (one ** 3 + ten ** 3 + hundred ** 3 === i) {
    console.log(i);
  }
}
