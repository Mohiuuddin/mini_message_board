const messages = require('../models/message');

const msg_index =(req, res)=>{
  res.render('index', {title: 'Mini Messageboard', messages: messages});
}

const msg_create = (req, res)=>{
  res.render('form', {title: 'Mini Messageboard'});
}

const msg_post = (req, res)=>{
  const msg = req.body;
  messages.push({text: msg.message, user: msg.author, added: new Date()});
  res.redirect('/');
}
 
const msg_details = (req, res)=>{
  const id = req.params.id;
  const message = messages[id];
  if(message){
      res.render('details', {title: 'Mini Messageboard', message: message});
  } else{
    res.send('No message');
  }
}

module.exports = {
  msg_index, 
  msg_create,
  msg_post,
  msg_details

}