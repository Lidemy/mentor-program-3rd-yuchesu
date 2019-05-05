/* eslint-disable max-len */
/* eslint-disable comma-dangle */
const request = require('request');

const limit = 10;

request(
  `https://lidemy-book-store.herokuapp.com/books?_limit=${limit}`,
  (error, response, body) => {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    for (let i = 0; i < limit; i += 1) {
      // console.log(JSON.parse(body[i]));
      const book = JSON.parse(body)[i];
      console.log(book.id, book.name);
    }
  }
);
