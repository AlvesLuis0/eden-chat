// importing important modules
import { io } from "./http";

const messageList: string[] = [];

// applying functions to websockets
io.on("connection", (socket) => {

	socket.on("requestSetup", () => {
		socket.emit("responseSetup", messageList);
	});

	socket.on("sendMessage", (message: string) => {
		messageList.push(message);
		socket.broadcast.emit("receiveMessage", message);
	});

});
