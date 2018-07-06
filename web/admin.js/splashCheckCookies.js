checkCookie();



function getCookie(cname) {
        
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("usernameAdminConsolto");
    var password = getCookie("passwordAdminConsolto");
    if (user != "" && password != "") {
        alert("Welcome again " + user);
        window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/index.html";
    } else {
        window.location.href = "http://192.168.137.1:8084/AdminMedicalInsuranceSystem/admin.html/login.html";
    }
}