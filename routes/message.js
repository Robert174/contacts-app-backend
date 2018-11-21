const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

router.post('/', function(req, res) {
	const newMessage = new Message({
		from: req.body.from,
		text: req.body.text
	});

	newMessage.save().then(() => res.json(newMessage));
})

router.get('/', (req, res) => {
	Message.find({}).then(messages => {
		if (!messages){
			return res.json([{}]);
		}

		res.json(messages);
	}).catch(err => {
		res.status(401).json(err);
	})
});

module.exports = router;