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
input.setAttribute('placeholder', 'comment here')
button.setAttribute('id', 'add-comment') //<button id='add-comment'>
list.setAttribute('id', 'comment-section') //<ul id='comment-section'>

document.body.append(form) //block
form.append(input,button)
document.body.append(list) //block

form.style.border = "1px solid aquamarine" // styling for form border
form.style.display = 'flex' 

//button styling
button.style.width = 'fit-content'
button.style.height = '100%'
button.style.padding = '10px 25px'
button.innerText = 'Submit'
//list styling
list.style.listStyleType = 'none'

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
    
    listItem.innerText = inputComment //store comment as text in <li> element
    listThing.append(listItem) //<ul>   <li></li>  </ul>
    inputText.value = ''; //reset to empty
    
    
    })

}

