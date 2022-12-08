let Data_User;


let json = fetch('../data_base.json')
    .then(r => r.json())
    .then(data => {
        Data_User = data;
    });


function redirect(link) {
    location.assign(link);
}

let handleLogout = () => {
    window.sessionStorage.clear();
    window.location.reload(true);
    window.location.replace('../login.html');
};

function morph() {
    if (location.pathname == "./index.html") {
        if (sessionStorage.getItem("isLogin") == "true") {
            document.getElementById("user-name-h").textContent = `Welcome back ${sessionStorage.getItem("username")}`;
            document.getElementById("sign-out").textContent = "Sign-Out";
            document.getElementById("img-div").style.backgroundImage = "url('./static/back.jpg')"

        } else {
            console.log(localStorage.getItem("isLogin"))
            console.log(location.pathname);
        }
    } else {
        console.log(localStorage.getItem("isLogin"))
        console.log(location.pathname);
    }
}


let loginUser = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === Data_User.test_user.username && password === Data_User.test_user.password) {
        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("username", Data_User.test_user.username);
        redirect(`./index.html`);
    } else {
        alert("Username and password do not match")
        sessionStorage.setItem("isLogin", false);
    }
}

morph();

