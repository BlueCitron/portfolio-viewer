const express = require('express');
const fs = require('fs');
const YAML =  require('yaml');

const router = express.Router();
const file = fs.readFileSync('./data.yaml', 'utf8')

router.get('/', (req, res) => {
  res.json('Hello World');
});

router.get('/resume', (req, res) => {
  try {
    const { resume } = YAML.parse(file);
    res.json(resume);
  } catch (e) {
    console.err(e);
  }
});

router.get('/', (req, res) => {
  res.json('Hello World');
});

module.exports = router;
