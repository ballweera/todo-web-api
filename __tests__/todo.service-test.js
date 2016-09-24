const todoService = require('../todo.service');
const Todo = require('../todo');

describe('todoService', () => {
  describe('list()', () => {
    beforeEach((done) => {
      Todo.sync({ force: true}).then(done);
    });

    it('get all todos from database', (done) => {
      Todo.create({
        title: 'Learn React',
        completed: false
      })
      .then(() => {
        return todoService.list();
      })
      .then((todos) => {
        let todo = todos[0];
        expect(todo.title).toEqual('Learn React');
        expect(todo.completed).toBe(false);
        done();
      });
    });
  });
});
