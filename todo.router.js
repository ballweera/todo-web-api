const express = require('express');
const todoService = require('./todo.service');

let router = express.Router();
router.get('/list', (req, res) => {
  todoService.list()
    .then((items) => {
      res.json(items);
    });
});

module.exports = (app) => {
  app.use('/todo', router);
};
