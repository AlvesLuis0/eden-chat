// importing important modules
import { io } from "./http";
import { Message } from "./model/Message";


// declaring import variables
const messagesList: Message[] = [];


// applying functions to websockets
io.on("connection", (socket) => {
	socket.emit("setup", messagesList);

	socket.on("sendMessage", (message: Message) => {
		message.date = new Date().toTimeString().slice(0,5);
		messagesList.push(message);
		socket.broadcast.emit("receiveMessage", message);
	});
});