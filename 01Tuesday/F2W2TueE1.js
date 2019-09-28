var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
console.log(names);
var seg = names.filter(function segr(a) {
    if (a.includes("A") || a.includes("a")) return a;
    return 0;
});
console.log(seg);

var out = names.map(function (a) {
    var split = a.split("");
    var rev = split.reverse();
    var out = rev.join("");
    return out;
});
console.log(out);

function segregate(a) {
    if (a.includes("A") || a.includes("a")) return a;
    return 0;
}
function myFilter(array, callback) {
    var out = array.filter(callback);
    return out;
};

var nout = myFilter(names, segregate);
console.log(nout);

function mapper1(a) {
    var split = a.split("");
    var rev = split.reverse();
    var out = rev.join("");
    return out;
};

function myMap(array, callback) {
    return array.map(callback);
};
nout = myMap(names, mapper1);
console.log(nout);

Array.prototype.myFilter2 = function (callback) {
    var out = this.filter(callback);
    return out;
};
nout = names.myFilter2(segregate);
console.log(nout);

Array.prototype.myMap2 = function (callback) {
    return this.map(callback);
};
nout = names.myMap2(mapper1);
console.log(nout);
var numbers = [1, 3, 5, 10, 11];
function mapper2(a, i, array) {
    if (i + 1 < array.length) {
        var out = a + array[i + 1];
        return out;
    }
    return a;
};

Array.prototype.mapNumb = function (callback) {
    return this.map(callback);
}
console.log(numbers.mapNumb(mapper2));

nout = names.map(function (a) {
    var out = "<a href=””>" + a + "</a>" + ""
    return out;
})
console.log(nout.join(""));

var names1 = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];
var out = "<table class='table'>";
out += "<thead>"
    + "<tr>"
    + "<th>Name</th>"
    + "<th>Phone</th>"
    + "</tr>"
    + "</thead>";
out += names1.map(function (item) {
    return "<tr>"
        + "<td>" + item.name + "</td>"
        + "<td>" + item.phone + "</td>"
        + "</tr>";
})
out += "</table>";

console.log(out);

//reduce
var all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(" ", ",", "#"));

var numbers2 = [2, 3, 67, 33];
function reducere(a,b){
return a+b;
}
console.log(numbers2.reduce(reducere))

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]
var reducer = members.reduce(function (a,b,c,d){
    if(c==d.length-1){
        return(a+b.age)/d.length;
    }
return (a+b.age);
},0);
console.log(reducer)  

var votes = ["Clinton","Trump","Clinton",
"Clinton","Trump","Trump","Trump","None"];

var reducer2 = votes.reduce(function (ac,b){
  if(!ac[b]){
    ac[b] =0;
  }  
 ac[b]+=1;
 return ac;
}, {});
console.log(reducer2);
