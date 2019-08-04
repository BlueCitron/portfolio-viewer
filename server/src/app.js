const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

let environtment = process.env.NODE_ENV || 'development';

if (environtment === 'development') dotenv.config();

const { PORT } = process.env || 3000;
const { HOST } = process.env || '0.0.0.0';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(router);

app.listen(PORT, HOST, () => {
  console.log(`Environment: ${environtment}`);
  console.log(`Listening on: http://${HOST}:${PORT}/`)
});
