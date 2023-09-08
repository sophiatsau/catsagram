
import { createNewFoodContainer,createNewFoodButton, createFilterDropdown,filterFood,dropdownStorage } from "./newFoodButton.js";
import { setButtonFunctions } from "./buttonFunctions.js";
import { createCommentsSection, addComment } from "./comments.js";
import { buttonData } from "./buttonData.js";

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
    let img = localStorage.getItem("ImageUrl");
    let mealName = localStorage.getItem("Heading");

    if (img === null || mealName === null) {
        ({img, mealName} = await randomMeal());
    }

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
    const popularity = document.createElement("div");
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
    popularity.setAttribute('id', "popularity");

    document.body.append(popularity);
    popularity.append(upvoteDiv, downvoteDiv);
    upvoteDiv.append(upvoteScore,upvote);
    downvoteDiv.append(downvote,downvoteScore);

    popularity.style.display = 'flex';
    popularity.style.flexDirection = 'row';
    upvoteDiv.style.display = 'flex';
    upvoteDiv.style.flexDirection = 'row';
    downvoteDiv.style.display = 'flex';
    downvoteDiv.style.flexDirection = 'row';
    popularity.style.gap = "10px";
    popularity.style.marginBottom = "20px";

    popularity.style.fontSize = "36px";
    upvote.style.fontSize = "70px";
    downvote.style.fontSize = "70px";

    upvote.style.borderRadius = "50%";
    downvote.style.borderRadius = "50%";

    upvote.style.border = "none";
    downvote.style.border = "none";
    upvote.style.backgroundColor = "transparent";
    downvote.style.backgroundColor = "transparent";
    upvote.style.boxSizing = "border-box";
    downvote.style.boxSizing = "border-box";
}

window.addEventListener('DOMContentLoaded', async () => {
    //set HTML elements
    setTitle();
    await setBody();
    await createButtons();
    await createNewFoodContainer();
    await createFilterDropdown();
    await createNewFoodButton();
    await createCommentsSection();
    MealStorage();

    //set event listeners
    dropdownStorage();
    setButtonFunctions();
    addComment();
    filterFood();
})

function MealStorage() {
    //capture meal values
    const webImage = document.querySelector('img').getAttribute('src');
    localStorage.setItem('ImageUrl',webImage);
    const webHeading = document.querySelector('h1').innerText;
    localStorage.setItem('Heading',webHeading);
}
