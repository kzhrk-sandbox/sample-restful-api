import mongoose from 'mongoose';

const User = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('User', User);
