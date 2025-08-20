// 03-연산자.js - 자료형 총정리
// -----------------------------------------------------------
//  자료형 (Data Type)
// - 값의 종류, JavaScript는 크게 기본형(원시 타입)과 참조형으로 구분
// -----------------------------------------------------------

// [기본 자료형 - Primitive Type]

// 1. 숫자형 (Number)
const num = 10;
console.log(num); // 10

// 2. 문자열형 (String)
const uname = "철수"; // "10", '0', `-0.1` 모두 문자열
console.log(uname); // 철수

// 3. 논리형 (Boolean)
const boolean = true;
const bool = 10 > 20; // false
console.log(boolean, bool); // true false

// 4. 심볼형 (Symbol) (ES6+)
// - 유일무이한 값을 생성
const symbol = Symbol("user id");
console.log(symbol);

// 5. undefined
// - 값이 할당되지 않은 변수의 기본 상태
let undi;
console.log(undi); // undefined

// 6. null
// - 값이 "비어있음"을 명시적으로 표현
let nul = null;
console.log(nul); // null

// 7. BigInt (ES11+)
// - 아주 큰 정수를 안전하게 표현
const aBig = 9007199254740991n; // Number.MAX_SAFE_INTEGER 보다 큼
const bBig = 10n;
console.log(aBig + bBig); // 9007199254741001n

// -----------------------------------------------------------
// [참조 자료형 - Reference Type]
// 배열(Array), 객체(Object), 함수(Function)

// 1. 배열 (Array)
// - 대괄호 [] 안에 여러 값을 나열
const arr = [10, "A", null, Symbol(), undefined, BigInt(10n)];
console.log(arr);

// 2. 객체 (Object)
// - 중괄호 {} 안에 key:value 쌍을 저장
const obj = { key: "value" };
console.log(obj);

// 3. 함수 (Function)
// - function 키워드로 선언
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); // 5

// -----------------------------------------------------------
// ✅ 요약
// - 기본형: Number, String, Boolean, Symbol, undefined, null, BigInt
// - 참조형: Array, Object, Function
// - 기본형은 값 자체를 저장, 참조형은 메모리 주소를 저장
