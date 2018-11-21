const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	from: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	text: {
		type: String,
		required: true
	}
});

MessageSchema.methods.toJSON = function() {
	var message = this;
	var messageObject = message.toObject();
	var { from, text, date } = messageObject;

	return { from, text, date };
};

const Message = mongoose.model('messages', MessageSchema);

module.exports = Message;
