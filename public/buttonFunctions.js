export function incrementScore() {
    let upvotes = 0, downvotes = 0;
    //struggling to incorporate this separately in scores.js - look at that file for more details!
    const popularity = document.getElementById('popularity');
    popularity.addEventListener("click", clickEvent => {
        if (clickEvent.target.id==="upvote") {
            upvotes++;
            let score = document.getElementById('upvoteScore');
            score.innerText = upvotes;

        }
        if (clickEvent.target.id==="downvote") {
            downvotes++;
            let score = document.getElementById('downvoteScore');
            score.innerText = downvotes;
        }
    })
}
