// 01.js - 자료형(Data Type) 기초
// -----------------------------------------------------------
//  자료형(Data Type)
// - 값의 종류, 값의 타입
// - 기본형(원시 타입)과 참조형으로 나뉨
// -----------------------------------------------------------

// 1. 기본 자료형 (Primitive Types)
// 숫자형(Number) → 10, 20, 30
// 문자열(String) → "A", "B", "10"
// 논리형(Boolean) → true, false
// 심볼(Symbol, ES6) → Symbol("남기고싶은 코멘트")
// undefined → 값이 지정되지 않은 상태
// null → 의도적으로 비어있음을 표현
// BigInt(ES11) → 큰 정수

// 2. 참조 자료형 (Reference Types)
// 배열(Array), 객체(Object), 함수(Function)

// 배열 예제
const mathScore = 90;
const engScore = 40;
const korScore = 20;
const sienceScore = 100;

const score = [90, 40, 20, 100];
console.log(score[0]); // 90
console.log(score[3]); // 100
console.log(score[10]); // undefined

// 객체 예제
// - 키(key)와 값(value) 쌍으로 구성
// - 프로퍼티(property)의 집합
const scoreObj = {
  mathScore: 90,
  engScore: 40,
  korScore: 20,
  sienceScore: 100,
};
console.log(scoreObj["mathScore"]); // 90
console.log(scoreObj.sienceScore); // 100

// 함수 예제
function sum(a, b) {
  return a + b;
}

// 자료형 확인
console.log(typeof scoreObj); // object
