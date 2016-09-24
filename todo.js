const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('todo', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    completed: {
      type: Sequelize.BOOLEAN,
      field: 'completed'
    }
  });
