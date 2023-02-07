const choices = {

    0: "Fire",
    1: "Water",
    2: "Wood",
}

var userScore = 0;
var comScore = 0;
var userScoreEl;
var comScoreEl;
var winnerEl;



function userChoice(event) {
    console.log('You chose:', event.target.innerText);
    const userChoiceInt = event.target.dataset.choice;
    return userChoiceInt;
}

function comChoice(){

    const comRandom = Math.floor(Math.random() * 3);
    console.log('Computer chose:', choices[comRandom]);
    return comRandom;
}

function score(event){

    var userChoiceInt = userChoice(event);
    var comChoiceInt = comChoice();
    console.log("User: " + userChoiceInt + " Computer: " + comChoiceInt);

    if (userChoiceInt == comChoiceInt){
            console.log('Its a Draw!');
            winnerEl.innerHTML = "It's a Draw!";
        }   else if (userChoiceInt == 0 && comChoiceInt == 1){
            console.log('Computer Wins!');
            comScore ++;
            winnerEl.innerHTML = "Computer Wins!";
        }   else if (userChoiceInt == 0 && comChoiceInt == 2){
            console.log('Player Wins!');
            userScore ++;
            winnerEl.innerHTML = "Player Wins!";
        }   else if (userChoiceInt == 1 && comChoiceInt == 0){
            console.log('Player Wins!');
            userScore ++;
            winnerEl.innerHTML = "Player Wins!";
        }   else if (userChoiceInt == 1 && comChoiceInt == 2){
            console.log('Computer Wins!');
            comScore ++;
            winnerEl.innerHTML = "Computer Wins!";
        }   else if (userChoiceInt == 2 && comChoiceInt == 0){
            console.log('Computer Wins!');
            comScore ++;
            winnerEl.innerHTML = "Computer Wins!";
        }   else if (userChoiceInt == 2 && comChoiceInt == 1){
            console.log('Player Wins!');
            userScore ++;
            winnerEl.innerHTML = "Player Wins!";
        }

    userScoreEl.innerHTML = "User: " + userScore;
    comScoreEl.innerHTML = "Computer: " + comScore;

}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const btns = document.querySelectorAll('button');

    console.log('I found ' + btns.length + ' buttons');

    btns.forEach(btn => {
        
        btn.addEventListener('click', score);
    });

    userScoreEl = document.getElementById("user-score");
    comScoreEl = document.getElementById("com-score");
    winnerEl = document.getElementById("winner");
});