const entete = document.querySelector('#btn');
const login = document.querySelector('#log');
const register = document.querySelector('#reg');
const formLogin = document.querySelector('#login');
const formRegister = document.querySelector('#register');


register.addEventListener('click', () => {
    formRegister.style.left = "50px";
    formLogin.style.left = "-450px";
    entete.style.left = '110px';
});

login.addEventListener('click', () => {
    formRegister.style.left = "450px";
    formLogin.style.left = "50px";
    entete.style.left = '0px';
});