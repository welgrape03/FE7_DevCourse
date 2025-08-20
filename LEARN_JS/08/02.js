// 자동차
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `${this.make}, ${this.model}, ${this.year}`;
  };
}
const car = new Car("현대", "제네시스", 2025);
console.log(car.drive());

// 학생
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    return `${this.name}, ${this.grade}`;
  };
}
const student1 = new Student("kim", 100);
console.log(student1);

// 동물
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    return `${this.name}가 소리를 냅니다`;
  };
}
const animal1 = new Animal("곰이", "고양이");
console.log(animal1);

// 책
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title}, ${this.author}, ${this.year}`;
  };
}
const book1 = new Book("코딩 자율 학습 리액트", "김기수", 2025);
console.log(book1);

// 은행 계좌 (은닉성 구현)
function BankAccount(initialBalance) {
  let balance = initialBalance;
  this.deposit = function (amount) {
    balance += amount;
  };
  this.withdraw = function (amount) {
    balance -= amount;
  };
  this.getBalance = function () {
    return balance;
  };
}
const bank = new BankAccount(0);
bank.deposit(1000);
console.log(bank.getBalance());
bank.withdraw(500);
console.log(bank.getBalance());
bank.balance = 40000; // 외부 변경 불가
console.log(bank.getBalance());

// 사각형
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
}
const rect = new Rectangle(10, 20);
console.log(rect.area());
console.log(rect.perimeter());

// 비행기
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    return `${this.model}, ${this.capacity}`;
  };
}
const air = new Airplane("대한항공", 400);
console.log(air.fly());

// 팀
function Team(name) {
  this.name = name;
  this.members = [];
  this.addMember = function (memberName) {
    this.members.push(memberName);
  };
}
const lol = new Team("SKT T1");
lol.addMember("faker");
lol.addMember("doran");
lol.addMember("gumausi");
console.log(lol);

// 영화
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    return `${this.title}, ${this.director}, ${this.year}`;
  };
}
const movie = new Movie("슈퍼맨", "모름", 2025);
console.log(movie.getDetails());

// 시간
function Time(hour, minute, second) {
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.getTime = function () {
    return `${this.hour}:${this.minute}:${this.second}`;
  };
}
const time1 = new Time(12, 15, 0);
time1.hour = 15;
console.log(time1.getTime());
