// 02_객체 메서드와 this.js
// ---------------------------------------------
//  객체 메서드와 this
// - 객체 프로퍼티 값이 함수인 경우 "메서드"라고 부름
// - this 키워드는 메서드가 "호출될 때" 해당 메서드를 소유한 객체를 가리킴
// ---------------------------------------------

// 1. 메서드 정의 방법
// ---------------------------------------------

// (1) 객체 리터럴에서 메서드 정의
const person = {
  name: "John",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};
person.greet(); // Hello, I'm John

// (2) 생성자 함수에서 메서드 정의
function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const u1 = new User("Alice");
u1.sayHi(); // Hi, I'm Alice

// ---------------------------------------------
// 2. this 동작 방식
// ---------------------------------------------

// (1) 일반 함수 호출
function normalFunction() {
  console.log(this);
}
normalFunction();
// 브라우저 환경: window (전역 객체)
// Node.js 환경: global

// (2) 메서드 호출
const obj = {
  name: "Bob",
  say() {
    console.log(this.name);
  },
};
obj.say(); // Bob

// (3) 화살표 함수
// - 화살표 함수는 자신만의 this를 가지지 않고,
//   정의된 "상위 스코프"의 this를 그대로 사용
const arrowObj = {
  name: "Charlie",
  say: () => {
    console.log(this.name);
  },
};
arrowObj.say();
// undefined (전역의 this 사용 → obj와 무관)

// ---------------------------------------------
// 3. 객체 순회
// ---------------------------------------------

const person2 = { name: "John", age: 30 };

// (1) for ... in → 자신 + 상속된 열거 가능한 프로퍼티 모두 순회
for (let key in person2) {
  console.log(key, person2[key]);
}
// name John
// age 30

// (2) Object.keys(obj) → 직접 소유한 "키" 배열 반환
Object.keys(person2).forEach((key) => {
  console.log(key, person2[key]);
});

// (3) Object.values(obj) → 직접 소유한 "값" 배열 반환
Object.values(person2).forEach((value) => {
  console.log(value);
});

// (4) Object.entries(obj) → [키, 값] 쌍 배열 반환
Object.entries(person2).forEach(([key, value]) => {
  console.log(key, value);
});

// ---------------------------------------------
// ✅ 요약
// - this는 "호출한 주체"를 가리킴
//   → 일반 함수: 전역 객체, 메서드: 해당 객체, 화살표 함수: 상위 스코프
// - 객체 순회는 for...in 또는 Object.keys/values/entries 활용
