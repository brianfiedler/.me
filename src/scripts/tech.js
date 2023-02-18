function growDiv(id) {
    var growDiv = document.getElementById(id);
    growDiv.className += " hidden";
}

function goToLink(html)
{
    $("#main-content").load(html + ".html"); 
}

function birdClick(id)
{
    var scoreElement = document.getElementById('bird-score');
    var score = document.getElementById('bird-score').innerHTML;
    var scoreLabelElement = document.getElementById('score-label');

    var intScore = parseInt(score);
    if(intScore === 0)
    {
        scoreElement.style.display = "block"
        scoreLabelElement.style.display = "block"
    }

    document.getElementById('bird-score').innerHTML = intScore + 1;

    var sound = document.getElementById("audio-shot");
    sound.src = "/media/Click.wav";
    sound.play();

    showHide(id) 
}

function showHide(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}