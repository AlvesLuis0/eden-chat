// connecting with server
const socket = io();


// functions to make it easier
function getValues() {
  const author = document.getElementById("username").value;
  const text = document.getElementById("message").value;

  return {
    author, text
  };
}

function showMessage(message) {
  const { author, text, date } = message;
  const messagesList = document.getElementById("messages-list");
  const messageElement = document.createElement("li");

  messageElement.innerText = `${author}: ${text} | ${date}`;
  messagesList.appendChild(messageElement);
}

function clearMessage() {
  document.getElementById("message").value = "";
}

function onSubmit(event) {
  event.preventDefault();

  const message = getValues();
  socket.emit("sendMessage", message);
  message.date = new Date().toTimeString().slice(0,5);

  showMessage(message);
  clearMessage();
}


// requesting elements
document.getElementById("message-form").addEventListener("submit", onSubmit);


// configuring sockets
socket.on("setup", (messages) => {
  for(const message of messages) showMessage(message);
});

socket.on("receiveMessage", (message) => {
  showMessage(message);
});