function guestIsValid(guest) {
  guest.notARealMethod();
  let requiredFields = ["name", "email"];
  let missingFields = requiredFields.filter(
    (field) => !guest.hasOwnProperty(field)
  );

  if (missingFields.length) {
    throw `The following fields are required: ${missingFields.join(", ")}`;
  }

  return true;
}

/** 1. How can you handle errors that may occur in a program you've written? */

try {
  console.log("guest is valid", guestIsValid({}));
  console.log("guest is valid", guestIsValid({}));
} catch (err) {
  console.log("WE CAUGHT A WILD ERROR!", err);
}

/** 2. How is a try/catch block similar to an if/else statement? */

// -> It's a control flow construct that helps us implement a specific kind of conditional logic
// -> DO THE STUFF IN THE TRY. IF an error occurs, execute the catch

/** 3. The catch block includes access to a variable, err, when it is used. What is this variable used for? */

// -> it will be an error message (or sometimes an error object) that represents the problem that occured.
