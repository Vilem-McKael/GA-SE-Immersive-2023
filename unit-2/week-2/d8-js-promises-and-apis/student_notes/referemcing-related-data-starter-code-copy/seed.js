require('dotenv').config();
require('./config/database');

const Movie = require('./models/movie');
const Performer = require('./models/performer');
const data = require('./data');


// Just a query object as an arg, no callback!
// Movie.deleteMany({})
//   .then(function(results) {
//     console.log('Deleted movies: ', results);
//     // Now let's delete the performers and return its "promise"
//     return Performer.deleteMany({});
//   })
//   .then(function(results) {
//     console.log('Deleted performers:', results);
//   })
//   .then(function() {
//     // process.exit() "cleanly" shuts down a Node program
//     process.exit();
//   });

const p1 = Movie.deleteMany({});
const p2 = Performer.deleteMany({});

Promise.all([p1, p2])
  .then(function(results) {
    console.log(results);
    return Performer.create(data.performers);
  })
  .then(function(results) {
    console.log(results);
    return Movie.create(data.movies);
  })
  .then(function(performers) {
    console.log(performers);
  })
  .then(process.exit);

// // // Create a Promise to fetch data from a server
// // const fetchData = () => {
// //     return new Promise((resolve, reject) => {
// //       fetch('https://jsonplaceholder.typicode.com/todos/1')
// //         .then(response => response.json())
// //         .then(data => resolve(data))
// //         .catch(error => reject(error));
// //     });
// //   };
  
// //   // Use the Promise to fetch the data and handle the result
// //   fetchData()
// //     .then(data => console.log(data))
// //     .catch(error => console.error(error));


// const p = new Promise(function (resolve, reject) {
//     let value = 42;
//     resolve(value);
// });

// const promiseExample = new Promise((resolve, reject) => {
//     const randomNum = Math.floor(Math.random() * 10) + 1;
//     if (randomNum <= 5) {
//       resolve(randomNum);
//     } else {
//       reject(`Random number ${randomNum} is greater than 5`);
//     }
//   });
  
//   promiseExample
//     .then((result) => {
//       console.log(`First then() method: ${result}`);
//       return result * 2;
//     })
//     .then((result) => {
//       console.log(`Second then() method: ${result}`);
//       return result * 3;
//     })
//     .then((result) => {
//       console.log(`Third then() method: ${result}`);
//     })
//     .catch((error) => {
//       console.error(`Error: ${error}`);
//     });

// console.log(p);