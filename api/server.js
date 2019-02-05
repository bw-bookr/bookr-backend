const express = require('express');
const configureMiddleware = require('../config/middleware.js');
const configureRoutes = require('../config/routes.js');

const server = express();

configureMiddleware(server);
configureRoutes(server);

module.exports = {
  server,
};