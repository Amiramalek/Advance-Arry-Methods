// hasOddNumber
function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
}

// hasAZero
function hasAZero(num) {
    return num.toString().split('').some(digit => digit === '0');
}

// hasOnlyOddNumbers
function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
}

// hasNoDuplicates
function hasNoDuplicates(arr) {
    return new Set(arr).size === arr.length;
}

// hasCertainKey
function hasCertainKey(arr, key) {
    return arr.every(obj => key in obj);
}

// hasCertainValue
function hasCertainValue(arr, key, value) {
    return arr.every(obj => obj[key] === value);
}

// Test cases
console.log(hasOddNumber([1,2,2,2,2,2,4])); // true
console.log(hasOddNumber([2,2,2,2,2,4])); // false

console.log(hasAZero(33321232131012)); // true
console.log(hasAZero(1212121)); // false

console.log(hasOnlyOddNumbers([1,3,5,7])); // true
console.log(hasOnlyOddNumbers([1,2,3,5,7])); // false

console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])); // true

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];

console.log(hasCertainKey(arr, 'first')); // true
console.log(hasCertainKey(arr, 'isCatOwner')); // false

console.log(hasCertainValue(arr, 'title', 'Instructor')); // true
console.log(hasCertainValue(arr, 'first', 'Elie')); // false
