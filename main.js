let mainBtn = document.getElementById("mainBtn");
let Xclose = document.getElementById("close");
let par = document.getElementById("parent");
let form = document.getElementById("form");
let user = document.getElementById("user");
let ParaUser = document.getElementById("p-user");
let email = document.getElementById("email");
let ParaMail = document.getElementById("p-mail");
let password = document.getElementById("password");
let ParaPass = document.getElementById("p-password");
let repassword = document.getElementById("psw-repeat");
let reParaPass = document.getElementById("p-re-password");
let btnSend = document.getElementById("btnSend");

mainBtn.addEventListener("click", () => {
    par.style.display = "flex";
    setTimeout(() => {
        form.style.transform = "scale(1)";
    }, 70);
});

Xclose.addEventListener("click", () => {
    setTimeout(() => {
        par.style.display = "none";
    }, 300);
    form.style.transform = "scale(0)";
});

let activeBtn = () => {
    if (
        user.classList.contains("success") &&
        email.classList.contains("success") &&
        password.classList.contains("success") &&
        repassword.classList.contains("success")
    ) {
        btnSend.removeAttribute("disabled");
    } else {
        btnSend.setAttribute("disabled", "");
    }
};

user.addEventListener("keyup", (eo) => {
    user.classList.add("error");
    ParaUser.style.display = "block";
    user.classList.remove("success");
    user.nextElementSibling.style.opacity = "0";

    if (eo.target.value.length >= 3) {
        user.classList.remove("error");
        user.classList.add("success");
        ParaUser.style.display = "none";
        user.nextElementSibling.style.opacity = "1";
    }
    activeBtn();
});

email.addEventListener("keyup", (eo) => {
    // email true elhot@gmail.com
    email.classList.add("error");
    ParaMail.style.display = "block";
    email.nextElementSibling.style.opacity = "0";
    email.classList.remove("success");
    let regex = /\w+\d*@\w+.\w+/i;

    if (regex.test(eo.target.value)) {
        email.classList.remove("error");
        ParaMail.style.display = "none";
        email.classList.add("success");
        email.nextElementSibling.style.opacity = "1";
    }
    activeBtn();
});

password.addEventListener("keyup", (eo) => {
    // password true elhotA12
    password.classList.add("error");
    ParaPass.style.display = "block";
    password.nextElementSibling.style.opacity = "0";
    password.classList.remove("success");

    let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (password.value.length >= 8 && regexPass.test(eo.target.value)) {
        password.classList.remove("error");
        ParaPass.style.display = "none";
        password.classList.add("success");
        password.nextElementSibling.style.opacity = "1";
    }
    activeBtn();
});

repassword.addEventListener("keyup", (eo) => {
    repassword.classList.add("error");
    reParaPass.style.display = "block";
    repassword.nextElementSibling.style.opacity = "0";
    repassword.classList.remove("success");

    if (password.value == repassword.value) {
        repassword.classList.remove("error");
        reParaPass.style.display = "none";
        repassword.classList.add("success");
        repassword.nextElementSibling.style.opacity = "1";
    }
    activeBtn();
});
