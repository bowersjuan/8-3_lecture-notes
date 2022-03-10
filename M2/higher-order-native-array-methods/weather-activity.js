const weatherData = require('./weather-data.js');

/**
 * Use built in higher order array methods to answer questions about the seven day weather forecast
 */

/**
 * 1. Find all the days that will get warmer than 50 degrees.
 *
 * @param {Object[]} forecast
 * @returns {Object[]} - filtered list containing warm days
 */
function daysWarmerThan50(forecast) {}

/**
 * 2. Get a list of the highs and lows for each day.
 *
 * @param {Object[]} forecast
 * @returns {Number[][]} - An array of arrays of numbers
 *
 * Example:
 *
 * tempRanges(weatherData) // => [[38, 50], [33, 41], [34, 49], [44, 52], [28, 49], [34, 41], [44, 56]]
 */
function tempRanges(forecast) {}

/**
 * 3. Print out a weather summary for every day in the seven day forecast.
 *
 * @param {Object[]} forecast
 * @returns {Undefined}
 *
 * Example:
 *
 * logWeatherSummary(weatherData)
 * // => "Today there is a high of 50 with a 1% chance of rain"
 * // => ...
 * // => "Today there is a high of 56 with a 2% chance of rain"
 */
function logWeatherSummary(forecast) {}

/**
 * 4. Find the first day this week that it might snow
 */
function findSnowDay(forecast) {}

/**
 * 5. Get a list of days of the week that the wind will be above 15 mph.
 *
 * @param {Object[]} forecast
 * @returns {String[]} - an array of days of the week with high wind
 *
 * Example:
 *
 * highWindDays(weatherData) // => ["Tuesday", "Saturday", "Sunday"]
 */
function highWindDays(forecast) {}

/**
 * 6. Print out the low temp for days with less than a 5% chance of precipitation.
 *
 * @param {Object[]} forecast
 * @returns {Undefined}
 *
 * Example:
 *
 * logSunnyDayLows(weatherData)
 * // => "3/8/2022 has a low of 38"
 * // => "3/13/2022 has a low of 34"
 * // => "3/14/2022 has a low of 44"
 */
function logSunnyDayLows(forecast) {}

/**
 * 7. Given the current temparature, find the first day of the week it could plausibly be
 *
 * @param {Object[]} forecast
 * @param {Number} temperature
 * @returns {String || Null} - the earliest date it could plausibly be
 *
 * Example:
 *
 * findDayByTemp(weatherData, 51) // => "3/11/2022"
 */
function findDayByTemp(forecast, temperature) {
  // find the first weather data object with the given temperature
  // GREAT use case for the array.find()!!
  const firstWeatherObj = forecast.find((element) => {
    return temperature >= element.lowTemp && temperature <= element.highTemp;
  }); // temperature is between high and low
  // get the elements date
  const firstWeatherDate = firstWeatherObj.date;
  // convert it to a Date object
  const firstWeatherDay = new Date(firstWeatherDate);
  const firstWeatherDayIndex = firstWeatherDay.getDay();
  // using the Date object, calculate the day of the week
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return weekDays[firstWeatherDayIndex];
}

console.log(findDayByTemp(weatherData, 34));
