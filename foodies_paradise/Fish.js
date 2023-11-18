document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'South Indian Spicy Fish Curry',
            image: 'https://th.bing.com/th/id/OIP.9pnjdTnceErhl0nXNqfqVQHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['500g fish fillets (any firm white fish)', '1 cup coconut milk', '2 tablespoons oil', '1 onion, finely chopped', '2 tomatoes, chopped', '1 tablespoon ginger-garlic paste', '1 teaspoon mustard seeds', '1 teaspoon fenugreek seeds', '1 tablespoon red chili powder', '1 teaspoon turmeric powde', 'Curry leaves', 'Salt to taste',],
            instructions: 'Heat oil in a pan, add mustard seeds and fenugreek seeds. Let them splutter. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and cook until the raw smell disappears. Add tomatoes, red chili powder, turmeric powder, and salt. Cook until tomatoes are soft. Pour in coconut milk and bring the curry to a simmer. Add fish fillets and cook until fish is done. Garnish with curry leaves and serve with rice.',
        },
        {
            title: 'Thai Green Fish Curry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSW6Bt7f1LcJNxtqihk484b0aI89Z0z0yFkA&usqp=CAU',
            ingredients: ['500g white fish, cut into chunks', '1 can (400ml) coconut milk', '2 tablespoons green curry paste', '1 tablespoon fish sauce', '1 tablespoon sugar', '1 cup assorted vegetables (bell peppers, bamboo shoots, and Thai eggplant)', 'Fresh basil leaves', 'Lime wedges'],
            instructions: 'In a pan, heat half of the coconut milk and stir in green curry paste. Add fish sauce and sugar, mix well. Add the remaining coconut milk and bring to a gentle boil. Add fish chunks and vegetables, simmer until the fish is cooked and the vegetables are tender. Stir in fresh basil leaves and remove from heat. Serve hot with rice, garnished with lime wedges.',
        },
        {
            title: 'Goan Fish Curry',
            image: 'https://th.bing.com/th/id/OIP.hGCPOokLnktd66DgAvotDQHaGt?w=185&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['500g fish (pomfret or kingfish)', '1 cup grated coconut', '1 onion, finely chopped', '2 tomatoes, chopped', '1 tablespoon coriander seeds', '1 teaspoon cumin seeds', '1 teaspoon turmeric powder', '1 tablespoon tamarind pulp', '2-3 dried red chilies', '4-5 garlic cloves', 'Salt to taste'],
            instructions: 'Grind together grated coconut, coriander seeds, cumin seeds, red chilies, and garlic to make a smooth paste. Heat oil in a pan, sauté chopped onions until golden brown. Add tomatoes and cook until they are soft. Add the ground paste, turmeric powder, and tamarind pulp. Cook for a few minutes. Add fish pieces and cook until they are done. Adjust the seasoning with salt.Serve hot with rice. Enjoy your fish curry!',
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