const userAccessRouter = require('../Routes/userAccessRouter.js');
const bookListRouter = require('../Routes/bookCollectionRouter.js');

module.exports = server => {
  server.use('/api/user-access', userAccessRouter);
  server.use('/api/book-collection', bookListRouter);
  server.get('/', root);
};

function root(req, res) {

  res.send('sanity check');

}

// adding something to commit



