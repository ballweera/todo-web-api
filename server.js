const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./todo.router');

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 9090;

app.use('/todo', router);
app.listen(port);
console.log('Todo Web Api is started on port ' + port);
