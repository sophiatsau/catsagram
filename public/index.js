// Your code here

    //tags for recipe:
        //strArea - cuisine?
        //strCategory

        //strInstructions
    //list of ingredients
        //"strIngredient<number>"
    //correspond to measure of Ingredients
        //"strMeasure<number>"
    //video of recipe:
        //strYoutube
    //link for source of recipe:
        //strSource
        //button for link

//get random image url
async function randomMeal() {
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const body = await meal.json();
    const meals = body.meals[0]
    const img = meals.strMealThumb;
    const mealName = meals.strMeal;
    // Object.entries(body.meals[0]).forEach(entry => console.log(entry))

    return {img, mealName};
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

    document.querySelectorAll("body *").forEach(child => child.style.boxSizing = "border-box");

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    h1.style.textAlign = "center";
    mealImg.parentElement.style.border = "red 1px solid"
    mealImg.style.margin = "5em";
}

/* BUTTONS
 - get new recipe button
 - select category of food?
    -
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
    buttons.setAttribute('class', "popularity");

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

function incrementScore() {
    let upvotes = 0, downvotes = 0;
    //struggling to incorporate this separately in scores.js - look at that file for more details!
    const popularity = document.getElementsByClassName('popularity')[0];
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

// function setComments() {

// }

// window.onload = async () => {
//     setTitle();
//     await setBody();
//     createButtons();
//     // setComments();
// }

window.addEventListener('DOMContentLoaded', async () => {
    setTitle();
    await setBody();
    await createButtons();
    incrementScore();
})
