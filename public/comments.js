//comments posted below the div in the comment section
//<form>
// <input type='text' placeholder='add comment'>
// <button id=add-comment> </button>
//</form>
//<ul id='comment-section'>
//</ul>
export async function createCommentsSection(){
    //<form>
    const form = document.createElement('form')
    const input = document.createElement('input') //<input>
    const button = document.createElement('button') //<button>
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
    //form styling
    form.style.border = "1px solid aquamarine" // styling for form border
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
    list.style.border = '1px solid aquamarine'
    list.style.width = '30%'
    list.style.height = 'fit-content'
    list.style.fontFamily = 'sans-serif'
    //input styling
    input.style.border = '.25px solid lightgrey'
    input.style.borderTopLeftRadius = '25px'
    input.style.borderBottomLeftRadius = '25px'
    // list.style.display = 'flex'
    // list.style.flexDirection = 'column'
    // list.style.justifyContent = 'center'
    // list.style.alignContent = 'center'
}

export function addComment () {
    const formThing = document.querySelector('#field')
    const listThing = document.querySelector('#comment-section')
    formThing.addEventListener('submit', e => { //when someone submits a comment
        e.preventDefault(); //prevent page reload
    const inputText = document.querySelector('#input-field') //grab input element
    const inputComment = inputText.value //get value from input element and store into variable
    const listItem = document.createElement('li') //create li element and store into list item
    listItem.setAttribute('class', 'comments') //<li class='comments'>
    listItem.style.alignContent = 'center'
    listItem.innerText = inputComment //store comment as text in <li> element
    listThing.append(listItem) //<ul>   <li></li>  </ul>
    inputText.value = ''; //reset to empty

    let comments =Array.from(document.getElementsByClassName('comments'));
    comments = comments.map(commentListItem => commentListItem.innerText)
    localStorage.setItem('commentSection', JSON.stringify(comments));
    })
}
