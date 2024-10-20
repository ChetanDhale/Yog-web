const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeBtn = document.getElementById("closeBtn");
const popup = document.getElementById("popup");
const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");
const form = document.getElementById("form");

loginBtn.onclick = function () {
  popup.style.display = "block";
  formTitle.innerText = "Login";
  toggleText.innerHTML =
    "Don't have an account? <a href='#' id='toggleForm'>Sign Up</a>";
};

signupBtn.onclick = function () {
  popup.style.display = "block";
  formTitle.innerText = "Sign Up";
  toggleText.innerHTML =
    "Already have an account? <a href='#' id='toggleForm'>Login</a>";
};

closeBtn.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

document.addEventListener("click", function (e) {
  if (e.target.id === "toggleForm") {
    if (formTitle.innerText === "Login") {
      formTitle.innerText = "Sign Up";
      toggleText.innerHTML =
        "Already have an account? <a href='#' id='toggleForm'>Login</a>";
    } else {
      formTitle.innerText = "Login";
      toggleText.innerHTML =
        "Don't have an account? <a href='#' id='toggleForm'>Sign Up</a>";
    }
  }
});
