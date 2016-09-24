module.exports = {
  list: () => {
    return Promise.resolve([
      { id: 1, title: 'Read a book', completed: true }
    ])
  }
};
