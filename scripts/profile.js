var loadProfile = function(html, id) {
    $.getJSON("https://discordapp.com/api/guilds/397921300628242432/widget.json", function (data) {
        var profileLabel = document.getElementById('profile-status-label');
        //profileLabel.innerHTML = data.members[0].status;
        var colorText;
        var colorIcon;
        var colorBorder;
        switch(data.members[0].status) {
            case "online":
                colorText = " green-text";
                colorIcon = " green-bg";
                colorBorder = " green-bdr";
                break;
            case "idle":
                colorText = " orange-text";
                colorIcon = " orange-bg";
                colorBorder = " orange-bdr";
                break;
            case "dnd":
                colorText = " red-text";
                colorIcon = " red-bg";
                colorBorder = " red-bdr";
                break;
            default:
                colorText = " grey-text";
                colorIcon = "grey-bg";
                colorBorder = "grey-bdr";
                break;
        }
        
        var statusRing = document.getElementById('profile-pic-container');
        var statusIcon = document.getElementById('profile-satus-icon');

        statusIcon.className = statusIcon.className.replace("green-bg", "").replace("orange-bg", "").replace("red-bg", "").replace("grey-bdr", "");
        profileLabel.className = profileLabel.className.replace("green-text", "").replace("orange-text", "").replace("red-text", "").replace("grey-bdr", "");
        statusRing.className = statusRing.className.replace("green-bdr", "").replace("orange-bdr", "").replace("red-bdr", "").replace("grey-bdr", "");

        statusIcon.className += colorIcon;
        profileLabel.className +=  colorText;
        statusRing.className +=  colorBorder;
    });  
}