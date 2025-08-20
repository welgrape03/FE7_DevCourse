// 생성자 함수
function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
  // 아래 메서드는 재정의됨
  this.drive = function () {
    console.log(this);
  };
}

// 프로토타입에 메서드와 속성 추가
Car.prototype.author = "kim"; // 모든 인스턴스가 공유
Car.prototype.drive = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};

const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

console.dir(car1);
console.log(car1.drive()); // 프로토타입 메서드 호출
