//events - click, input, change, submit
//2nd arg: callback

window.addEventListener('DOMContentLoaded', event => {
    let upvotes = 0, downvotes = 0;

    const popularity = document.getElementByClassName('popularity');
    popularity.addEventListener("click", clickEvent => {
        if (clickEvent.target.id==="upvote") {
            upvotes++;
        }
        if (clickEvent.target.id==="downvote") {
            downvotes++;
        }
    })
})
