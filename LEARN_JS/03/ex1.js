// 1. 학점 계산기
const score = 100;
let grade = "";
if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";
console.log(grade);

// 2. 짝수와 홀수 판별
let num = 30;
console.log(num % 2 == 0 ? "Even" : "Odd");

// 3. 로그인 확인 및 권한 부여
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn) {
  if (isAdmin) console.log("Welcome,admin!");
  else console.log("Access denied");
} else console.log("Please log in");

// 4. 숫자 크기 비교
let a = 10;
let b = 200;
console.log(
  a > b ? "a is greater" : a === b ? "a and b are equal" : "b is greater"
);

// 5. 월별 계절 판별
const month = 12;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("fall");
    break;
  default:
    console.log("Invalid Month");
    break;
}

// 6. 할인률 계산
const amount = 200000;
let discount;
if (amount >= 100000) {
  discount = 0.2;
} else if (amount >= 50000) {
  discount = 0.1;
} else discount = 0;

const finalamount = amount - amount * discount;
console.log(finalamount);

// 7. 숫자를 입력받아 해당 요일 출력
const day = 7;
switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("잘못된 입력");
}

// 8. 양수, 음수, 0 판단
const num3 = 10;
if (num3 > 0) console.log("양수");
else if (num3 === 0) console.log("0");
else console.log("음수");
