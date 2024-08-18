function homeScore(points) {
    let homeScore = document.getElementById("home-score-el");
    homeScore.innerHTML = parseInt(homeScore.innerHTML) + points;
}

function guestScore(points) {
    let guestScore = document.getElementById("guest-score-el");
    guestScore.innerHTML = parseInt(guestScore.innerHTML) + points;
}