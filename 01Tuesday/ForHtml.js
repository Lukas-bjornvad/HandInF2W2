var names1 = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
var nnames;
var nnames1;
function writetable(array) {
    var out = "<table class='table'>";
    out += "<thead>"
        + "<tr>"
        + "<th>Name</th>"
        + "<th>Phone</th>"
        + "</tr>"
        + "</thead>";
    out += array.map(function (item) {
        return "<tr>"
            + "<td>" + item.name + "</td>"
            + "<td>" + item.phone + "</td>"
            + "</tr>";
    }).join('')
    out += "</table>";
    document.getElementById("d1").innerHTML = out;
};
writetable(names1);
document.getElementById("btn1").onclick = writetable(names1);

function writeHref(array) {
    var out = array.map(function (a) {
        return "<a href=\"google.com\">" + a + "</a>"
    });
    document.getElementById("d2").innerHTML = out;
};
writeHref(names);

function segr(a) {
    if (a.name != null) {
        if (a.name.includes("A") || a.name.includes("a")) return a;
        return 0;
    } else {
        if (a.includes("A") || a.includes("a")) return a;
        return 0;
    }
}
nnames = names;
nnames1 = names1;
document.getElementById("btn2").onclick = function (e){
    
    writetable( nnames1.filter(segr));
    writeHref(nnames.filter(segr));
}

