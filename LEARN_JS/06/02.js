// ex1_객체 연습문제.js
// ---------------------------------------------
//  객체 연습 문제
// - 앞에서 배운 객체 병합, 순회, 변환 등을 활용하는 문제
// ---------------------------------------------

// Q1. 두 객체를 병합하는 함수 작성
// - Object.assign을 사용해서 새로운 객체 반환
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// 테스트 케이스
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

const obj3 = { x: 10 };
const obj4 = { y: 20 };
console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

const obj7 = {};
const obj8 = { z: 5 };
console.log(mergeObjects(obj7, obj8)); // { z: 5 }

// ---------------------------------------------
// Q2. 객체를 [키, 값] 배열로 변환하는 함수 작성
function objectToArray(obj) {
  return Object.entries(obj);
}

// 테스트 케이스
const obj11 = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj11));
// [['a', 1], ['b', 2], ['c', 3]]

const obj22 = { x: 5, y: 10 };
console.log(objectToArray(obj22));
// [['x', 5], ['y', 10]]

const obj33 = { p: 3 };
console.log(objectToArray(obj33));
// [['p', 3]]

const obj44 = {};
console.log(objectToArray(obj44));
// []
// ---------------------------------------------
// ✅ 요약
// - mergeObjects: 두 객체를 병합할 때, 같은 key가 있으면 뒤의 값이 덮어씀
// - objectToArray: Object.entries()를 활용해서 객체를 [키, 값] 쌍 배열로 변환
