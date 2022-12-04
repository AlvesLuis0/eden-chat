// functions to make it easier
function getValues() {
  const author = document.getElementById("username").value;
  const text = document.getElementById("message").value;

  return {
    author, text
  };
}

function clearInput() {
  document.getElementById("message").value = "";
}