/**
 * 1
 *
 * The .every() method expects at least one argument. What data type is this argument?
 * What is a callback function?
 */

/**
 * 2
 *
 * The .every() method's callback function has up to three parameters. What are these parameters?
 */
/**
 * 3
 *
 * Take a look at the following code, which is incomplete. Based on how the code reads, what do you expect the .every() method to do?
 */

const comics = [
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: null, author: 'Joshua Barkman', kind: 'web' },
];

function isPrintComic(comic) {
  return comic.kind === 'print';
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
