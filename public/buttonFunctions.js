let upvotes = 0, downvotes = 0;

export function setButtonFunctions() {
    const popularity = document.getElementById('popularity');

    popularity.addEventListener("click", clickEvent => {
        const vote = clickEvent.target.id
        incrementScore(vote);
        playAudio(vote);
    })
}

function incrementScore(vote) {
    if (vote==="upvote") {
        upvotes++;
        let score = document.getElementById('upvoteScore');
        score.innerText = upvotes;
    }
    if (vote==="downvote") {
        downvotes++;
        let score = document.getElementById('downvoteScore');
        score.innerText = downvotes;
    }
}

function playAudio(vote) {
    const yumAudio = new Audio("/assets/yum.mp3");
    const barfAudio = new Audio("/assets/vomit.mp3");

    if (vote==="upvote") {
        yumAudio.play();
    }
    if (vote==="downvote") {
        barfAudio.play();
    }
}
