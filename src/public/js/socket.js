const socket = new io();


socket.emit("requestSetup", username);


socket.on("responseSetup", async (messageList) => {
  for(const message of messageList) showMessage(message);
});

socket.on("receiveMessage", async (message) => {
  showMessage(message);
});
