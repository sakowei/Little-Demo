const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");
const app = document.querySelector(".app");

signInBtn.onclick = () => app.classList.remove("right-active");

signUpBtn.onclick = () => app.classList.add("right-active");