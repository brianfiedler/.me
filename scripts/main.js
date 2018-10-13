
$(document).ready(function () {
    $.getScript("scripts/profile.js", function() {
        loadProfile();

        window.setInterval(function(){
            loadProfile();
        }, 30000);
     });
    
    //load main content
    $("#main-content").load("default.html");
    
    //set last updated on date
    document.getElementById('last-updated').innerHTML = "Last modified on " + document.lastModified;

    //get ip address for user
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        //console.log(data);
        document.getElementById('ipcode').innerHTML = data.ip;
    });  
    
/*     const url = "http://jsonip.com/?callback";
    fetch(url)
    .then(data =>{return data.json()})
    .then(response => {
            console.log(response)
    }) */
    
    
});



var loadContent = function(html, id) {
   
    var menuContainer =  document.getElementById('menu');

    // Get all buttons with class="btn" inside the container
    var activeMenuItem = menuContainer.getElementsByClassName('active');
    if(activeMenuItem.length > 0)
    {
        activeMenuItem[0].className = activeMenuItem[0].className.replace(" active", "");
    }
    
    if(id != 0)
    {
        var selectedMenutItem = document.getElementById(id);
        var bannerDiv = document.getElementById('banner-id');
        selectedMenutItem.className += " active";
        bannerDiv.className = "banner-active";
    }
    else
    {
        var bannerDiv = document.getElementById('banner-id');
        bannerDiv.className = bannerDiv.className.replace("banner-active", "banner");
    }

    $("#main-content").load(html + ".html");    
}

