// 05.js - switch문 기초
// -----------------------------------------------------------
//  switch
// - 값에 따라 여러 분기 처리
// - break를 쓰지 않으면 'fall through' 발생
// -----------------------------------------------------------

const fruit = "orange";

switch (fruit) {
  case "apple":
    console.log("사과입니다.");
  case "banana":
    console.log("바나나입니다.");
  case "orange":
    console.log("오렌지입니다.");
  default:
    console.log("사과도 바나나도 오렌지도 아닙니다");
}
