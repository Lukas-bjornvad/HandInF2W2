/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var prev = "";


document.getElementById("dk").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("de").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};
document.getElementById("cy").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};
document.getElementById("nc").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};
document.getElementById("gl").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};
document.getElementById("is").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("pt").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ma").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("es").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("tn").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("dz").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("be").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders.length === 0)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("it").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("by").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("pl").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("jo").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("gr").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("tm").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
      if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("kz").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("fi").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("se").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("no").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ua").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("il").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("sa").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("iq").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("az").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ir").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ge").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("sy").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("tr").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("am").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ie").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ch").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("at").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("cz").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("sk").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("hu").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("lt").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("lv").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("md").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ro").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("bg").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("al").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ee").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("lb").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ad").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("sm").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("mc").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("lu").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("fr").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("li").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("nl").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
       if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ba").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
        if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("si").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
     if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("mk").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("hr").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("ru").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
 if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.children[0].style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.children[0].style.fill;
        }
    }
    for (var i = 0; i < this.children.length; i++) {
        this.children[i].style.fill = "red";
    }
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("me").onclick = function () {
     var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("rs").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("gb").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.children[0].style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.children[0].style.fill;
        }
    }
    for (var i = 0; i < this.children.length; i++) {
        this.children[i].style.fill = "red";
    }
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("im").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
  if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("gg").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("je").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("va").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("Kosovo").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + "xk";
   if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("mt").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
   if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("cy").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

document.getElementById("nc").onclick = function () {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + this.id;
    if (prev !== "" && prev !== this.id) {
       
        if (document.getElementById(prev).children.length !== 0) {
            for (var i = 0; i < document.getElementById(prev).children.length; i++) {
                document.getElementById(prev).children[i].style.fill = this.style.fill;
            }
        } else {
            document.getElementById(prev).style.fill = this.style.fill;
        }
    }
    this.style.fill = "red";
    prev = this.id;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                console.log(data);
                var border = data[0].borders.join(", ");
                if (data[0].borders[0] === null)
                    border = "NaN";
                document.getElementById("d1").innerHTML = "Country: " + data[0].name
                        + "<br>Population: " + data[0].population
                        + "<br>Area: " + data[0].area
                        + "<br>Borders: " + border
                        ;
            });
};

