/**
 * Array.map(fn) <-- higher order since it takes a fn parameter
 *
 * Side Effects: map CAN produce them, but this is bad practice
 *
 * Return Value: DOES return a value
 *
 * We want to transform an array
 */

let soccerTeams = [
  "Manchester United",
  "Real Madrid",
  "Boca Juniors",
  "NYC FC",
];

function printTeamSupport(team) {
  return `I am a super fan of ${team}: this is the named function`;
}

let canProduceSideEffects = [];

console.log(
  soccerTeams.map(function (team) {
    // canProduceSideEffects.push('yes'); // DO NOT DO THIS
    return { name: team, fanMessage: printTeamSupport(team) }; // Rely on the return value to transform arrays
  })
);

// console.log(teamObjs);

// console.log(canProduceSideEffects);

// create a new array with each team having it's own object
let soccerTeamsV2 = [];

soccerTeams.forEach(function (team, index) {
  // let teamObj = {
  //   name: team,
  //   fanMessage: printTeamSupport(team);
  // }
  // soccerTeamsV2.push(teamObj);
  soccerTeamsV2[index] = {};
  soccerTeamsV2[index].name = team;
  soccerTeamsV2[index].fanMessage = printTeamSupport(team);
});

// console.log(soccerTeamsV2);

// do not edit the comics object
const comics = [
  { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
  { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
  { title: "Nancy", author: "Olivia James", kind: "print" },
  { title: "False Knees", author: "Joshua Barkman", kind: "web" },
];

/**
 * 1
 *
 * Write a new function called getAuthors(). The function should take in an array of comics (like above) and return an array of just the authors' names.
 *
 * Do not use the .map() method just yet. Instead, use an accumulator pattern.
 */
function getAuthors(comics) {
  // Using accumulator pattern
  let authors = [];
  for (let comic of comics) {
    authors.push(comic.author);
  }
  return authors;

  // Using .map
  return comics.map(function (comic) {
    return comic.author;
  });
  // .map combines the default accumulator and loop delcartion and the accumulator return line into one
}

const getAuthorsResult = getAuthors(comics);
console.log(getAuthorsResult); //> [ "Bill Watterson", "Gavin Aung Than", "Olivia James", "Joshua Barkman"]

/**
 * 2
 *
 * Now, update your getAuthors() function to make use of the .map() method. The function should produce the same result.
 *
 * Compare what you had written with what you have now. What is a benefit of using the .map() method?
 */

/**
 * 3
 *
 * Mentally evaluate the code below before running it. What do you think will be logged out? Why?
 */

function getTitle(comic) {
  /*return*/ comic.title;
}

const getTitleResult = comics.map(getTitle);
console.log(getTitleResult);

// The code will return [ undefined, undefined, undefined, undefined ]
// This is because the getTitle function is not returning a value and this when used in the parameters of comics.map the array created by .map will only had undefined elements
