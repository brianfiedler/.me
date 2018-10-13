function growDiv(id) {
    var growDiv = document.getElementById(id);
    growDiv.className += " hidden";
}

function goToLink(html)
{
    $("#main-content").load(html + ".html"); 
}