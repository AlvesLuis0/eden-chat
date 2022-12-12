const username = getParams("username");


function onSubmit(event) {
  event.preventDefault();
  
  const date = new Date();
  const message = `${username}: ${getMessage()} | ${date.getHours()}:${date.getMinutes()}`;

  showMessage(message);
  socket.emit("sendMessage", message);
}

document.getElementById("formMessage").addEventListener("submit", onSubmit);
