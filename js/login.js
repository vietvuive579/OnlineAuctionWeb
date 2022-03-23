function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "bidder" && password == "123") {
        alert("Login successfully");
        window.location="bidderindex.html";
        return false;
    }
    else if (username == "seller" && password == "123") {
        alert("Login successfully");
        window.location="selleraccount.html";
        return false;
    }
    else if (username == "admin" && password == "123") {
        alert("Login successfully");
        window.location="admin.html";
        return false;
    }
    else{
        alert("Login failed");
        window.location="login.html";
        return false;
    }
}