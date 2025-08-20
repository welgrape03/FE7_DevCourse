// 01_객체 기초.js
// ---------------------------------------------
//  객체(Object)
// - 관련된 데이터와 동작(함수)을 하나로 묶는 자료형
// - 자바스크립트의 거의 모든 것은 객체로 이루어져 있음
// ---------------------------------------------

// 1. 객체 생성 방법
// ---------------------------------------------

// (1) 객체 리터럴 (가장 많이 사용)
const obj1 = { name: "John", age: 30 }; // 중괄호 {}로 바로 생성
console.log(obj1);

// (2) Object 생성자
const obj2 = new Object();
obj2.name = "John";
obj2.age = 30;
console.log(obj2);

// (3) 생성자 함수
// - 같은 구조의 객체를 여러 개 만들 때 유용
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj3 = new Person("Alice", 25);
console.log(obj3);

// (4) Object.create()
// - 프로토타입을 직접 지정해서 객체 생성
const obj4 = Object.create(Object.prototype);
obj4.name = "Kim";
console.log(obj4);

// ---------------------------------------------
// 2. 프로퍼티 조작 (추가/수정/삭제)
// ---------------------------------------------

const user = {
  name: "John",
  age: 30,
};

// 프로퍼티 접근
console.log(user.name); // 점 표기법
console.log(user["name"]); // 대괄호 표기법

// 프로퍼티 추가
user.email = "john@example.com";

// 프로퍼티 수정
user.age = 31;

// 프로퍼티 삭제
delete user.age;

console.log(user);

// ---------------------------------------------
// 3. 얕은 복사 문제
// ---------------------------------------------
const a = { x: 1 };
const b = a; // 얕은 복사 (주소만 복사)
b.x = 2; // b를 수정했는데...
console.log(a.x); // 2  ← a도 같이 바뀜!

// ---------------------------------------------
// 3-2. 깊은 복사
// ---------------------------------------------
const a2 = { x: 1 };
const b2 = JSON.parse(JSON.stringify(a2)); // 깊은 복사 (새 객체)
b2.x = 2; // b2만 바뀜
console.log(a2.x); // 1  ← a는 그대로
console.log(b2.x); // 2

// ---------------------------------------------
// 4. 객체와 메서드 (함수 포함)
// ---------------------------------------------

const user2 = {
  name: "Alice",
  age: 25,
  introduce() {
    console.log(`I'm ${this.name} and I'm ${this.age} years old`);
  },
};
user2.introduce(); // I'm Alice and I'm 25 years old

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  getInfo() {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  },
};
car.getInfo(); // Tesla Model 3 (2024)

// ---------------------------------------------
// 5. 연습 문제
// ---------------------------------------------
// Q1. 객체 product를 생성하고 다음 작업을 하세요.
// - name: "Laptop"
// - price: 1500
// - "product code": "ABC123"  (공백 포함 키)
// - price를 2000으로 수정
// - discount: 10 프로퍼티 추가
// - discount를 삭제

const product = {
  name: "Laptop",
  price: 1500,
  "product code": "ABC123",
};
product.price = 2000; // 수정
product.discount = 10; // 추가
delete product.discount; // 삭제

console.log(product.name); // Laptop
console.log(product.price); // 2000
console.log(product["product code"]); // ABC123

// ---------------------------------------------
// ✅ 요약
// - 객체는 리터럴, 생성자 함수, Object.create 등 다양한 방법으로 생성 가능
// - 프로퍼티는 점(.) 표기법, 대괄호([]) 표기법으로 접근 가능
// - 객체는 참조 타입이라 얕은 복사 시 원본에 영향을 줄 수 있음
// - 메서드는 객체 안의 함수, this는 호출한 객체를 가리킴
