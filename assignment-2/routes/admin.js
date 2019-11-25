const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  // res.send(`<form action="/admin/product" method="POST">
  //   <input type="text" name="title" />
  //   <button type="submit">Add product</button>
  // </form>`);

  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
  const body = req.body;
  console.log(body);
  res.redirect('/');
});

module.exports = router;