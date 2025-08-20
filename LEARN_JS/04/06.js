// 06.js - 스코프 (Scope)
// -----------------------------------------------------------
//  스코프
// - 변수가 유효한 범위
// - 함수 스코프(var), 블록 스코프(let/const)
// -----------------------------------------------------------

function testVar() {
  if (true) {
    var x = 10; // 함수 스코프
  }
  console.log("var:", x); // ✅ 10 (블록을 무시하고 함수 전체에서 접근 가능)
}
testVar();

// -----------------------------------------------------------

function testLet() {
  if (true) {
    let y = 20; // 블록 스코프
  }
  console.log("let:", y); // ❌ ReferenceError (블록 밖에서 접근 불가)
}
testLet();

// -----------------------------------------------------------

function testConst() {
  if (true) {
    const z = 30; // 블록 스코프
  }
  console.log("const:", z); // ❌ ReferenceError (블록 밖에서 접근 불가)
}
testConst();
