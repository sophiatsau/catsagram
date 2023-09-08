import {buttonData} from "./buttonData.js"

export function setButtonFunctions() {
    const popularity = document.getElementById('popularity');

    popularity.addEventListener("click", clickEvent => {
        const vote = clickEvent.target.id
        incrementScore(vote);
        playAudio(vote);
        scoreStorage();
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

function scoreStorage() {
    const upvote = buttonData.upvote.votes
    const downvote = buttonData.downvote.votes
    localStorage.setItem('upvotes',JSON.stringify(upvote));
    localStorage.setItem('downvotes',JSON.stringify(downvote));
}
