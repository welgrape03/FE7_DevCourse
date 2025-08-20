// 04 - this 바인딩과 화살표 함수

// 일반 함수의 this
function main() {
  console.log(this);
}

// 명시적으로 this를 바인딩
const mainBind = main.bind({ name: "sucoding" });

const obj = {
  name: "kim",
  main: mainBind,
  smallObj: {
    name: "small",
    main: mainBind,
  },
};

obj.main(); // { name: 'sucoding' }
obj.smallObj.main(); // { name: 'sucoding' }
mainBind(); // { name: 'sucoding' }

// 화살표 함수는 자신만의 this를 가지지 않음
const main2 = function () {
  console.log(this);
};
const main2Bind = main2.bind({});
main2Bind(); // {}

const sub = () => console.log(this);
const subBind = sub.bind({});
subBind(); // window or globalThis

const obj2 = {
  name: "sucoding",
  main: function () {
    console.log(this); // { name: 'superman' }
    const sub = () => console.log(this); // 화살표 함수 -> 상위 스코프 this
    sub(); // { name: 'superman' }
  }.bind({ name: "superman" }),
};

obj2.main();
