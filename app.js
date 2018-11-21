const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const users = require('./routes/user');
const messages = require('./routes/message');

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true }).then(
	() => console.log('Database is connected.'),
	e => console.log(e)
);

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/chat', messages);

io.on('connection', socket => {
	console.log('New user connected');
	socket.on('message', msg => {
		console.log('New message!')
		io.emit('message', msg);
	});
})

server.listen(5000, '172.20.10.4', () => {
	console.log('Server is up on port 5000');
})

