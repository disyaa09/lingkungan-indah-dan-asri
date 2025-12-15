function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // username & password sederhana
    if (user === "admin" && pass === "12345") {
        localStorage.setItem("login", "true");
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Username atau password salah!";
    }
}

function cekLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
