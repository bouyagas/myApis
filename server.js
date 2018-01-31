const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const personRoute = require('./routes/personRoute');

const server = express();
const port = process.argv[2] || process.env.Port || 2020;

server.use('/api/person', personRoute);
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, console.log(`server up and running on port ${port}`));

module.exports = server;
