const supertest = require('supertest');
const router = require('../todo.router');
const express = require('express');

jest.mock('../todo.service');
const todoService = require('../todo.service');

const app = express();
router(app);

describe('todo router', () => {
  describe('GET /todo/list', () => {
    let handler;

    beforeEach(() => {
      todoService.list.mockReturnValueOnce(Promise.resolve([{ id: 1, title: 'Read a book', completed: true }]));
    });

    beforeEach(() => {
      handler = supertest(app).get('/todo/list');
    });

    it('should call todoService.list', (done) => {
      handler.expect(200)
        .end((err, res) => {
          expect(todoService.list).toBeCalled();
          if (err) done.fail(err);
          done();
        });
    });

    it('should return list of todos in json format', (done) => {
      handler.expect(200)
        .end((err, res) => {
          if (err) {
            console.error(err);
            done.fail(err);
          }

          expect(res.body).toEqual([{ id: 1, title: 'Read a book', completed: true }]);
          done();
        });
    });
  });
});
