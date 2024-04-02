const passwordbox = document.getElementById("password");
const length = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+={}[]<>?|\/";

const allchars = UpperCase + LowerCase + number + symbol;

function createpssword(){
    let password = "";

    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length)
    {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}