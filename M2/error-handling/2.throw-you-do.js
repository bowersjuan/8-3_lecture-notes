// Please refactor this code with your partner(s) according to the prompts below.
// Select a driver to share their screen.

function guestIsValid(guest) {
  if (!guest.name || !guest.email) {
    return "Guest is missing fields.";
  }

  return true;
}

guestIsValid({ name: "Myra", email: "myra@pursuit.org" });
guestIsValid({ name: "Myra" });
guestIsValid({ email: "myra@pursuit.org" });
guestIsValid({});

/**  1. Update guestIsValid so that instead of returning a string, it throws an error if the keys are missing. */

/**
 * 2. Now, update guestIsValid so that the error message is more specific depending on the input.
 * For example, if the guest is missing an email it should say:
 *
 *    => The following fields are required: email
 *
 * If both name and email are missing, it should print the following message:
 *    => The following fields are required: email, name
 */
