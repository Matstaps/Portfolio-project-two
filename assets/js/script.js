// functions

const choices = {

    0: "Fire",
    1: "Water",
    2: "Wood",
}

//var for choices

//var for user score

function userChoice(event) {
    console.log('You chose:', event.target.innerText);
    const userChoiceInt = event.target.dataset.choice;
    return userChoiceInt;
}
//var for com score

function comChoice(){

    const conRandom = Math.floor(Math.random() * 3);
    console.log('Computer chose:', choices[comRandom]);
    return comRandom;
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
        
        btn.addEventListener('click', score)
    });
});