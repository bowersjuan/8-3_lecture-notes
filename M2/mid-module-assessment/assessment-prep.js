// arrow functions
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Traditional Function Expression
function add100(a) {
  return a + 100;
}
// Traditional Anonymous Function
let nums = [1, 2, 4, 54, 1, 23];

console.log(
  nums.map(function (a) {
    return a + 100;
  }),
);

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
(a) => a + 100;

// filter review
// write a function that will return only people objects whose age is "the right" age
const people = [
  { name: 'Capn', age: 8 },
  { name: 'Ben', age: 28 },
  { name: 'Jessica', age: 59 },
];

const peopleOfAge = (arr, rightAge) => {
  return arr.filter((element) => {
    // of the age greater than the rightAge ==> true, we add element to the new array
    return element.age > rightAge; // evaluates to a boolean
  });
};

// find all the people of age
console.log(peopleOfAge(people, 13));

// find the first person of age in the array
const firstPersonOfAge = (arr, rightAge) => {
  return arr.find((element) => {
    // of the age greater than the rightAge ==> true, we add element to the new array
    return element.age > rightAge; // evaluates to a boolean
  });
};

console.log(firstPersonOfAge(people, 13));

// sort review
// sort objects in an array by age
const cheeses = [
  {
    name: 'humboldt fog',
    age: 1,
  },
  {
    name: 'brie',
    age: 0.5,
  },
  {
    name: 'lindberger',
    age: 2,
  },
];

console.log(cheeses);

const getSorted = (arr) => {
  const sortedArr = arr
    .sort((first, next) => {
      if (first.age < next.age) {
        // return -1 if first is youngest
        return -1;
      } else if (next.age < first.age) {
        // return 1 if next is youngest
        return 1;
      }
      // return 0 if both are same age
      return 0;
    })
    .map((element) => {
      // chaining methods
      return element.name;
    });

  sortedArr.forEach((element) => {
    // chaining methods
    console.log(`I love ${element} cheese!`);
  });

  console.log(sortedArr);
  console.log(arr); // the original array gets mutated

  return sortedArr;
};

console.log(getSorted(cheeses));
