// Let's update the code so that instead of potentially returning a string if there's a problem,
// it throws an error.
function markGuestAsAttending(guest) {
  if (!guest.name) {
    return "Guest must have a name in order to be marked as attending.";
  }

  guest.isAttending = true;
  return guest;
}

console.log("Test case 1:", markGuestAsAttending({}));
console.log("Test case 2:", markGuestAsAttending({ name: "Myra Smith" }));

// QUESTIONS

// 1. What does the ‘throw’ keyword do?
// 2. How is 'throw' similar or different to 'return'?
// 3. When throw an error in the first test case, does the second test case run? Why or why not?
