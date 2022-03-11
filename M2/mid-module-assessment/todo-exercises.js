// The array below stores data for a todo list application.

const exampleTodos = require("./todo-data.js");

/**
 * percentComplete
 *
 * Should throw an error if there are no todos
 *
 * @param {Object[]} todos
 * @returns {Number || Error} - a number between 0 and 100 indicating the percent of tasks that have been completed
 */
function percentComplete() {}

/**
 * isTodoDueOn
 *
 * write a function with two parameters (todos and date) and checks if any item is due on that date.
 * If no date is provided, the value of the date parameter should default to "1/1/1970".
 *
 * @param {Object[]} todos
 * @param {String} date - formatted like "1/1/1970"
 * @returns {Boolean} - indicates whether any task is due on the provided date
 *
 *  => ex: isTodoDueOn(exampleTodos, "3/11/2022") // => true
 *  => ex: isTodoDueOn(exampleTodos) // => false (since no todo in exampleToDos is due on 1/1/1970)
 */
function isTodoDueOn() {}

/**
 * allRelatedItemsComplete
 *
 * write a function with two parameters (todos and id), that checks if EVERY todo item related to the given id is complete.
 * If no todo item matches the id provided, your function should throw an error with a helpful error message.
 *
 * @param {Object[]} todos
 * @param {String} id
 * @returns {Boolean || Error} - indicates whether all todos related to the given id have been completed
 *
 *   => ex: allRelatedItemsComplete(exampleTodos, "ba9tyk4") // => true
 *   => ex: allRelatedItemsComplete(exampleTodos, "ehw49g0") // => false
 *   => ex: allRelatedItemsComplete(exampleTodos, "zbacasq") // ERROR
 */
function allRelatedItemsComplete() {}

/**
 * getStatuses
 *
 * write a function that returns a list of todo item descriptions and statuses.
 *
 * @param {Object[]} todos
 * @returns {String[]} - array of strings that have a task description and status
 *
 *   => example: getStatuses(exampleTodos) // => ["Chop vegetables: COMPLETE", "Make dinner: INCOMPLETE", ..., "Fold clothes: COMPLETE"]
 */
function getStatuses() {}

/**
 * getIncompleteDescriptions
 *
 * write a function that returns a list of todo item descriptions, just for the incomplete tasks.
 *
 * @param {Object[]} todos
 * @returns {String[]} - array of todo item descriptions
 *
 *   => ex: getIncompleteDescriptions(exampleTodos) // => ["Make dinner", "Clean bedroom", "Sweep floor"]
 */
function getIncompleteDescriptions() {}

// Now it's your turn! Don't stop here:
// come up with additional practice problems based on the todo list that will help you practice higher order array methods, error handling, and ES6 syntax
// If you find yourself getting stuck, try to think about features or statistics you would like a todo list application to implement.
