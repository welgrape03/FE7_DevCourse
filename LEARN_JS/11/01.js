// 객체
// 객체는 키와 값으로 구성된 속성의 집합이다.

// 1. 객체를 정의하는 방법
// 1.1 리터럴 방법, 객체 리터럴
const obj = {
  name: "kim",
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수(class)
function Person(name) {
  this.name = name;
}
const p1 = new Person("kim");

// 1.4 Object.create()
const obj3 = Object.create({});

// 2. 프로퍼티 접근과 조작
// 속성과 값의 제한이 없음
const user = {
  name: "kim",
  age: 20,
  address: {
    zipCode: 13111,
    details: {
      addr1: "서울시 중랑구",
      addr2: "면목동",
    },
  },
  likes: ["apple", "orange"],
};

// 2.1 마침표 연산자
user.name;
user.address.zipCode;

// 2.2 대괄호 연산자
user["address"]["zipCode"];
// 마침표 연산자를 사용하는게 일반적, 특이 사항때 대괄호 연산자 사용
// 객체를 반복 렌더링 할 때 원하는 키에 맞는 값에 접근하기 위해서

// 2.3 조작
// 2.3.1 수정
user.age = 50;

// 2.3.2 추가(동적 추가)
// 존재하지 않는 속성에 값을 주면 동적으로 추가가 됨
user.gender = "male";

// 2.3.3 삭제
delete user.age;
delete user["age"];

// 3. 객체 메서드에서의 this
// 3.1 단축 속성
const objects = {
  uname,
  main,
  name: "sucoding",
  greet: function () {
    console.log(`Hello, sucoding`);
    // console.log(`Hello, ${objects.name'});
    // console.log(`Hello, ${this.name'});
  },
  greet() {
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`);
  },
};
objects.greet();

// 4. 객체의 순회
// 반복 접근의 여러 예시
const person = {
  name: "kim",
  age: 20,
  job: "developer",
};

// for...in
for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

// [].forEach();
["a", "b", "c"].forEach((v) => console.log(v));

// Object.keys()
console.log(Object.keys(person));
Object.keys(person).forEach((key) => console.log(person[key]));

// Object.entries()
const arr = ["apple", "banana"];
const [a, b] = arr;
console.log(a, b);
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
//키와 값이 쌍으로 배열로 묶여있는 2차원 배열이 리턴됨

// Object.values()
Object.values(person).forEach((v) => console.log(v));
console.log(Object.values(person));
// 특정 객체의 값만 배열로 뽑아내는 것

// 5. 객체를 복사
//const original = { name: "kim", addr: { zipCode: 111 } };
const copy = original;
const copy2 = Object.assign({}, original);
console.log(copy2);

// 5.1 얕은 복사
const shallowCopy = original;
const shallowCopy2 = Object.assign({}, original, original2);
const shallowCopy3 = { ...original, ...original2 };

shallowCopy2.age = 50;
shallowCopy2.addr.zipcode = 50;
console.log(original);
console.log(original2);
console.log(shallowCopy2);

// 5.2 깊은 복사
const original = { name: "kim", age: 20 };
const original2 = { age: 40, gender: "male", addr: { zipcde: 111 } };
// 고전적 방법
//const deepCopy = JSON.parse(JSON.stringify(original2));

// 최신의 방법
const deepCopy = structuredClone(original2);
console.log(original2);
console.log(deepCopy);
