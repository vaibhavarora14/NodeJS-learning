const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(`<form action="/product" method="POST">
    <input type="text" name="title" />
    <button type="submit">Add product</button>
  </form>`);
});

router.post('/product', (req, res, next) => {
  const body = req.body;
  console.log(body);
  res.redirect('/');
});

module.exports = router;