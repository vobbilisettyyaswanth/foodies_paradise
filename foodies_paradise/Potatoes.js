document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic Mashed Potatoes',
            image: 'https://th.bing.com/th/id/OIP.DntUUScHFiwnlbZz2SlH6AHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['4 large potatoes, peeled and diced', '1/2 cup butter', '1/2 cup milk', 'Salt and pepper to taste', 'Chopped chives for garnish (optional)', ],
            instructions: 'Boil the diced potatoes in salted water until fork-tender. Drain the potatoes and mash them.In a saucepan, warm the milk and melt the butter.Pour the milk-butter mixture into the mashed potatoes and whip until smooth. Season with salt and pepper to taste.Garnish with chopped chives if desired.',
        },
        {
            title: 'Roasted Garlic Parmesan Potatoes',
            image: 'https://th.bing.com/th/id/OIP.yTxdhvuNHzknc0m1dyDWHgHaHC?w=186&h=177&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['1.5 lbs baby potatoes, halved', '3 tablespoons olive oil', '4 cloves garlic, minced', '1/2 cup grated Parmesan cheese', '1 teaspoon dried rosemary', 'Salt and pepper to taste', 'Chopped fresh parsley for garnish'],
            instructions: 'Preheat the oven to 400°F (200°C).In a bowl, toss the halved potatoes with olive oil, minced garlic, Parmesan cheese, and rosemary.Spread the potatoes on a baking sheet in a single layer.Roast for 25-30 minutes or until golden brown and crispy.Season with salt and pepper, and garnish with chopped parsley before serving.',
        },
        {
            title: 'Potato and Leek Soup',
            image: 'https://th.bing.com/th/id/OIP.y6m6xrUhph7mYdgfbqIaowHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['4 large potatoes, peeled and diced', '2 leeks, cleaned and sliced', '1 onion, chopped', '2 cloves garlic, minced', '4 cups vegetable or chicken broth', '1 cup milk', '2 tablespoons butter', 'Salt and pepper to taste', 'Chopped chives or green onions for garnish'],
            instructions: 'In a pot, sauté onions and garlic in butter until softened.Add leeks and cook until they are tender.Add diced potatoes and broth. Bring to a boil, then simmer until potatoes are cooked.Use an immersion blender to puree the soup until smooth.Stir in milk and season with salt and pepper.Garnish with chopped chives or green onions before serving.Enjoy these potato recipes that cover the comfort of mashed potatoes, the savory delight of roasted potatoes, and the warmth of a potato and leek soup!',
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