document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Soya Chunks Curry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWK5P3cAyJSsrIyOW8Y7LwYnubG5ZoSRQxyg&usqp=CAU',
            ingredients: ['1 cup soya chunks',
            '1 large onion, finely chopped',
            '2 tomatoes, pureed',
            '2 tablespoons oil',
            '1 teaspoon ginger-garlic paste',
            '1 teaspoon cumin seeds',
            '1 teaspoon turmeric powder',
            '1 teaspoon red chili powder',
            '1 teaspoon garam masala',
            'Salt to taste',
            'Fresh coriander leaves for garnish',],
            instructions: 'Boil soya chunks in hot water for 10 minutes, then drain and squeeze out excess water. Heat oil in a pan, add cumin seeds, and let them splutter. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute. Add tomato puree, turmeric powder, red chili powder, and salt. Cook until oil separates. Add boiled soya chunks, mix well, and cook for 5-7 minutes. Add garam masala and stir. Garnish with fresh coriander leaves and serve hot with rice or roti.',
        },
        {
            title: 'Soya Chunks Biryani',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLEpj_E_9jGwghWmKbkL2vhjb5eWf5-bzgg&usqp=CAU',
            ingredients: ['1 cup soya chunks',
            '1.5 cups basmati rice, soaked',
            '1 large onion, thinly sliced',
            '1 cup mixed vegetables (carrots, peas, beans)',
            '2 tomatoes, chopped',
            '2 tablespoons biryani masala',
            '1 teaspoon ginger-garlic paste',
            '1/2 cup yogurt',
            '2 tablespoons ghee',
            'Few mint leaves',
            'Salt to taste'],
            instructions: ['Boil soya chunks, drain, and squeeze out excess water.',
            'In a pan, heat ghee, add sliced onions, and fry until golden brown. Add ginger-garlic paste, tomatoes, and cook until tomatoes are soft.', 'Add biryani masala, mixed vegetables, and sauté for 5 minutes. Add yogurt, boiled soya chunks, and cook for another 5 minutes.',
            'In a separate pot, layer soaked rice and the soya chunks mixture. Sprinkle mint leaves and salt. Add water and cook until rice is done.',
            'Serve hot with raita.',]
        },
        {
            title: 'Soya Chunks Stir Fry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD13t2nupeACzzh7zEUm8UHIvYtfkXCtrm-w&usqp=CAU',
            ingredients: ['1 cup soya chunks',
            '1 bell pepper, sliced',
            '1 onion, sliced',
            '1 tablespoon soy sauce',
            '1 tablespoon tomato ketchup',
            '1 teaspoon ginger-garlic paste',
            '1 teaspoon red chili powder',
            '2 tablespoons oil',
            'Salt to taste',
            'Fresh coriander for garnish'],
            instructions: ['Boil soya chunks, drain, and squeeze out excess water.',
            'Heat oil in a pan, add ginger-garlic paste, sliced onions, and bell peppers. Sauté until vegetables are tender.',
            'Add boiled soya chunks, soy sauce, tomato ketchup, red chili powder, and salt. Stir-fry for 5-7 minutes.',
            'Garnish with fresh coriander and serve hot as a side dish or with noodles.'],
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