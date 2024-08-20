const choice1=document.getElementById('choice-1');
const choice2=document.getElementById('choice-2');
const playBtn=document.getElementById('play-btn');
const result=document.getElementById('result');
const player1Score=document.getElementById('player-1-score');
const player2Score=document.getElementById('player-2-score');
player1Score.innerHTML=0;
player2Score.innerHTML=0;

const choiceList = [
    { emoji: "🪨", name: "rock" },
    { emoji: "📜", name: "paper" },
    { emoji: "✂️", name: "scissors" }
];

playBtn.addEventListener('click',function(){
    let i=Math.floor(Math.random()*3)
    let j=Math.floor(Math.random()*3)
    choice1.innerHTML = choiceList[i].emoji;
    choice2.innerHTML = choiceList[j].emoji;
    if (choiceList[i].name == choiceList[j].name) {
        result.innerHTML = 'Draw';
    } else if (choiceList[i].name == 'rock' && choiceList[j].name == 'scissors') {
        result.innerHTML = 'Player 1 wins';
        player1Score.innerHTML = parseInt(player1Score.innerHTML) + 1;
    } else if (choiceList[i].name == 'rock' && choiceList[j].name == 'paper') {
        result.innerHTML = 'Player 2 wins';
        player2Score.innerHTML = parseInt(player2Score.innerHTML) + 1;
    } else if (choiceList[i].name == 'paper' && choiceList[j].name == 'rock') {
        result.innerHTML = 'Player 1 wins';
        player1Score.innerHTML = parseInt(player1Score.innerHTML) + 1;
    } else if (choiceList[i].name == 'paper' && choiceList[j].name == 'scissors') {
        result.innerHTML = 'Player 2 wins';
        player2Score.innerHTML = parseInt(player2Score.innerHTML) + 1;
    } else if (choiceList[i].name == 'scissors' && choiceList[j].name == 'paper') {
        result.innerHTML = 'Player 1 wins';
        player1Score.innerHTML = parseInt(player1Score.innerHTML) + 1;
    } else if (choiceList[i].name == 'scissors' && choiceList[j].name == 'rock') {
        result.innerHTML = 'Player 2 wins';
        player2Score.innerHTML = parseInt(player2Score.innerHTML) + 1;
    } else {
        alert('Invalid');
    }
})
