function guestIsValid(guest) {
  let missingFields = [];
  if (!guest.name) {
    missingFields.push("name");
  }
  if (!guest.email) {
    missingFields.push("email");
  }

  if (missingFields.length) {
    throw `The following fields are required: ${missingFields.join(", ")}`;
  }

  return true;
}

/** 1. How can you handle errors that may occur in a program you've written? */

guestIsValid({});

/** 2. How is a try/catch block similar to an if/else statement? */

/** 3. The catch block includes access to a variable, error, when it is used. What is this variable used for? */
