const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./todo.router');

const port = process.env.PORT || 9090;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);

app.listen(port);
console.log('Todo Web Api is started on port ' + port);
