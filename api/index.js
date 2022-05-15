const express = require('express');

const routes = require('./routes')

// const bodyParser = require('body-parser');

// const moment = require('moment');

const app = express();

// app.use(bodyParser.json());

const port = 3000;

routes(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app


