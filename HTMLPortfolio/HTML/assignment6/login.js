window.onload = loginLoad;
function loginLoad(){
	let form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
    let username = document.getElementById("username").value;
    let password = document.forms["myLogin"]["password"].value;

    let regUser = localStorage.getItem("username");
    let regPass = localStorage.getItem("password");

    if (username === regUser && password === regPass) {
        alert("Login successful!");
        return true; 
    } else {
        alert("Invalid username or password!");
        return false; 
    }
}

			