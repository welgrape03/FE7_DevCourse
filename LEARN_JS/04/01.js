// 01.js - for문 활용 문제
// -----------------------------------------------------------

// 1. 1~9 출력
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 2. 1~9 합계
let sum = 0;
for (let i = 1; i <= 9; i++) {
  sum += i;
}
console.log(`1부터 9 합: ${sum}`);

// 3. 1~100 짝수 출력
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// 4. 양수 합계
const numArr = [10, -10, 20, -30, 40];
let sumQ4 = 0;
for (const num of numArr) {
  if (num > 0) sumQ4 += num;
}
console.log(sumQ4);

// 5. 0~15 짝수/홀수 판별
for (let i = 0; i <= 15; i++) {
  console.log(i % 2 === 0 ? `${i} 짝수` : `${i} 홀수`);
}

// 6. 최대값 찾기
const numArr2 = [7, 2, 9, 4, 5];
let max = numArr2[0];
for (const num of numArr2) {
  if (num > max) max = num;
}
console.log(max);

// 7. 배열에서 짝수 인덱스 요소 추출
const arr = ["a", "b", "c", "d", "e"];
const newArr = [];
for (const index in arr) {
  if (index % 2 === 0) newArr.push(arr[index]);
}
console.log(newArr);

// 8. 구구단 3단 출력
for (let i = 1; i <= 9; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}
