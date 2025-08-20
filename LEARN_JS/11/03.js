// 6. 구조분해할당(비구조화할당)
// 6.1 alias(치환)
const { name: userName, age: userAge } = { name: "kim", age: 20 };
console.log(userName);
console.log(userAge);

// 응용
const {
  name: uname,
  age: uage,
  address: { city: ucity },
  food: [apple, banana],
} = {
  name: "kim",
  age: 20,
  address: { city: "seoul" },
  food: ["apple", "banana"],
};

console.log(uname);
console.log(uage);
console.log(ucity);
console.log(apple, banana);

const [firstUser, secondUser] = [
  { name: "kim", age: 20 },
  { name: "park", age: 30 },
];
console.log(firstUser, secondUser);
