// connecting with server
const socket = io();


// configuring sockets
socket.on("setup", (messagesList) => {
  for(const message of messagesList) showMessage(message);
});

socket.on("receiveMessage", (message) => {
  showMessage(message);
});