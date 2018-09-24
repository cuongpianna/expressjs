var express = require('express');
var db = require('../db');
var shortid = require('shortid');
var controller = require('../controllers/users.controllers');
var validate = require('../util/user.validate')
var authMiddleware = require('../middlewares/auth.middleware')


var router = express.Router();

router.get('',authMiddleware.requireAuth ,controller.index);

router.get('/cookie',(req, res, next) =>{
    // res.cookie('user-id',12345);
    res.send(req.headers.cookie);
});

router.get('/search', controller.search);

router.get('/create', controller.createGet);

router.post('/create', validate.postCreate, controller.createPost);

router.get('/:id', controller.detail);

module.exports = router;