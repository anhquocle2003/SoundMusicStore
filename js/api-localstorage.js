// LocalStorage

function checkLogin() {
  let username, password;

  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  if (username == localStorage.getItem("usernameLogin") && password == localStorage.getItem("passwordLogin")) {
    window.location.href = "index.html";
  } else {
    alert("Login Failed");
  }
  
}

function saveAccount() {
  let username, password;

  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  localStorage.setItem("usernameLogin", username);
  localStorage.setItem("passwordLogin", password);

}

