const Sequelize = require('sequelize');
let sequelize = new Sequelize('tododb', '', '', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './db/tododb.sqlite'
});

module.exports = sequelize;
