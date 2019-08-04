const express = require('express');
const fs = require('fs');
const YAML =  require('yaml');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello World');
});

router.get('/resume', (req, res) => {
  try {
    const file = fs.readFileSync('./data.yaml', 'utf8');
    const { resume } = YAML.parse(file);
    res.json(resume);
  } catch (e) {
    console.error(e);
  }
});

router.get('/portfolio', (req, res) => {
  try {
    const file = fs.readFileSync('./data.yaml', 'utf8');
    const { portfolio } = YAML.parse(file);
    res.json(portfolio);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
