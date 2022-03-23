function bidder_account_info(index) {
    if (index == 1) {
        alert("Save successfully");
        window.location = "bidderaccount.html";
        return false;
    }
    if (index == 0) {
        alert("Cancel successfully");
        window.location = "bidderaccount.html";
        return false;
    }
}
function bidder_password(index) {
    if (index == 1) {
        alert("Change successfully");
        window.location = "bidderaccount.html";
        return false;
    }
    if (index == 0) {
        alert("Cancel successfully");
        window.location = "bidderaccount.html";
        return false;
    }
}

function seller_account_info(index) {
    if (index == 1) {
        alert("Save successfully");
        window.location = "selleraccount.html";
        return false;
    }
    if (index == 0) {
        alert("Cancel successfully");
        window.location = "selleraccount.html";
        return false;
    }
}

function seller_password(index) {
    if (index == 1) {
        alert("Change successfully");
        window.location = "selleraccount.html";
        return false;
    }
    if (index == 0) {
        alert("Cancel successfully");
        window.location = "selleraccount.html";
        return false;
    }
}

function upgrade() {
    alert("Your request is being processed within 7 days");
    window.location = "bidderindex.html";
    return false;
}