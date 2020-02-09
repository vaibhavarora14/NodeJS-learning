const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', 'views');

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User'
  });
})

router.post('/', (req, res, next) => {
  users.push(req.body.name);
  res.redirect('/users');
});

router.get('/users', (req, res, next) => {
  console.log(users);
  res.render('users', {
    pageTitle: 'Users',
    users: users
  });
});

app.use(router);
app.listen(3000);