import { setButtonFunctions } from "./buttonFunctions.js";
import { createCommentsSection, addComment } from "./comments.js";
//import from comments
//import from newFoodButton

//food video, recipes on the sides?

//get random image url
async function randomMeal() {
    // add try catch block
    try {
        const meal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

        const body = await meal.json();
        const meals = body.meals[0];
        const img = meals.strMealThumb;
        const mealName = meals.strMeal;
        return {img, mealName};
    } catch (e) {
        console.error("Failed to fetch a meal");
        return {img:"failed to fetch",
                mealName: "failed to fetch"};
    }
}

function setTitle() {
    document.title = "Random Recipe Generator"
}

async function setBody() {
    //set h1 & image
    const {img, mealName} = await randomMeal();

    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const mealImg = document.createElement("img");

    h1.innerText = mealName;
    mealImg.setAttribute("src", img);

    div.append(h1,mealImg);
    document.body.appendChild(div);

    // document.querySelectorAll("body *").forEach(child => child.style.boxSizing = "border-box");

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    h1.style.textAlign = "center";
    mealImg.parentElement.style.border = "red 1px solid"
    mealImg.style.margin = "5em";
}

/* BUTTONS
*/
function createButtons() {
    //add score counter
    const upvoteDiv = document.createElement('div');
    const downvoteDiv = document.createElement('div');
    const upvote = document.createElement("button");
    const downvote = document.createElement("button");
    const buttons = document.createElement("div");
    const upvoteScore = document.createElement('p');
    const downvoteScore = document.createElement('p');


    upvote.innerText = "🤤";
    downvote.innerText = "🤮";
    upvoteScore.innerText = '0';
    downvoteScore.innerText = '0';

    upvoteScore.setAttribute('id','upvoteScore');
    downvoteScore.setAttribute('id','downvoteScore');
    upvote.setAttribute('id', "upvote");
    downvote.setAttribute('id', "downvote");
    buttons.setAttribute('id', "popularity");

    document.body.append(buttons);
    buttons.append(upvoteDiv, downvoteDiv);
    upvoteDiv.append(upvoteScore,upvote);
    downvoteDiv.append(downvote,downvoteScore);

    buttons.style.display = 'flex';
    buttons.style.flexDirection = 'row';
    upvoteDiv.style.display = 'flex';
    upvoteDiv.style.flexDirection = 'row';
    downvoteDiv.style.display = 'flex';
    downvoteDiv.style.flexDirection = 'row';
}

// function createCommentsSection() {

// }

window.addEventListener('DOMContentLoaded', async () => {
    //set HTML elements
    setTitle();
    await setBody();
    createButtons();
    await createCommentsSection()

    //set event listeners
    incrementScore();
    addComment();

    setButtonFunctions();
})
