/**
 * Array.every() --> a higher order native array method
 * returns true if EVERY evaluated expression in the anonymous function is True
 * returns false if ANY evaluated expression iin the anonymous function is False
 *
 * Side Effects: ARE NOT recommended
 *
 * Return values: True or False
 */

const pens = [
  {
    name: 'g2',
    style: 'ballpoint',
  },
  {
    name: 'claire fontaine',
    style: 'fountain',
  },
  {
    name: 'pilot',
    style: 'ballpoint',
  },
];

function isEveryPenFountain(arr) {
  let res = true;
  for (let pen of arr) {
    if (pen.style !== 'fountain') {
      return false;
    }
  }

  return res;
}

console.log('is every pen fountain:', isEveryPenFountain(pens));

console.log(
  'is every pen fountain (n.a.m):',
  pens.every(function (pen) {
    pen.style === 'fountain';
  }),
);

console.log(
  'is every pen fountain (n.a.m with arrow):',
  pens.every((pen) => pen.style === 'fountain'),
  // anonymous arrow function behaves the same as the above example with the anonymous function
);

/**
 * 1
 *
 * The .every() method expects at least one argument. What data type is this argument?
 * What is a callback function?
 *
 * // Data type of .every is Function
 * // A callback function is a function passed as a parameter and invoked inside of a function
 */

/**
 * 2
 *
 * The .every() method's callback function has up to three parameters. What are these parameters?
 * // The arguments are the element, the index and the array
 */

/**
 * 3
 *
 * Take a look at the following code, which is incomplete. Based on how the code reads, what do you expect the .every() method to do?
 * //
 */

const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: null, author: "Joshua Barkman", kind: "web" },
];

function isPrintComic(comic) {
  return comic.kind === "print";
}

const arePrintcomics = comics.every(isPrintComic);
console.log(arePrintcomics); //> false

/**
 * 4
 *
 * Update the code below so that it uses the .every() method instead of a for loop. Inside of allcomicsHaveTitles() you will have to write another, anonymous function.
 */

function allcomicsHaveTitles(comics) {
  let result = true;
  for (let comic of comics) {
    if (!comic.title) result = false;
  }
  return result;
}

const haveTitles = allcomicsHaveTitles(comics);
console.log(haveTitles); //> false

/**
 * 5
 *
 * The callback function inside of the .every() method coerces the returned value into a boolean. What does the previous sentence mean? Describe in your own words.
 */
