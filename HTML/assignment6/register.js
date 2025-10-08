window.onload = pageLoad;
function pageLoad(){
    let form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    let form = document.forms["myRegister"];
    let errormsg = document.getElementById("errormsg");

    let password = form["password"][0].value; 
    let retype = form["password"][1].value; 

    if (password !== retype) {
        errormsg.innerHTML = "Password do not true!!";
        errormsg.className = "error";
        return false;
    }

    /*localStorage.setItem("username", form["username"].value);
    localStorage.setItem("password", password);*/

    

    return true;
}