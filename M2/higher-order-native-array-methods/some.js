/**
 * 1
 *
 * How does the .some() method differ from the .every() method? How is it similar?
 * // Difference: every returns true if every element passes the conditional and some returns true of one element passes the conditional
 * // Similar: Iterate over arrays, return a boolean
 */

/**
 * 2
 *
 * Take a look at the following code. How many times does the isWebComic() function get called? How could you confirm?
 * // The callback function will get called twice
 */

const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: null, author: "Joshua Barkman", kind: "web" },
];

function isWebComic(comic) {
  return comic.kind === "web";
}

const result = comics.some(isWebComic);
console.log(result); //> true
