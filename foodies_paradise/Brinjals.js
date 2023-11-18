document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Baingan Bhaja',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jgPkxM8sFox30mVsFmLfspFlpIpApUrjsw&usqp=CAU',
            ingredients: ['2 medium-sized brinjals, thinly sliced',
            '1 teaspoon turmeric powder',
            '1 teaspoon red chili powder',
            'Salt to taste',
            'Mustard oil for frying',],
            instructions: ['Marinate brinjal slices with turmeric powder, red chili powder, and salt.',
            'Heat mustard oil in a pan, and shallow fry the brinjal slices until golden brown on both sides.',
            'Drain excess oil on paper towels and serve hot as a side dish.',]
        },
        {
            title: 'Baingan Bhurta',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAQIKNcOg0g5YFIpQN9DkRjdXzVqcgm4EEg&usqp=CAU',
            ingredients: ['2 large brinjals',
            '1 onion, finely chopped',
            '2 tomatoes, chopped',
            '1 tablespoon ginger-garlic paste',
            '1 teaspoon cumin seeds',
            '1 teaspoon coriander powder',
            '1/2 teaspoon red chili powder',
            'Salt to taste',
            'Fresh coriander leaves for garnish'],
            instructions: ['Roast brinjals until the skin is charred. Peel and mash the pulp.',
            'Heat oil in a pan, add cumin seeds, chopped onions, and sauté until golden brown.',
            'Add ginger-garlic paste, chopped tomatoes, coriander powder, red chili powder, and salt. Cook until the tomatoes are soft.',
            'Add mashed brinjal, mix well, and cook for a few more minutes.',
            'Garnish with fresh coriander leaves and serve with roti or rice.',]
        },
        {
            title: 'Baingan Raita',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYTp_AjgJx8fkciXR34-rc6hSsTbqHfLmaA&usqp=CAU',
            ingredients: ['1 small brinjal, roasted and mashed',
            '1 cup yogurt',
            '1/2 teaspoon cumin powder',
            '1/2 teaspoon red chili powder',
            'Salt to taste',
            'Fresh mint leaves for garnish'],
            instructions: ['Roast the brinjal until the skin is charred, peel, and mash the pulp.',
            'Whisk yogurt in a bowl, add mashed brinjal, cumin powder, red chili powder, and salt. Mix well.',
            'Garnish with fresh mint leaves and refrigerate before serving as a refreshing dip with flatbreads or as a side dish.',]
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