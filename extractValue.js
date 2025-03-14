// extractValue
function extractValue(arr, key) {
  return arr.reduce((acc, obj) => {
    if (obj[key] !== undefined) acc.push(obj[key]);
    return acc;
  }, []);
}

// vowelCount
function vowelCount(str) {
  const vowels = 'aeiou';
  return str.toLowerCase().split('').reduce((acc, char) => {
    if (vowels.includes(char)) {
      acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
  }, {});
}

// addKeyAndValue
function addKeyAndValue(arr, key, value) {
  return arr.reduce((acc, obj) => {
    obj[key] = value;
    acc.push(obj);
    return acc;
  }, []);
}

// partition
function partition(arr, callback) {
  return arr.reduce((acc, val) => {
    callback(val) ? acc[0].push(val) : acc[1].push(val);
    return acc;
  }, [[], []]);
}

// Test cases
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(extractValue(arr, 'name')); // ['Elie', 'Tim', 'Matt', 'Colt']

console.log(vowelCount('Elie')); // {e:2,i:1}
console.log(vowelCount('I Am awesome and so are you')); // {i:1,a:4,e:3,o:3,u:1}

console.log(addKeyAndValue(arr, 'title', 'Instructor'));

const nums = [1,2,3,4,5,6,7,8];
function isEven(val) { return val % 2 === 0; }
console.log(partition(nums, isEven)); // [[2,4,6,8], [1,3,5,7]]

const names = ['Elie', 'Colt', 'Tim', 'Matt'];
function isLongerThanThreeCharacters(val) { return val.length > 3; }
console.log(partition(names, isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]
