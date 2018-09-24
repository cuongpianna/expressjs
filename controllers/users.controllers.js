var shortid = require('shortid');
var db = require('../db');

module.exports.index = (req, res) => res.render('users/index',{
	users: db.get('users').value()
});

module.exports.search =  (req, res) => {
	var q = req.query.q;
	var matchuser = db.get('users').value().filter( (user) => { return user.name.indexOf(q) != -1; });
	res.render('users/index',{
		users: matchuser,
		q: q
	});
};

module.exports.createGet =  (req, res) => {
	res.render('users/create');
};

module.exports.createPost =  (req, res) => {
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
};

module.exports.detail =  (req, res) =>{
	var id = req.params.id;
	var user = db.get('users').find({ id:id }).value();
	console.log(user);
	res.render('users/detail',{
		user: user
	});
};



