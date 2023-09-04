let form = document.querySelector("form");
let button = document.querySelector("form button");
let msg = "Please Provide A Valid Email Address";

let error = document.createElement("p");
error.classList.add("error-text");
error.textContent = msg;

function checkEamil(e) {
  e.preventDefault();
  let email = e.target.querySelector('[type="email"]').value;
  if (!validateEmail(email)) {
    form.classList.add("error");
    form.insertBefore(error, button);
  } else {
    form.classList.remove("error");
    form.removeChild(error);
  }
  console.log(email);
}
function validateEmail(email) {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
form.addEventListener("submit", checkEamil);
