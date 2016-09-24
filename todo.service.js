const Todo = require('./todo');

module.exports = {
  list: () => {
    return Todo.findAll();
  }
};
