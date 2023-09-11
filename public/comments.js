//comments posted below the div in the comment section
//<form>
// <input type='text' placeholder='add comment'>
// <button id=add-comment> </button>
//</form>
//<ul id='comment-section'>
//</ul>
let nextCommentId;

export async function createCommentsSection(){
    //<form>
    const form = document.createElement('form')
    const input = document.createElement('input') //<input>
    const button = document.createElement('button') //<button>
    const heading = document.createElement('h2'); //comment section heading
    //</form>
    const list = document.createElement('ul')
    form.setAttribute('id', 'field')
    input.setAttribute('type', 'text') //<input type="text">
    input.setAttribute('id', 'input-field') //<input type="text" id="input-field">
    input.setAttribute('placeholder', ' comment here')
    button.setAttribute('id', 'add-comment') //<button id='add-comment'>
    list.setAttribute('id', 'comment-section') //<ul id='comment-section'>
    document.body.append(form) //block
    form.append(input,button)
    document.body.append(list) //block
    list.append(heading);
    heading.innerText = "Connoisseurs' Opinions";
    heading.style.margin = "5px";
    heading.style.textDecoration = "underline double #F98869 1px"

    //restoring comments if refreshed
    let oldComments = localStorage.getItem('commentSection');

    //if no storage yet, create empty storage for comments
    if (!oldComments) {
        localStorage.setItem('commentSection', '{}');
        nextCommentId = 1;
    }
    //restore comments if refreshed
    else {
        const commentEntries = Object.entries(JSON.parse(oldComments));
        nextCommentId = commentEntries.length+1;
        for (let [id, text] of commentEntries) {
            let item = document.createElement('li');
            item.setAttribute('class','comments')
            item.innerText = text;
            item.id = id;
            list.append(item);
            createDeleteButton(id, item);
        }
    }

    //form styling
    form.style.border = "1px solid #F98869" // styling for form border
    form.style.display = 'flex'
    form.style.borderRadius = '25px'
    form.style.marginTop = '20px'
    //button styling
    button.style.width = 'fit-content'
    button.style.height = 'fit-content'
    button.style.padding = '10px 25px'
    button.innerText = 'Submit'
    button.style.borderTopRightRadius = '25px'
    button.style.borderBottomRightRadius = '25px'
    button.style.border = 'transparent'
    //list styling
    list.style.listStyleType = 'none'
    list.style.border = '4px double #F98869'
    list.style.borderRadius = "5em"
    // list.style.width = '30%'
    list.style.height = 'fit-content'
    list.style.fontFamily = 'sans-serif'
    list.style.padding = "10px 50px";
    list.style.backgroundColor = "#FFF3C2";
    //input styling
    input.style.border = '.25px solid lightgrey'
    input.style.borderTopLeftRadius = '25px'
    input.style.borderBottomLeftRadius = '25px'

}

export function addComment () {
    const formThing = document.querySelector('#field')
    const listThing = document.querySelector('#comment-section')
    formThing.addEventListener('submit', e => { //when someone submits a comment
        e.preventDefault(); //prevent page reload
        const inputText = document.querySelector('#input-field') //grab input element
        const inputComment = inputText.value //get value from input element and store into variable

        //don't add list item if there's no value
        if (!inputComment) return;

        const listItem = document.createElement('li') //create li element and store into list item
        listItem.setAttribute('class', 'comments') //<li class='comments'>
        listItem.style.alignContent = 'center';
        listItem.innerText = inputComment //store comment as text in <li> element
        listThing.append(listItem) //<ul>   <li></li>  </ul>
        inputText.value = ''; //reset to empty

        //assign identification to comments
        const commentId = "comment-"+nextCommentId;
        listItem.id = commentId;
        nextCommentId++;

        //add new comment to local storage
        let currentComments = JSON.parse(localStorage.getItem("commentSection"));
        currentComments[commentId] = inputComment;
        localStorage.setItem("commentSection", JSON.stringify(currentComments));
        createDeleteButton(commentId, listItem);
    })
}

export function createDeleteButton(commentId, comment) {
    const button = document.createElement('button');
    button.setAttribute('id',`delete-${commentId}`);
    button.style.visibility = "hidden";
    button.innerText = 'Delete';
    comment.append(button);

    //create listener for showing button
    comment.addEventListener("mouseover", e => {
        button.style.visibility = "visible";
    });
    comment.addEventListener("mouseleave", e => {
        button.style.visibility = "hidden";
    })
}

export function deleteComment() {
    const commentSection = document.getElementById('comment-section');
    commentSection.addEventListener('click', e => {
        if (e.target.id && e.target.id.startsWith("delete-comment")) {
            //remove comment from storage
            const comment = e.target.parentElement;
            let storedComments = JSON.parse(localStorage.getItem("commentSection"));
            delete storedComments[comment.id];
            localStorage.setItem("commentSection", JSON.stringify(storedComments));

            //remove comment from page
            comment.remove();
        }
    })
}
