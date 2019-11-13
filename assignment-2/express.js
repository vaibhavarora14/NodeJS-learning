const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('1st use function');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('2nd use function');
  res.send('<h1>Users Page</h1>')
});

app.use('/', (req, res, next) => {
  console.log('2nd use function');
  res.send(`<h1>Default Page</h1>`);
});


app.listen(3000);