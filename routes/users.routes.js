var express = require('express');
var db = require('../db');
var shortid = require('shortid');
var controller = require('../controllers/users.controllers');


var router = express.Router();

router.get('', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.createGet);

router.post('/create', controller.createPost);

router.get('/:id', controller.detail);

module.exports = router;