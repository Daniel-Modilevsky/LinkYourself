var firstName = "Daniel";
var lastName = "Modilevsky";
var size = firstName.length * lastName.length;

function init() {
    var articles = "";
    for (var i = 0; i < size; i++)
        articles += "<article></article> ";
    var main = document.getElementById("main-3").innerHTML = articles;
    firstArticle = document.getElementsByTagName("article")[0];

    firstArticle.onmouseover = function () {
        firstArticle.style.backgroundColor = "#506270";
        firstArticle.style.color = "#f9f9f9";
        firstArticle.innerHTML = firstName[0];
    }

    firstArticle.onmouseout = function () {
        firstArticle.style.backgroundColor = "#f9f9f9";
    }

    document.getElementById("colorBtn").onclick = function () {
        for (var i = 0; i < firstName.length; i++)
            document.getElementsByTagName("article")[i].style.backgroundColor = "#506270";
    }

    document.getElementById("reColorBtn").onclick = function () {
        for (var i = 0; i < firstName.length; i++)
            document.getElementsByTagName("article")[i].style.backgroundColor = "#f9f9f9";
    }
}
