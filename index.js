require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers/index');

app.use(bodyParser.json());
app.use('/', controller.router);

console.log('Started "Torrent Downloader Service"');
app.listen(80);