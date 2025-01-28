import {fetchUserData, fetchFilmData, fetchPlanetData} from './script.js'
import {add, minus, multiply, divide} from './mathOperations.js'
import {toUpperCase, reverse} from './stringUtilities.js'
fetchUserData(1);
fetchFilmData(2);
fetchPlanetData(3);
console.log(add(2, 3));
console.log(minus(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(toUpperCase('Hello'));
console.log(reverse('Hello'));
