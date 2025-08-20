// 01_알고리즘 기본 예제.js
// ---------------------------------------------
//  알고리즘 기초 문제 모음
// 문자열, 배열, 수학 연산 관련 기본 알고리즘 예제
// ---------------------------------------------

// 1. 문자열에서 특정 문자 제거
function removeChar(str, charToRemove) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== charToRemove) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeChar("hello world", "l")); // "heo word"

// ---------------------------------------------
// 2. 배열 뒤집기
function reverseArray(numArr) {
  const reversed = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    reversed.push(numArr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 간단 버전 (내장 함수)
const reverseArrays = (numArr) => numArr.reverse();
console.log(reverseArrays([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// ---------------------------------------------
// 3. 배열에 특정 값 포함 여부
function containsNumber(numArr, target) {
  for (const num of numArr) {
    if (num === target) return true;
  }
  return false;
}
console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// ---------------------------------------------
// 4. 아나그램 판별
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}
console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("rat", "car")); // false

// ---------------------------------------------
// 5. 문자열 압축
function compressString(input) {
  let compressed = "";
  let count = 1;
  let currentChar = input[0];

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === currentChar) count++;
    else {
      compressed += currentChar + count;
      currentChar = input[i];
      count = 1;
    }
  }
  return compressed;
}
console.log(compressString("abbbffd")); // a1b3f2d1

// ---------------------------------------------
// 6. 회문(Palindrome) 판별
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

// 문장 회문 판별 (공백, 대소문자 무시)
function isPalindromeSentence(input) {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true

// ---------------------------------------------
// 7. 최대공약수 (GCD, 유클리드 호제법)
function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}
console.log(gcd(18, 48)); // 6

// ---------------------------------------------
// 8. 버블 정렬 (Bubble Sort)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

// ---------------------------------------------
// 9. 두 수의 합 찾기 (Two Sum)
// 모든 쌍 검사 (O(n^2))
function twiceSum(numArr, target) {
  const result = [];
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) {
        result.push([numArr[i], numArr[j]]);
      }
    }
  }
  return result;
}
console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1,4],[2,3]]

// 개선된 버전 (O(n))
function twiceSums(numArr, target) {
  const pairs = [];
  const seen = new Set();

  for (const num of numArr) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}
console.log(twiceSums([1, 2, 3, 4, 5], 6)); // [[1,5],[2,4]]

// ---------------------------------------------
// ✅ 요약
// - 문자열/배열 기본 조작 → removeChar, reverseArray, containsNumber
// - 문자열 알고리즘 → 아나그램, 압축, 회문
// - 수학 알고리즘 → 최대공약수
// - 정렬 알고리즘 → 버블 정렬
// - 탐색 알고리즘 → Two Sum (O(n^2), O(n) 버전)
