// functions to send and show messages
function showMessage(message) {
  const { author, text, date } = message;
  const messagesList = document.getElementById("messages-list");
  const messageElement = document.createElement("li");

  messageElement.innerText = `${author}: ${text} | ${date}`;
  messagesList.appendChild(messageElement);
}

function onSubmit(event) {
  event.preventDefault();

  const message = getValues();
  socket.emit("sendMessage", message);
  message.date = new Date().toTimeString().slice(0,5);

  showMessage(message);
  clearInput();
}


// applying functions to elements
document.getElementById("message-form").addEventListener("submit", onSubmit);