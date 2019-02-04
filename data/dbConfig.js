// const knex = require('knex');
// const knexConfig = require('../knexfile.js');
// const db = knex(knexConfig.development);

// module.exports = db; 

// setup for postgress
const dbEngine = process.env.DB || 'development';
const config = require('../knexfile.js')[dbEngine];

module.exports = require('knex')(config);