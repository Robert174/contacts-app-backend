const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/user');


mongoose.connect('mongodb://127.0.0.1:27017/auth', { useNewUrlParser: true }).then(
	() => console.log('Database is connected.'),
	e => console.log(e)
);

const app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

app.listen(5000, '192.168.56.1', () => {
	console.log('Server is up on port 5000');
})