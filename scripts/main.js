
$(document).ready(function () {
    $.getScript("scripts/profile.js", function() {
        loadProfile();

        window.setInterval(function(){
            loadProfile();
        }, 30000);
     });
    
    //load main content
    $("#main-content").load("default.html");
    //$("#footer-id").load("footer.html");
    //set last updated on date
    document.getElementById('last-updated').innerHTML = "Last modified on " + document.lastModified;
    
/*     const url = "http://jsonip.com/?callback";
    fetch(url)
    .then(data =>{return data.json()})
    .then(response => {
            console.log(response)
    }) */   
    
});



var loadContent = function(html, id) {
    var dndActive = document.getElementsByClassName('red-bg');
    if(dndActive.length > 0 && html == 'contact')
    {
      return;    
    }  

    var menuContainer =  document.getElementById('menu');
    var footerMenuContainer =  document.getElementById('footer-menu');

    // Get all buttons with class="btn" inside the container
    var activeMenuItem = menuContainer.getElementsByClassName('active');
    //var footerMenuItem = footerMenuContainer.getElementsByClassName('active');
    if(activeMenuItem.length > 0)
    {
        activeMenuItem[0].className = activeMenuItem[0].className.replace(" active", "");
    }
    // if(footerMenuItem.length > 0)
    // {
    //     footerMenuItem[0].className = footerMenuItem[0].className.replace(" active", "");
    // }

    if(id != 0)
    {
        var selectedMenutItem = document.getElementById(id);
        var selectedFooterMenutItem = document.getElementById("f" +id);
        var bannerDiv = document.getElementById('banner-id');
        var footerDiv = document.getElementById('footer-id');
        selectedMenutItem.className += " active";
        //selectedFooterMenutItem.className += " active";

        bannerDiv.className = "banner-active";
        footerDiv.className = "footer-active";
    }
    else
    {
        var bannerDiv = document.getElementById('banner-id');
        bannerDiv.className = bannerDiv.className.replace("banner-active", "banner");         
        var bannerDiv = document.getElementById('footer-id');
        bannerDiv.className = bannerDiv.className.replace("footer-active", "footer");       
    }    
    window.scrollTo(0, 0);
    $("#main-content").load(html + ".html");
}

