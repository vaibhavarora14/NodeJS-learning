const path = require('path');

const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  console.log('2nd use function');
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;