function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

// const obj3 = { x: 10 };
// const obj4 = { y: 20 };
// console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

// const obj5 = { a: 1, b: 2 };
// const obj6 = { a: 3, b: 4 };
// console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

// const obj7 = {};
// const obj8 = { z: 5 };
// console.log(mergeObjects(obj7, obj8)); // { z: 5 }

// ------------------------------------------------

function objectToArray(obj) {
  return Object.entries(obj);
}
// const obj = { a: 1, b: 2, c: 3 };
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// const obj2 = { x: 5, y: 10 };
// console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

// const obj3 = { p: 3 };
// console.log(objectToArray(obj3)); // [['p', 3]]

// const obj4 = {};
// console.log(objectToArray(obj4)); // []

// ------------------------------------------------

function deleteKey(obj, char) {
  const newobj = { ...obj };
  delete newobj[char];
  return newobj;
}
// const obj = { a: 1, b: 2, c: 3 };
// const keyToDelete = "b";
// console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

// const obj2 = { x: 10, y: 20, z: 30 };
// const keyToDelete2 = "y";
// console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

// const obj3 = { a: 5 };
// const keyToDelete3 = "a";
// console.log(deleteKey(obj3, keyToDelete3)); // {}

// const obj4 = { m: 1, n: 2, o: 3 };
// const keyToDelete4 = "p";
// console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }

// ------------------------------------------------
function findKeyByValue(obj, num) {
  for (let key in obj) {
    if (obj[key] === num) return key;
  }
  return null;
}
// const obj = { a: 1, b: 2, c: 3 };
// console.log(findKeyByValue(obj, 2)); // 'b'
// console.log(findKeyByValue(obj, 4)); // null
// console.log(findKeyByValue(obj, 1)); // 'a'
// console.log(findKeyByValue({}, 1)); // null

// ------------------------------------------------

function multiplyValues(obj) {
  // Object.values(obj)로 값 배열을 구한 후 reduce로 곱하기
  return Object.values(obj).reduce((acc, val) => acc * val, 1);
}
// const obj = { a: 1, b: 2, c: 3 };
// console.log(multiplyValues(obj));
// // 6   (1 * 2 * 3)
// const obj2 = { x: 2, y: 3, z: 4 };
// console.log(multiplyValues(obj2));
// // 24  (2 * 3 * 4)
// const obj3 = { a: 1, b: 0, c: 3 };
// console.log(multiplyValues(obj3));
// // 0   (1 * 0 * 3)
// const obj4 = {};
// console.log(multiplyValues(obj4));

// ------------------------------------------------

function hasOwnKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
// const obj = Object.create({ inherited: 1 });
// obj.own = 2;
// console.log(hasOwnKey(obj, "own")); // true
// console.log(hasOwnKey(obj, "inherited")); // false
// console.log(hasOwnKey({}, "a")); // false
// console.log(hasOwnKey({ a: undefined }, "a")); // true

// ------------------------------------------------

function pick(obj, keys) {
  const newObj = {};
  for (let key of keys) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
// console.log(pick({ x: 10, y: 20 }, ["z"]));          // {}
// console.log(pick({}, ["a"]));                        // {}
// console.log(pick({ a: 1 }, []));                     // {}

// ------------------------------------------------

function omit(obj, keys) {
  const newObj = {};
  for (let key in obj) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
