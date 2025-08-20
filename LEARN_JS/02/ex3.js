// 논리 연산자
// 1. 논리 연산자 기본
let a = true;
let b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

// 2. 여러 조건 결합
let x = 15;
let y = 3;
let z = 4;
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(!(y === 0));

// 3. 사용자 로그인 및 권한 확인
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please Log In");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

// 4. 값의 존재 확인
const value1 = "A";
const value2 = null;
console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");

// 5. 범위 확인
let num = 101;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);
