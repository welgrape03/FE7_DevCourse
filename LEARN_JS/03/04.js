// 04.js - 중첩 if문 (로그인 예제)
// -----------------------------------------------------------

const user = "admin";
const pw = "1234";

if (user === "admin") {
  if (pw === "1234") {
    console.log("로그인 성공!");
  } else {
    console.log("로그인 실패!");
  }
} else {
  console.log("아이디를 확인해주세요.");
}
