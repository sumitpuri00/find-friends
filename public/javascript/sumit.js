/* const obj = {};
const key = 'name';

obj[key] = 'John';  // Using bracket notation, this creates a property 'name' with value 'John'

console.log(obj.name);  // Prints: John
console.log(obj[key]);  // Prints: John
console.log(obj.key);   // Prints: undefined (because there's no property literally named 'key')
 */

/* 
const person = {};

// Using bracket notation to define a property with special characters
person['first-name'] = 'Alice';

// Dot notation won't work here because the property name contains a hyphen
console.log(person['first-name']);  // Prints: Alice
console.log(person.first-name);     // Throws an error (because it tries to subtract name from person.first)

*/

/* 
const scores = {};

// Defining properties with numeric keys using bracket notation
scores[1] = 'First Place';
scores[2] = 'Second Place';

console.log(scores[1]);  // Prints: First Place
console.log(scores[2]);  // Prints: Second Place
console.log(scores.1);   // Syntax error, can't use dot notation for numeric keys



*/


/* 
const car = {
  make: 'Toyota',
  model: 'Corolla',
  details: {
    year: 2020,
    color: 'red'
  }
};

const prop = 'details';
const subProp = 'year';

console.log(car.details.year);  // Prints: 2020 (standard dot notation)
console.log(car[prop][subProp]);  // Prints: 2020 (dynamic access using variables)
console.log(car.prop.year);     // Prints: undefined (tries to find a property literally named 'prop')


*/

/* 
const book = {};

// Using bracket notation for property names with spaces
book['title of the book'] = 'JavaScript Guide';

console.log(book['title of the book']);  // Prints: JavaScript Guide
console.log(book.title of the book);     // Syntax error due to spaces in property name


*/


/* 
const data = {};
const dynamicKey = 42;

data[dynamicKey] = 'Answer to everything';

console.log(data[42]);  // Prints: Answer to everything
console.log(data.dynamicKey);  // Prints: undefined (there's no literal property named 'dynamicKey')

*/




