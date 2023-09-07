//events - click, input, change, submit
//2nd arg: callback

window.onload = () => {

    let upvotes = 0, downvotes = 0;
    //struggling here because we can't access popularity since it is trying to access before index.js script is loaded :()
    const popularity = document.getElementsByClassName('popularity')[0];

//     popularity.addEventListener("click", clickEvent => {
//         if (clickEvent.target.id==="upvote") {
//             upvotes++;
//             let score = document.getElementById('upvoteScore');
//             score.innerText = upvotes;

//         }
//         if (clickEvent.target.id==="downvote") {
//             downvotes++;
//             let score = document.getElementById('downvoteScore');
//             score.innerText = downvotes;
//         }
//     })
}
