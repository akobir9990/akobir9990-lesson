let checkBlock = true;
let signInBlock = false;
let registerBlock = false;
let contentBlock = false;

let userName = "admin";
let userPasswd = "admin123";

let inpUserName = document.getElementById("user");

let check = document.getElementById("checkBlock");
let signIn = document.getElementById("signInBlock");
let content = document.getElementById("contentBlock");
let register = document.getElementById("register");
let regName = document.getElementById("regName");
let regSurname = document.getElementById("regSurname");
let regEmail = document.getElementById("regEmail");

let contentText = document.getElementById("contentText");

if (!signInBlock) {
  signIn.style.display = "none";
}
if (!checkBlock) {
  checkBlock.style.display = "none";
}
if (!contentBlock) {
  content.style.display = "none";
}

function openSign() {
  signIn.style.display = "block";
  check.style.display = "none";
}

if (!content) {
  content.style.display = "none";
}

function openContent() {
  if (inpUserName.value === userName) {
    signIn.style.display = "none";
    content.style.display = "block";
  } else {
    alert("Wrong username or password");
  }
}

if (!registerBlock) {
  register.style.display = "none";
}

function openRegister() {
  register.style.display = "block";
  check.style.display = "none";
  console.log(registerBlock);
}
console.log(registerBlock);

function registerBtn() {
  register.style.display = "none";
  content.style.display = "block";
  contentText.textContent = `HI ${regName.value}, welcome to our service`;
}
