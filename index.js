import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import User from './models/user';

mongoose.connect('mongodb://0.0.0.0:27017/sample');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	mongoose.Promise = global.Promise;
	console.log("Connected to 'sample' database");
});

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app
	.get('/user', (req, res)=>{
		User
			.find()
			.exec((err, users)=>{
				res.json(users);
			});
	})
	.post('/user', (req, res)=>{
		let user = new User();

		user.name = req.body.name;

		user.save((err)=>{
			if (err) {
				res.send(err);
			}

			res.json({
				message: 'created new user'
			})
		});
	})
	.delete('/user', (req, res)=>{
		User.findOneAndRemove({name: req.body.name}, (err)=>{
			if (err) res.send(err);

			res.json({
				message: 'removed user'
			});
		});
	})
	.put('/user/:name', (req, res)=>{
		User.findOne({name: req.params.name}, (err, user)=>{
			user.name = req.body.name;
			user.save((err)=>{
				if (err) res.send(err);

				res.json({
					message: 'updated user'
				});
			})
		});
	});

app.listen(3000);
