/* eslint-disable comma-dangle */
const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  const limit = 20;

  request.get()(
    `https://lidemy-book-store.herokuapp.com/books?_limit=${limit}`,
    (error, response, body) => {
      for (let i = 0; i < limit; i += 1) {
        // console.log(JSON.parse(body[i]));
        const book = JSON.parse(body)[i];
        console.log(book.id, book.name);
      }
    }
  );
} else if (process.argv[2] === 'read') {
  request.get()(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const book = JSON.parse(body);
      console.log(book.id, book.name);
    }
  );
} else if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`
  );
} else if (process.argv[2] === 'create') {
  request.post('https://lidemy-book-store.herokuapp.com/books', {
    // eslint-disable-next-line comma-dangle
    form: { name: process.argv[3] }
  });
} else if (process.argv[2] === 'update') {
  request.patch(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    // eslint-disable-next-line comma-dangle
    { form: { name: process.argv[4] } }
  );
}
