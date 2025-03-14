// forEach
function doubleValues(arr) {
  const result = [];
  arr.forEach(val => result.push(val * 2));
  return result;
}

function onlyEvenValues(arr) {
  const result = [];
  arr.forEach(val => { if (val % 2 === 0) result.push(val); });
  return result;
}

function showFirstAndLast(arr) {
  return arr.map(str => str[0] + str[str.length - 1]);
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(obj => obj[key] = value);
  return arr;
}

function vowelCount(str) {
  const vowels = 'aeiou';
  const result = {};
  str.toLowerCase().split('').forEach(char => {
    if (vowels.includes(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  });
  return result;
}

// map
function doubleValuesWithMap(arr) {
  return arr.map(val => val * 2);
}

function valTimesIndex(arr) {
  return arr.map((val, index) => val * index);
}

function extractKey(arr, key) {
  return arr.map(obj => obj[key]);
}

function extractFullName(arr) {
  return arr.map(obj => `${obj.first} ${obj.last}`);
}

// filter
function filterByValue(arr, key) {
  return arr.filter(obj => obj[key] !== undefined);
}

function find(arr, value) {
  return arr.find(val => val === value);
}

function findInObj(arr, key, value) {
  return arr.find(obj => obj[key] === value);
}

function removeVowels(str) {
  const vowels = 'aeiou';
  return str.toLowerCase().split('').filter(char => !vowels.includes(char)).join('');
}

function doubleOddNumbers(arr) {
  return arr.filter(val => val % 2 !== 0).map(val => val * 2);
}
