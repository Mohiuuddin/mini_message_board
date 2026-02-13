const express = require('express');
const router = express.Router();
const msgController = require('../controllers/msgController');


router.get('/', msgController.msg_index);

router.get('/new', msgController.msg_create);

router.post('/new', msgController.msg_post);

router.get('/details/:id', msgController.msg_details);

module.exports= router;