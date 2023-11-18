document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Mutton ghee roast',
            image: 'https://th.bing.com/th/id/OIP.72_61SCzCTn9qeyU6Dj7bgHaGM?w=213&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Mutton pieces (500g)', 'Ghee (4 tablespoons)', 'Dry red chilies (8-10, depending on spice preference)', 'Cumin seeds (1 teaspoon)', 'Coriander seeds (1 tablespoon)', 'Black peppercorns (1 teaspoon)', 'Fennel seeds (1 teaspoon)', 'Ginger-garlic paste (1 tablespoon)', 'Tamarind paste (1 tablespoon)', 'Turmeric powder (1/2 teaspoon)', 'Curry leaves (a handful)', 'Salt to taste'],
            instructions: 'Dry roast dry red chilies, cumin seeds, coriander seeds, black peppercorns, and fennel seeds until fragrant. Grind them into a fine powder. Marinate the mutton with the ground spice powder, ginger-garlic paste, tamarind paste, turmeric powder, and salt. Let it marinate for at least 30 minutes. Heat ghee in a pan, add curry leaves, and sauté until they crackle.Add the marinated mutton and cook until the meat is tender and the ghee separates.Garnish with fresh coriander before serving.Your flavorful Mutton Ghee Roast is ready to be enjoyed with rice or bread!',
        },
        {
            title: 'Mutton curry',
            image: 'https://th.bing.com/th/id/OIP.FudDEn8HyWrHqro6CkimiAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['500g mutton, cleaned and cut into pieces', '2 large onions, finely chopped', '2 tomatoes, chopped', '1/4 cup oil or ghee', '1 tablespoon ginger-garlic paste', '1/2 cup yogurt', '1 teaspoon turmeric powder','2 teaspoons red chili powder (adjust to taste)', '1 teaspoon coriander powder', '1 teaspoon cumin powder', '1 teaspoon garam masala', 'Salt to taste', 'Fresh coriander leaves for garnish', ],
            instructions: 'Heat oil or ghee in a large pot. Add chopped onions and sauté until golden brown.Add ginger-garlic paste and sauté for a minute until the raw smell disappears.Add mutton pieces and cook until they are browned on all sides. Stir in chopped tomatoes and cook until they are soft and the oil starts to separate.Add turmeric powder, red chili powder, coriander powder, cumin powder, and salt. Mix well.Beat the yogurt and add it to the pot. Cook until the oil separates again. Add enough water to cover the mutton and bring it to a boil. Reduce the heat, cover, and simmer until the mutton is tender (this may take 1-1.5 hours depending on the meat).Sprinkle garam masala and cook for an additional 5-10 minutes. Garnish with fresh coriander leaves. Serve the delicious mutton curry with rice or bread of your choice. Adjust the spice levels according to your preference.',
        },
        {
            title: 'Achari ghost',
            image: 'https://th.bing.com/th/id/OIP.gfpHtZ0lxbeOo4mcffAICQHaFj?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['500g mutton, cleaned and cut into pieces',
            '3 tablespoons mustard oil',
            '2 onions, finely sliced',
            '2 tomatoes, chopped',
            '1 tablespoon ginger-garlic paste',
            '2 tablespoons achari masala (pickling spice blend)', '1 teaspoon turmeric powder',
            '1 teaspoon red chili powder (adjust to taste)',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
            'Salt to taste',
            'Fresh coriander leaves for garnish',
            '1 tablespoon fennel seeds',
            '1 tablespoon mustard seeds',
            '1 tablespoon fenugreek seeds',
            '1 tablespoon cumin seeds',
            '1 tablespoon nigella seeds (kalonji)',
            '5-6 dry red chilies'],
            instructions: 'Dry roast the ingredients for achari masala until fragrant. Grind them into a coarse powder. Heat mustard oil in a pan. Add sliced onions and sauté until golden brown. Add ginger-garlic paste and cook for a minute until the raw smell disappears. Add mutton pieces and brown them on all sides. Stir in chopped tomatoes and cook until they are soft and the oil separates. Add turmeric powder, red chili powder, cumin powder, coriander powder, and achari masala. Mix well.Cook the mutton with the masala for a few minutes until the oil starts to separate.Add enough water to cover the mutton, bring it to a boil, then reduce the heat, cover, and simmer until the mutton is tender.Adjust salt and spice levels according to your taste.Garnish with fresh coriander leaves. Serve Achari Ghost with naan or rice for a flavorful and tangy dish!',
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