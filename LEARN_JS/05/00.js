// 00_호이스팅과 실행 컨텍스트.js
// ---------------------------------------------
// 호이스팅(Hoisting)
// - 자바스크립트에서 "선언"을 코드의 최상단으로 끌어올리는 것처럼 동작하는 현상
// - 선언만 위로 올려지고, 초기화(할당)는 제자리에 남아있음
// - 변수와 함수 선언식, 함수 표현식, let/const 등은 동작 방식이 다름

// ---------------------------------------------
// 1. 변수 호이스팅

// (1) var : 선언과 동시에 undefined로 초기화
console.log(numVar); // undefined
var numVar = 10;
console.log(numVar); // 10

// (2) let / const : 선언은 호이스팅 되지만, TDZ(Temporal Dead Zone) 때문에
//    선언 전에 접근하면 ReferenceError 발생
// console.log(numLet); // ❌ ReferenceError
let numLet = 20;
console.log(numLet); // 20

// ---------------------------------------------
// 2. 함수 호이스팅

// (1) 함수 선언식(Function Declaration)
// - 선언 + 정의가 모두 호이스팅됨
printName(); // ✅ "윤희"
function printName() {
  console.log("윤희");
}

// (2) 함수 표현식(Function Expression)
// - 변수 규칙을 따름
// - var 로 선언 시: undefined로 초기화
// - let / const 로 선언 시: TDZ로 인해 ReferenceError
// printHello(); // ❌ TypeError: printHello is not a function
const printHello = function () {
  console.log("Hello");
};

// (3) 화살표 함수(Arrow Function)
// - 함수 표현식과 동일하게 동작
// sayHi(); // ❌ ReferenceError
let sayHi = () => console.log("Hi");

// ---------------------------------------------
// 3. 실행 컨텍스트 (Execution Context)
// - 자바스크립트 코드가 실행되는 환경

// 종류
// (1) 전역 실행 컨텍스트 : 코드가 시작될 때 하나 생성 (프로그램 전체에서 공유)
// (2) 함수 실행 컨텍스트 : 함수가 호출될 때마다 새로 생성
//     → 독립적인 환경을 만들어주고, 실행이 끝나면 제거됨

// 내부 구성
// - Record Environment : 변수/함수 선언이 기록되는 단계
// - Execution Phase(실행 단계) : 기록된 정보를 실제로 실행하는 단계
// - Outer Environment Reference : 바깥 스코프 참조 (스코프 체인)

// ---------------------------------------------
// 4. 스코프와 TDZ

var num = 10; // 전역 변수

function outer(x) {
  function inner(y) {
    console.log(x + y); // 스코프 체인을 통해 outer의 x 참조 가능
  }
  inner(10);
}

outer(10); // 20
console.log(num); // 10

// TDZ(Temporal Dead Zone)
// let / const 선언 변수가 "선언은 되어 있으나 초기화 전"인 구간
// 이 구간에서 접근하면 ReferenceError
// let foo;
// console.log(foo); // undefined
// console.log(bar); // ReferenceError
// let bar = 100;

// ---------------------------------------------
// ✅ 요약
// - var는 선언과 초기화(undefined)가 함께 호이스팅
// - let/const도 호이스팅은 되지만 TDZ 때문에 선언 전 접근 불가
// - 함수 선언식은 전체가 호이스팅되어 선언 전 호출 가능
// - 함수 표현식/화살표 함수는 변수 규칙을 따름
// - 실행 컨텍스트는 전역/함수 단위로 생성되어, 변수와 스코프를 관리
