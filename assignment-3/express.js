const path = require('path');
const express = require("express");
const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

const app = express();

app.use(homeRoutes).use(usersRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);