// 1. 기본 자료형
// 1.1 숫자, 논리형, 문자, null, undefined, symbol, bigint
// 2. 참조 자료형
// 2.1 배열, 객체, 함수

// 기본 자료형은 깊은 복사, 참조 자료형의 복사는 얕은 복사
let num = 10;
let num2 = num; // 복사, 깊은 복사
num = 50;

// 얕은 복사
// 복사한 원본 데이터를 조작했을 때, 복사의 대상이 되는 값이 같이 변경되는 것
const arr = ["a"];
const arr2 = arr; // 얕은 복사
arr.push("B");
console.log(arr2);
