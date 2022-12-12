function showMessage(message) {
  const messageList = document.getElementById("messageList");
  const messageElement = document.createElement("h3");
  messageElement.innerText = message;
  messageList.appendChild(messageElement);
}

function getParams(param) {
  const urlParams = new URLSearchParams(location.search);
  return urlParams.get(param);
}

function getMessage() {
  const input = document.getElementById("inputMessage");
  const message = input.value;
  input.value = "";
  return message;
}
