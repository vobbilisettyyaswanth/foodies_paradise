document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Paneer cashew curry',
            image: 'https://th.bing.com/th/id/OIP.mug7SKJztQKJe0f1tJ_jNQHaIM?w=166&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['250g paneer, cubed',
            '2 tablespoons butter',
            '1 onion, finely chopped',
            '2 tomatoes, pureed',
            '1 tablespoon ginger-garlic paste',
            '1/2 cup cashews, soaked and blended into a paste',
            '1 teaspoon red chili powder',
            '1 teaspoon turmeric powder',
            '1 teaspoon garam masala',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
           'Salt to taste',
            '1/2 cup cream',
            'Fresh coriander leaves for garnish'],
            instructions: 'Grind soaked cashews into a smooth paste.Heat oil or ghee in a pan. Add chopped onions and sauté until golden brown.Add ginger-garlic paste and sauté for a minute until the raw smell disappears.Add tomato puree and cook until the oil separates.Add red chili powder, turmeric powder, garam masala, cumin powder, coriander powder, and salt. Mix well.Add cubed paneer and cashew paste. Cook for a few minutes.Adjust the consistency with water if needed and simmer until the curry reaches the desired thickness.Garnish with fresh coriander leaves.Serve the Paneer Cashew Curry with naan or rice for a rich and flavorful meal! Adjust the spice levels according to your preference.',
        },
        {
            title: 'Paneer Butter masala',
            image: 'https://th.bing.com/th/id/OIP._rUusY-CQf6QwuhddG7OWAHaGN?w=186&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['250g paneer, cubed',
            '2 tablespoons butter',
            '1 onion, finely chopped',
            '2 tomatoes, pureed',
            '1 tablespoon ginger-garlic paste',
            '1/2 cup cashews, soaked and blended into a paste',
            '1 teaspoon red chili powder',
            '1 teaspoon turmeric powder',
            '1 teaspoon garam masala',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
           'Salt to taste',
            '1/2 cup cream',
            'Fresh coriander leaves for garnish'],
            instructions: 'Heat butter in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute until the raw smell disappears. Add tomato puree and cook until the oil separates.Add cashew paste, red chili powder, turmeric powder, garam masala, cumin powder, coriander powder, and salt. Mix well.Add cubed paneer and cook for a few minutes.Pour in cream and simmer until the curry reaches the desired consistency.Garnish with fresh coriander leaves.Serve the Paneer Butter Masala with naan or rice for a creamy and delicious dish! Adjust the spice levels according to your preference.',
        },
        {
            title: 'Paneer curry',
            image: 'https://th.bing.com/th/id/OIP.Ys0syuhKuW20W_0d3ZIQ1QHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['250g paneer, cubed',
            '1 onion, finely chopped',
            '2 tomatoes, chopped',
            '1 tablespoon oil or ghee',
            '1 tablespoon ginger-garlic paste',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
            '1/2 teaspoon turmeric powder',
            '1/2 teaspoon red chili powder',
            'Salt to taste',
            'Fresh coriander leaves for garnish',],
            instructions: 'Heat oil or ghee in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute until the raw smell disappears.Add chopped tomatoes and cook until they are soft. Add cumin powder, coriander powder, turmeric powder, red chili powder, and salt. Mix well.Add cubed paneer and stir gently to coat the paneer with the masala.Simmer for a few minutes until the paneer is heated through. Garnish with fresh coriander leaves.Serve the Paneer Curry with rice or bread for a quick and delicious meal! Adjust the spice levels according to your preference.',
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