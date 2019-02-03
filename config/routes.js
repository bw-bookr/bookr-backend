const userAccessRouter = require('../Routes/userAccessRouter.js');
const bookListRouter = require('../Routes/bookListRouter.js');

module.exports = server => {
  server.use('/api/user-acess', userAccessRouter);
  server.use('/api/book-list', bookListRouter);
  server.get('/', root);
};

function root(req, res) {

  res.send('sanity check');

}


