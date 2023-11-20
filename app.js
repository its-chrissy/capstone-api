const express = require('express');
const cors = require('cors');
const router = require('./routers/routerTO');
const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/data')));
app.use('/', router);

module.exports = app;