document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic Scrambled Eggs',
            image: 'https://th.bing.com/th?id=OSK.3659dba6ef6f969ad6b62f3c6ff133b8&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['Ingredients:','4 eggs,',' Salt and pepper to taste','2 tablespoons butter','Chopped chives or parsley for garnish (optional)',],
            instructions: 'Crack the eggs into a bowl and whisk them until well combined. Season with salt and pepper Heat butter in a non-stick skillet over medium heat until melted Pour the beaten eggs into the skillet and let them sit undisturbed for a moment.  Stir the eggs gently with a spatula, allowing them to cook evenly.  Continue stirring until the eggs are just set but still moist. Remove from heat, garnish with chopped chives or parsley if desired, and serve hot.',
        },
        {
            title: 'Avocado and Egg Breakfast Toast',
            image: 'https://th.bing.com/th?id=OSK.4033c863fa6f84aff93eca4735949dfd&w=194&h=170&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['Ingredients:','2 slices whole-grain bread, toasted','1 ripe avocado',' 2 eggs',' Salt and pepper to taste','Red pepper flakes (optional)','Fresh cilantro or chives for garnish'],
            instructions: 'Mash the ripe avocado and spread it evenly on the toasted bread slices. In a separate pan, cook eggs sunny-side-up or to your liking Place the cooked eggs on top of the avocado-covered toast. Season with salt, pepper, and red pepper flakes if desired. Garnish with fresh cilantro or chives. Serve immediately for a nutritious and satisfying breakfast.',
        },
        {
            title: 'Spinach and Feta Omelette',
            image: 'https://th.bing.com/th?id=OSK.42b1f8491183a1b7061f506d73168a73&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['3 eggs','1/4 cup milk',' Salt and pepper to taste',' 1 tablespoon olive oil','1 cup fresh spinach, chopped',' 1/4 cup feta cheese, crumbled','   2 tablespoons diced tomatoes',' 1 tablespoon chopped red onion','  Fresh herbs (parsley or dill) for garnish'],
            instructions: 'In a bowl, whisk together eggs, milk, salt, and pepper until well combined.Heat olive oil in a non-stick skillet over medium heat.Add chopped spinach, diced tomatoes, and red onion to the skillet. Cook until the spinach wilts.',
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