import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");


function showAll() {
    var url = "http://localhost:8080/F2W2Thur/api/generic/all";
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                //Map k = new HashMap();
                var out = "<table class='table'>"
                        + "<thead>"
                        + "<tr>"
                        + "<th>Name</th>"
                        + "</tr>"
                        + "</thead>";
                var i = 0;
                var l = Object.keys(data);
                while (i < l.length) {  
                    if (i === 0) {
                        out += "<tr>"
                                + "<td>" + data["name"] + "</td>"
                                + "</tr>"; 
                        i++;
                    } else {
                        out += "<tr>"
                                + "<td>" + data["name" + i] + "</td>"
                                + "</tr>";
                        i++;
                    }
                }
                out += "</table>";
                console.log(out);
                document.getElementById("d1").innerHTML = out;
            });
    // Map<String,String> dat =data;


}
showAll();
document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
    var inp = document.getElementById("in").value;
    var url = "http://localhost:8080/F2W2Thur/api/generic/name/" + inp;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                document.getElementById("d1").innerHTML = data;
            });
};
function makeOptions(http_method, body) {
    var options = {
        method: http_method,
        headers: {
            "Content-type": "application/json"
        }
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
    return options;
}
document.getElementById("btn1").onclick = function (e) {
    e.preventDefault();
    var inp = document.getElementById("in").value;
    const user = makeOptions("DELETE");
    fetch("http://localhost:8080/F2W2Thur/api/generic/remname/" + inp, user)
            .then(res => res.json())
            .then(function () {
                showAll();
            });
};
document.getElementById("btn2").onclick = function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    let data = {
        "name": name
    };
    const user = makeOptions("POST", data);
    fetch("http://localhost:8080/F2W2Thur/api/generic", user)
            .then(res => res.json())
            .then(function () {
                showAll();
            });
};
document.getElementById("btn3").onclick = function (e) {
     e.preventDefault();
    var name = document.getElementById("name").value;
    let data = {
        "name": name
    };
    const user = makeOptions("PUT", data);
    fetch("http://localhost:8080/F2W2Thur/api/generic/replace/", user)
            .then(res => res.json())
            .then(function () {
                showAll();
            });
};



