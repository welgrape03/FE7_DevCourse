// 04 - 추상 클래스, 다형성, 기능 구현 실습

// 1. Vehicle
function Vehicle(speed) {
  this.speed = speed;
}
Vehicle.prototype.accelerate = function (speed) {
  this.speed += speed;
};
const car = new Vehicle(0);
car.accelerate(10);
car.accelerate(10);
console.log(car.speed); // 20

// 2. 추상 클래스 Shape
function Shape() {}
Shape.prototype.getArea = function () {
  throw new Error("getArea() must be implemented");
};

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return 3.15 * this.radius * this.radius;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

// 3. Person with fullName
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const person = new Person("John", "Doe");
console.log(person.fullName()); // John Doe

// 4. BankAccount
function BankAccount(initialBalance) {
  this.balance = initialBalance;
}
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// 5. Employee salary 계산
function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}
Employee.prototype.getSalary = function () {
  return this.baseSalary + this.bonus;
};
const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

// 6. Library
function Library() {
  this.books = [];
}
Library.prototype.addBook = function (book) {
  this.books.push(book);
};
Library.prototype.listBooks = function () {
  return this.books;
};
const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks());

// 7. Calculator
function Calculator() {}
Calculator.prototype.add = function (a, b) {
  return a + b;
};
Calculator.prototype.subtract = function (a, b) {
  return a - b;
};
Calculator.prototype.multiply = function (a, b) {
  return a * b;
};
Calculator.prototype.divide = function (a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
};
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// 8. Person isAdult
function Person2(name, age) {
  this.name = name;
  this.age = age;
}
Person2.prototype.isAdult = function () {
  return this.age >= 18;
};
const john = new Person2("John", 20);
const alice = new Person2("Alice", 16);
console.log(john.isAdult()); // true
console.log(alice.isAdult()); // false

// 9. Stack (생략됨)
// function Stack() {
//   this.items = [];
// }
// Stack.prototype.push = function(item) {...}
// Stack.prototype.pop = function() {...}

// 10. Person 친구 관리
function Person3(name) {
  this.name = name;
  this.friends = [];
}
Person3.prototype.addFriend = function (friend) {
  this.friends.push(friend);
};
Person3.prototype.listFriends = function () {
  return this.friends;
};
const a = new Person3("John");
a.addFriend("Alice");
a.addFriend("Bob");
console.log(a.listFriends());
