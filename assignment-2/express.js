const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(`<form action="/product" method="POST">
    <input type="text" name="title" />
    <button type="submit">Add product</button>
  </form>`);
});

app.post('/product', (req, res, next) => {
  const body = req.body;
  console.log(body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('2nd use function');
  res.send(`<h1>Default Page</h1>`);
});


app.listen(3000);