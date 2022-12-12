document.forms[0].addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target[0].value;
  location.href = "/chat.html?username=" + username;
});
