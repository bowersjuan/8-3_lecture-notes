module.exports = [
  {
    id: "a0134jf",
    description: "Chop vegetables",
    status: {
      due: "2022-03-11T22:00:00.000Z",
      complete: true,
    },
    relatedTo: ["ba9tyk4"],
  },
  {
    id: "ba9tyk4",
    description: "Make dinner",
    status: {
      due: "2022-03-11T23:00:00.000Z",
      complete: false,
    },
    relatedTo: ["a0134jf", "ckljwer"],
  },
  {
    id: "ckljwer",
    description: "Preheat oven",
    status: {
      due: "2022-03-11T21:30:00.000Z",
      complete: true,
    },
    relatedTo: ["ba9tyk4"],
  },
  {
    id: "d9rwm45",
    description: "Clean Bedroom",
    status: {
      due: "2022-03-11T12:00:00.000Z",
      complete: false,
    },
    relatedTo: ["ehw49g0"],
  },
  {
    id: "ehw49g0",
    description: "Make the bed",
    status: {
      due: "2022-03-11T11:30:00.000Z",
      complete: true,
    },
    relatedTo: ["d9rwm45", "fjh2430", "gmwer8f"],
  },
  {
    id: "fjh2430",
    description: "Sweep floor",
    status: {
      due: "2022-03-11T11:50:00.000Z",
      complete: false,
    },
    relatedTo: ["d9rwm45"],
  },
  {
    id: "gmwer8f",
    description: "Fold clothes",
    status: {
      due: "2022-03-11T11:00:00.000Z",
      complete: true,
    },
    relatedTo: ["d9rwm45"],
  },
];
