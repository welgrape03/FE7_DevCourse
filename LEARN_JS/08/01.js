// 01 - 생성자 함수 기초

// 생성자 함수: 객체를 만드는 함수
function Car(name, maxSpeed = 200) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = this.maxSpeed; // 현재 속도 초기화
  this.getInfo = function () {
    return `차종: ${this.name}, 최고속도: ${this.maxSpeed}`;
  };
}

// 인스턴스: 생성자 함수를 통해 만들어진 객체
const car1 = new Car("Bmw", 100);
const car2 = new Car("Benz");

console.log(car1);
console.log(car1.getInfo());
console.log(car2.getInfo());

// 생성자 함수 예제 2: 동물 객체
function MakeAnimalObject(name, type, age, gender) {
  this.animalName = name;
  this.animalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalInfo = function () {
    return `${this.animalAge}, ${this.animalAge}`;
  };
}

// 객체 리터럴 방식
const animal1 = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 8,
  animalGender: "male",
  animalInfo: function () {
    return `${this.animalAge}, ${this.animalAge}`;
  },
};
console.log(animal1);

// 생성자 함수 방식
const animal2 = new MakeAnimalObject("나리", "고양이", 5, "female");
console.log(animal2);
