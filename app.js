const express = require('express');

const app = express();
const msgRouter = require('./routes/msgRoutes');
app.set('view engine', 'ejs');

// app.use(express.static('public'));
const path = require('path');
const { title } = require('process');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use('/', msgRouter);
app.use((req, res)=>{
  res.status(404).send('Ooops! Error 404');
});

app.listen(3000);