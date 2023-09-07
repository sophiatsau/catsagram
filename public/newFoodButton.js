// default: all food
import { randomMeal } from "./index.js";
import { buttonData } from "./buttonData.js";

export function createNewFoodContainer() {
    const container = document.createElement('container');
    container.setAttribute('id','newFoodContainer');
    document.body.append(container);
}
export function createNewFoodButton() {
    const getNewFood = document.createElement('button');
    getNewFood.setAttribute('id','newFoodButton');
    // getNewFood.setAttribute('type','submit');
    getNewFood.innerText = "Get New Food";
    const foodContainer = document.getElementById('newFoodContainer');
    foodContainer.append(getNewFood);
}

export function createFilterDropdown() {
    //create container that will hold text and dropdown menu
    const container = document.createElement('div');
    container.setAttribute('id','filterDropdownContainer');
    const biggerDiv = document.getElementById('newFoodContainer');
    biggerDiv.append(container);

    //create text
    const direction = document.createElement('span');
    direction.innerText = 'Show me recipes only of this type:'
    container.append(direction);

    //create dropdown menu
    const dropdown = document.createElement('select');
    dropdown.setAttribute('id','dropdownFilter')
    container.append(dropdown);

    const all = document.createElement('OPTION');
        all.setAttribute('value','All');
        all.selected=true;
    const beef = document.createElement('option');
        beef.setAttribute('value','Beef');
    const breakfast = document.createElement('option');
        breakfast.setAttribute('value','Breakfast');
    const chicken = document.createElement('option');
        chicken.setAttribute('value','Chicken');
    const dessert = document.createElement('option');
        dessert.setAttribute('value','Dessert');
    const goat = document.createElement('option');
        goat.setAttribute('value','Goat');
    const lamb = document.createElement('option');
        lamb.setAttribute('value','Lamb');
    const pasta = document.createElement('option');
        pasta.setAttribute('value','Pasta');
    const pork = document.createElement('option');
        pork.setAttribute('value','Pork');
    const seafood = document.createElement('option');
        seafood.setAttribute('value','Seafood');
    const side = document.createElement('option');
        side.setAttribute('value','Side');
    const appetizer = document.createElement('option');
        appetizer.setAttribute('value','Appetizer');
    const vegan = document.createElement('option');
        vegan.setAttribute('value','Vegan');
    const vegetarian = document.createElement('option');
        vegetarian.setAttribute('value','Vegetarian');

    dropdown.append(all,beef,breakfast,chicken,dessert,goat,lamb,pasta,pork,seafood,side,appetizer,vegan,vegetarian);

    for(let i=0;i<dropdown.children.length;i++) {
        let option = dropdown.children[i];
        option.innerText = option.value;
    };
}

export function filterFood() {
    const getNewFood = document.getElementById('newFoodButton');

    getNewFood.addEventListener('click', async () => {
        const selection = document.getElementById('dropdownFilter').value;
        const oldImage = document.querySelector('img');
        const oldHeader = document.querySelector('h1');
        let img = oldImage;
        let mealName = oldHeader;

        if (selection === 'All') {
            const meal = await randomMeal();
            img = meal.img;
            mealName = meal.mealName;
        }
        // else if (selection ===) {}


        //reset scores
        const oldUpvoteScore = document.getElementById('upvoteScore');
        const oldDownvoteScore = document.getElementById('downvoteScore');
        oldImage.src = img;
        oldHeader.innerText = mealName;
        oldUpvoteScore.innerText=0;
        oldDownvoteScore.innerText=0;
        buttonData.upvote.votes = 0;
        buttonData.downvote.votes = 0;
    })
}

// new food: reset scores
