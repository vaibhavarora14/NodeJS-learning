const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('2nd use function');
  res.send(`<h1>Default Page</h1>`);
});

module.exports = router;