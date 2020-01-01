//https://api.giphy.com/v1/stickers/search?api_key=7pDBRQF6ARk3PVfLndbl5T85oNlBQcLc&q=toys&limit=25&offset=0&rating=G&lang=en

var searchGiphy = function() {
    
    var search = document.getElementById('giphy-search').value;
    var baseUrl = "https://api.giphy.com/v1/stickers/search?api_key=7pDBRQF6ARk3PVfLndbl5T85oNlBQcLc&limit=25&offset=0&lang=en&q=" + search
    //get ip address for user
    $.getJSON(baseUrl, function (data) {
        console.log(data);
       // document.getElementById('giphy-json').innerHTML = JSON.stringify(data.data);
    });  
    
/*     const url = "http://jsonip.com/?callback";
    fetch(url)
    .then(data =>{return data.json()})
    .then(response => {
            console.log(response)
    }) */   
    
};