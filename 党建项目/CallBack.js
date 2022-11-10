function RequestData(method, suffix, par, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, "http://106.75.16.42:8082/" + suffix);
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
    xhr.send(par);
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr.response);
            var res = JSON.parse(xhr.responseText);
            callback(res);
        }
    }
}