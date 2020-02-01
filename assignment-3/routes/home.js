const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(path.dirname(process.mainModule.filename), 'views', 'home.html'));
});

module.exports = router;