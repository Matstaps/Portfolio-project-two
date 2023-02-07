// functions

const choices = {

    0: "Fire",
    1: "Water",
    2: "Wood",
}

//var for choices
var userScore = 0;
var comScore = 0;
var userScoreEl;
var comScoreEl;
var winnerEl;

//var for user score

function userChoice(event) {
    console.log('You chose:', event.target.innerText);
    const userChoiceInt = event.target.dataset.choice;
    return userChoiceInt;
}
//var for com score

function comChoice(){

    const comRandom = Math.floor(Math.random() * 3);
    console.log('Computer chose:', choices[comRandom]);
    return comRandom;
}

function score(event){

    var userChoiceInt = userChoice(event);
    var comChoiceInt = comChoice();
    console.log("User: " + userChoiceInt + "Computer: " + comChoiceInt);

    if (userChoiceInt === comChoiceInt){
            console.log('Its a Draw!');
            winnerEl.innerHTMl = "It's a Draw!";
    }   else if (userChoiceInt == 0 && comChoiceInt == 1){
            console.log('Computer Wins!');
            comScore ++;
            winnerEl.innerHTMl = "Computer Wins!";
    }   else if (userChoiceInt == 0 && comChoiceInt == 2){
            console.log('Player Wins!');
            userScore ++;
            winnerEl.innerHTMl = "Player Wins!";
    }   else if (userChoiceInt == 1 && comChoiceInt == 0){
            console.log('Player Wins!');
            userScore ++;
            winnerEl.innerHTMl = "Player Wins!";
    }   else if (userChoiceInt == 1 && comChoiceInt == 2){
            console.log('Computer Wins!');
            comScore ++;
            winnerEl.innerHTMl = "Computer Wins!";
    }   else if (userChoiceInt == 2 && comChoiceInt == 0){
            console.log('Computer Wins!');
            comScore ++;
            winnerEl.innerHTMl = "Computer Wins!";
    }   else if (userChoiceInt == 2 && comChoiceInt == 1){
            console.log('Player Wins!');
            userScore ++;
            winnerEl.innerHTMl = "Player Wins!";
    }

    userScoreEl.innerHTMl = "User: " + userScore;
    comScoreEl.innerHTMl = "Computer: " + comScore;

}

//var for user accum score
//var for com accum score

// function for user choice

// function for computer choice

// function for score

// function dom load, buttons

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const btns = document.querySelectorAll('button');

    console.log('I found ' + btns.length + 'buttons');

    btns.forEach(btn => {
        
        btn.addEventListener('click', score);
    });

    userScoreEl = document.getElementById("user-score");
    comScoreEl = document.getElementById("com-score");
    winnerEl = document.getElementById("winner");
});