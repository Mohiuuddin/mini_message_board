const express = require('express');

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

// app.use(express.static('public'));
const path = require('path');
const { title } = require('process');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Deyal",
    user: "Humayun Ahmed",
    added: new Date()
  }
];


router.get('/', (req, res)=>{
  res.render('index', {title: 'Mini Messageboard', messages: messages});
});

router.get('/new', (req, res)=>{
  res.render('form', {title: 'Mini Messageboard'});
});

router.post('/new', (req, res)=>{
  const msg = req.body;
  messages.push({text: msg.message, user: msg.author, added: new Date()});
  res.redirect('/');
});

router.get('/details/:id', (req, res)=>{
  const id = req.params.id;
  const message = messages[id];
  if(message){
      res.render('details', {title: 'Mini Messageboard', message: message});
  } else{
    res.send('No message');
  }
});

app.use('/', router);
app.use((req, res)=>{
  res.status(404).send('Ooops! Error 404');
});

app.listen(3000);