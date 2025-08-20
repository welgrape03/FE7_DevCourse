// 08.js - 함수 실습 문제 모음
// -----------------------------------------------------------

// 1. 매개변수 총합 함수
function sum(...numbers) {
  let result = 0;
  for (const num of numbers) result += num;
  return result;
}
console.log(sum(10, 20, 30, 40));

// 화살표 버전
const sums = (...numbers) => numbers.reduce((s, cur) => s + cur, 0);
console.log(sums(1, 2, 3));

// 2. 사칙연산 함수
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "잘못된 연산자";
  }
}
console.log(calculate(0.1, 0.2, "+"));

// 3. 짝수 판별
const isEven = (num) => num % 2 === 0;
console.log(isEven(7)); // false

// 4. 배열 합계
function sumArray(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumArray([1, 2, 3]));

// 5. 배열 최대값
function findMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) if (num > max) max = num;
  return max;
}
console.log(findMax([1, 5, 3, 9, 2]));

// 6. 문자열 뒤집기
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 7. 문자 개수 세기
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) if (str[i] === char) count++;
  return count;
}
console.log(countCharacter("banana", "a")); // 3

// 8. 팩토리얼
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5));

// 재귀 factorial
function fac(n) {
  if (n === 0 || n === 1) return 1;
  return n * fac(n - 1);
}
console.log(fac(5));

// 9. 삼각형 넓이
function triangleArea(base, height) {
  return 0.5 * base * height;
}
console.log(triangleArea(10, 5)); // 25
