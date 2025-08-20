// 1. 상속 예시: Apliance → WashingMachine
function Apliance(powerOn) {
  this.powerOn = !!powerOn;
}

Apliance.prototype.toggle = function () {
  this.powerOn = !this.powerOn;
  return this.powerOn;
};

function WashingMachine(powerOn, mode) {
  Apliance.call(this, powerOn);
  this.mode = mode || "normal";
}

WashingMachine.prototype = Object.create(Apliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;

WashingMachine.prototype.wash = function () {
  if (!this.powerOn) return `Cannot wash: power off`;
  return `Washing ...${this.mode}`;
};

const wm = new WashingMachine(false, "quick");
console.log(wm.wash());
console.log(wm.toggle());
console.log(wm.wash());

// 2. 캡슐화 예시: 프라이빗 변수 (클로저 활용)
function Counter(num = 0) {
  let count = num;
  this.increment = function () {
    count++;
    return count;
  };
  this.decrement = function () {
    count--;
    return count;
  };
  this.getCount = function () {
    return count;
  };
}

const ct = new Counter(0);
ct.increment();
ct.increment();
console.log(ct.getCount());

ct.count = 100; // 외부 조작 시도 (실패)
console.log(ct.getCount());
