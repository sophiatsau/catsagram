import {buttonData} from "./buttonData.js"

export function setButtonFunctions() {
    const popularity = document.getElementById('popularity');

    popularity.addEventListener("click", clickEvent => {
        const vote = clickEvent.target.id
        incrementScore(vote);
        playAudio(vote);
    })
}

function incrementScore(vote) {
    const button = buttonData[vote];
    button.votes += 1;
    const score = document.getElementById(vote+'Score');
    score.innerText = button.votes;
}

function playAudio(vote) {
    buttonData[vote].audio.play();
}
