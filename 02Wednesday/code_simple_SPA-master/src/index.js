import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

function showAll() {
    var url = "http://localhost:3333/api/users/";
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                document.getElementById("d1").innerHTML = "<table class='table'>"
                        + "<thead>"
                        + "<tr>"
                        + "<th>Id</th>"
                        + "<th>Name</th>"
                        + "<th>Age</th>"
                        + "<th>Gender</th>"
                        + "</tr>"
                        + "</thead>"
                        + data.map(function (item) {
                            return "<tr>"
                                    + "<td>" + item.id + "</td>"
                                    + "<td>" + item.name + "</td>"
                                    + "<td>" + item.age + "</td>"
                                    + "<td>" + item.gender + "</td>"
                                    + "</tr>";
                        }).join('')
                        + "</table>";
            })
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                } else {
                    console.log("Error loading full table");
                }
            });
    ;
}
showAll();

document.getElementById("btn").onclick = function (e) {
    e.preventDefault();
    var inp = document.getElementById("in").value;
    var url = "http://localhost:3333/api/users/" + inp;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                document.getElementById("d1").innerHTML = data.id + ": " + data.name + ", " + data.email;

            })
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                } else {
                    console.log("Find by name error");
                }
            });
    ;

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
    fetch("http://localhost:3333/api/users/" + inp, user)
            .then(res => res.json())
            .then(function () {
                showAll();
            })
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                } else {
                    console.log("Delete Error");
                }
            });
    ;

};
document.getElementById("btn2").onclick = function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var email = document.getElementById("email").value;
    let data = {
        "age": age,
        "name": name,
        "gender": sex,
        "email": email
    };
    const user = makeOptions("POST", data);
    fetch("http://localhost:3333/api/users/", user)
            .then(res => res.json())
            .then(function () {
                showAll();
            })
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                } else {
                    console.log("Add person Error");
                }
            });
    ;

};
document.getElementById("btn3").onclick = function (e) {
    e.preventDefault();
    var id = document.getElementById("inp").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;
    var email = document.getElementById("email").value;
    let data = {
        "age": age,
        "name": name,
        "gender": sex,
        "email": email
    };
    const user = makeOptions("PUT", data);
    fetch("http://localhost:3333/api/users/" + id, user)
            .then(res => res.json())
            .then(function () {
                showAll();
            })
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                } else {
                    console.log("Edit Error");
                }
            });
    ;

};
/*Kode for første del af rest og functionalitet for kløveren
 * function getJoke(){
 var url = "https://studypoints.info/jokes/api/jokes/period/hour";
 fetch(url)
 .then(res => res.json()) //in flow1, just do it
 .then(data => {
 // Inside this callback, and only here, the response data is available
 console.log("data", data);
 document.getElementById("d1").innerHTML = data.joke;
 
 });
 }
 setInterval(getJoke, 3600000);
 
 document.getElementById("btn").onclick = getJoke;
 
 document.getElementById("north").onclick = function (){
 document.getElementById("d2").innerHTML = "North";
 };
 document.getElementById("south").onclick = function (){
 document.getElementById("d2").innerHTML = "South";
 };
 document.getElementById("east").onclick = function (){
 document.getElementById("d2").innerHTML = "East";
 };
 document.getElementById("west").onclick = function (){
 document.getElementById("d2").innerHTML = "West";
 };
 */

/*Kode  til Joke delen 
 * function loadAll(){
 const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
 document.getElementById("jokes").innerHTML = allJokes.join("");
 }
 loadAll();
 document.getElementById("btn").onclick = function (e){
 e.preventDefault();
 document.getElementById("foundjoke").innerHTML = jokes.getJokeById(document.getElementById("inp").value-1);
 };
 document.getElementById("btn2").onclick = function (e){
 e.preventDefault();
 jokes.addJoke(document.getElementById("newJ").value);
 loadAll();
 };
 */
