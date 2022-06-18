// LocalStorage

function checkLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  

  if (username == "admin" && password == "admin") {
    window.location.href = "index.html";
  } else {
    alert("Username or Password is incorrect");
  }
  
  


}

function saveAccount() {
  let username, password;

  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  localStorage.setItem("usernameLogin", username);
  localStorage.setItem("passwordLogin", password);
}
