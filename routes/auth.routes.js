var express = require('express');
var db = require('../db');
var shortid = require('shortid');

var controller = require('../controllers/auth.controllers');

var router = express.Router();

router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;