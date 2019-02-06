const userAccessRouter = require('../Routes/userAccessRouter.js');
const bookListRouter = require('../Routes/bookCollectionRouter.js');
const reviewRouter = require('../Routes/reviewRouter.js')

module.exports = server => {
  server.use('/api/user-access', userAccessRouter);
  server.use('/api/book-collection', bookListRouter);
  server.use('/api/book-review', reviewRouter)
  server.get('/', root);
};

function root(req, res) {

  res.send('sanity check');

}

// adding something to commit



