// Password Hidden
const input = document.querySelector(".input");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");

eyeOpen.addEventListener("click", function () {
  eyeOpen.classList.add("hidden");
  eyeClose.classList.remove("hidden");
  input.setAttribute("type", "password");
});

eyeClose.addEventListener("click", function () {
  eyeOpen.classList.remove("hidden");
  eyeClose.classList.add("hidden");
  input.setAttribute("type", "text");
});
// Local Storage
function saveData(){

  let fname, email, password, confirm,username,phone;
  phone = document.getElementById("phone").value;
  username = document.getElementById("username").value;
  fname = document.getElementById("fname").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  confirm = document.getElementById("confirm").value;
  
  localStorage.setItem("fname", fname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("password", password);
  localStorage.setItem("confirm", confirm);
}
