// 05 - 프로토타입 상속

// 부모 생성자 함수
function Animal(name) {
  this.name = name;
}

// 부모에 메서드 정의
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

// 자식 생성자 함수
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// 자식의 프로토타입을 부모의 프로토타입으로 설정
Dog.prototype = Object.create(Animal.prototype);

// constructor 재설정
Dog.prototype.constructor = Dog;

// 자식에만 있는 메서드 추가
Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog("puppy", 20);
console.dir(dg);
console.log(dg.speak()); // Animal의 메서드
console.log(dg.bark()); // Dog의 메서드
