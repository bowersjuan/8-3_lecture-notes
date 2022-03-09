/**
 * 1
 *
 * Summing all the numbers in an array:
 */

let arr1 = [1, 2, 3, 4];
let sum1 = arr1.reduce((acc, el) => {
  return acc + el;
});

console.log(sum1); // => 10

/**
 * 2
 *
 * In this example we did not pass reduce the optional initialValue argument. This means that acc started as 1 and el started as 2.
 *
 * acc = 1    el = 2    return 1 + 2 -> 3 our next acc
 * acc = 3    el = 3    return 3 + 3 -> 6
 * acc = 6    el = 4    return 8 + 3 -> 10
 */

/**
 * If we wanted to find the sum of all the number in an array and have 5 added to that number, we could do this by passing in the second argument (initialValue) to the reduce function.
 */

let arr2 = [1, 2, 3, 4];
let sum2 = arr2.reduce((acc, el) => {
  return acc + el;
}, 5);

console.log(sum2); // => 15

/**
 * 3
 * The same as above but if we'd declared it with a name like:
 */

const adder = (num1, num2) => {
  return num1 + num2;
};

let sum3 = arr2.reduce(adder, 5);

console.log(sum3); // => 15
