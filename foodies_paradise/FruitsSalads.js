document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic Fresh Fruit Salad',
            image: 'https://th.bing.com/th?id=OSK.4bc9b67b30c908bc18da7bef95f301e4&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['2 cups watermelon, cubed',
            '2 cups cantaloupe, cubed',
            '2 cups pineapple, chopped',
            '1 cup grapes, halved',
            '1 cup strawberries, sliced',
            '1 banana, sliced',
            '2 tablespoons honey',
            '1 tablespoon fresh mint, chopped',],
            instructions: ['In a large bowl, combine all the prepared fruits.',
            'Drizzle honey over the fruits and gently toss to coat.',
            'prinkle chopped mint on top.',
            'Chill in the refrigerator for at least 30 minutes before serving.',]
        },
        {
            title: ' Citrus Mint Fruit Salad',
            image: 'https://th.bing.com/th?id=OSK.3d347b727bafc9a027e752219ada59eb&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['2 grapefruits, peeled and segmented',
            '1 cup kiwi, peeled and sliced',
            '1 cup pomegranate seeds',
            '1 tablespoon fresh lime juice',
            '1 tablespoon honey',
            'Fresh mint leaves for garnish'],
            instructions: ['Combine the orange segments, grapefruit segments, kiwi slices, and pomegranate seeds in a bowl.',
            'In a small bowl, whisk together lime juice and honey.',
            'Drizzle the lime-honey mixture over the fruits and toss gently to combine.',
            'Garnish with fresh mint leaves before serving',]
        },
        {
            title: 'Tropical Coconut Fruit Salad',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRltdHPhHU_jVhsTyNwZ1XdNOxfEpqQiIMw&usqp=CAU',
            ingredients: ['2 cups pineapple, diced',
            '1 cup mango, diced',
            '1 cup papaya, diced',
            '1 cup kiwi, peeled and sliced',
            '1 cup strawberries, sliced',
            '1/2 cup shredded coconut',
            '1/4 cup lime juice',
            '2 tablespoons honey',
            '1/4 cup fresh mint, chopped'],
            instructions: ['In a large bowl, combine pineapple, mango, papaya, kiwi, and strawberries.',
            'In a small bowl, whisk together lime juice and honey.',
            'Drizzle the lime-honey mixture over the fruits and toss gently to coat.',
            'Sprinkle shredded coconut and chopped mint on top.',
            'Chill in the refrigerator for about 1 hour before serving to enhance the flavors.',]
        },
        
    ];

    const recipeList = document.getElementById('recipe-list');
    const recipeDetails = document.getElementById('recipe-details');

    // Display recipe list
    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}">
                               <p>${recipe.title}</p>`;
        recipeCard.addEventListener('click', () => displayRecipeDetails(index));
        recipeList.appendChild(recipeCard);
    });

    function displayRecipeDetails(index) {
        const selectedRecipe = recipes[index];
        const ingredientsList = selectedRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        const backBtn = `<p class="back-btn" onclick="hideRecipeDetails()">Back to Recipes</p>`;

        const detailsHtml = `
            <h2>${selectedRecipe.title}</h2>
            <img src="${selectedRecipe.image}" alt="${selectedRecipe.title}">
            <h3>Ingredients:</h3>
            <ul>${ingredientsList}</ul>
            <h3>Instructions:</h3>
            <p>${selectedRecipe.instructions}</p>
            ${backBtn}
        `;

        recipeList.style.display = 'none';
        recipeDetails.style.display = 'block';
        recipeDetails.innerHTML = detailsHtml;
    }
window.redirectToItemsList = function () {
        // Redirect to your items list page or take any other action here
        window.location.href = "items-list.html";
    };
});