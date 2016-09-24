const express = require('express');

let router = express.Router();
router.get('/list', (req, res) => {
  res.json([
    { id: 1, title: 'Read a book', completed: true },
    { id: 2, title: 'Workout at evening', completed: false }
  ]);
});

module.exports = router;
