function homeScore(points) {
    let homeScore = document.getElementById("home-score-el");
    homeScore.innerHTML = parseInt(homeScore.innerHTML) + points;
}

function guestScore(points) {
    let homeScore = document.getElementById("guest-score-el");
    homeScore.innerHTML = parseInt(homeScore.innerHTML) + points;
}