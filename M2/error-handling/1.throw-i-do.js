// Let's update the code so that instead of potentially returning a string if there's a problem,
// it throws an error.
function markGuestAsAttending(guest) {
  if (!guest.name) {
    throw "Guest must have a name in order to be marked as attending.";
  }

  guest.isAttending = true;
  return guest;
}

console.log("Test case 2:", markGuestAsAttending({ name: "Myra Smith" }));
console.log("Test case 1:", markGuestAsAttending({}));

// QUESTIONS

// 1. What does the ‘throw’ keyword do?

// -> throw generates an error!
// -> throw says "YOU HAVE TO DEAL WITH THIS ERROR IMMEDIATELY OR THE PROGRAM WILL CRASH"

// 2. How is 'throw' similar or different to 'return'?

// -> Similar in that it stops a function or piece of code from continuing to execute
// -> return only tells one function to stop running, and can be used to pass along data for another part of our code to use
// -> throw is more extreme: will stop the entire program from running if we don't catch and handle the error

// 3. When we throw an error in the first test case, does the second test case run? Why or why not?

// -> Nope! it crashes the program right when the error is thrown. No downstream code gets executed.
