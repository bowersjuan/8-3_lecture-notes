/**
 * 1. DON'T RUN THIS CODE YET!
 *
 * Read through this code and predict with your partner what will be logged.
 * Make sure you both agree on what you think will happen before you run the code to test your prediction.
 */

function guestHasName(guest) {
  if (!guest.name) {
    throw `Guest ${guest.id} is missing a name!`;
  }
}

function checkInAllGuests(guests) {
  for (let guest of guests) {
    guest.checkedIn = true;
  }
}

const guests = [
  { id: 1, name: "Isaac Price", email: "iprice@gmail.com" },
  { id: 2, name: "Angelica Russo", email: "angie.russo@gmail.com" },
  { id: 3, email: "chloe.barker@gmail.com" },
];

try {
  console.log("Checking in all guests...");
  for (let guest of guests) {
    guestHasName(guest);
  }

  checkInAllGuests(guests);
} catch (error) {
  console.log("Guest check-in failed!");
  console.log(error);
}
