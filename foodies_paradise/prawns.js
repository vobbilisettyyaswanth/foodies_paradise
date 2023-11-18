document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Garlic Butter Prawns',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW66B9-oBMd_5NIe3PB1CTnny7rSHKBrxHcA&usqp=CAU',
            ingredients: ['1 pound large prawns, peeled and deveined',
            '4 tablespoons unsalted butter',
            '4 cloves garlic, minced',
            '1 tablespoon lemon juice',
            '1/4 cup fresh parsley, chopped',
            'Salt and black pepper to taste',
            'Red pepper flakes (optional)',],
            instructions: ['In a large pan, melt butter over medium heat.',
            'Add minced garlic to the melted butter and sauté for 1-2 minutes until fragrant.',
            'Add prawns to the pan and cook for 2-3 minutes on each side or until they turn pink and opaque.',
            'Sprinkle lemon juice over the prawns and season with salt, black pepper, and red pepper flakes if desired.',
            'Toss the prawns in the garlic butter sauce until well coated.',
            'Garnish with chopped fresh parsley before serving.',]
        },
        {
            title: ' Prawn and Vegetable Stir-Fry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaaFNiqvr9tmKc5OtdrwbH80cSKoxibUoBg&usqp=CAU',
            ingredients: ['1 pound large prawns, peeled and deveined',
            '2 cups broccoli florets',
            '1 bell pepper, thinly sliced',
            '1 carrot, julienned',
            '3 tablespoons soy sauce',
            '2 tablespoons oyster sauce',
            '1 tablespoon sesame oil',
            '2 tablespoons vegetable oil',
            '3 cloves garlic, minced',
            '1 teaspoon fresh ginger, grated',
            'Cooked rice for serving'],
            instructions: ['In a bowl, combine soy sauce, oyster sauce, and sesame oil to create the stir-fry sauce.',
            'Heat vegetable oil in a wok or large pan over high heat.',
            'Add minced garlic and grated ginger, stir-fry for 30 seconds.',
            'Add prawns to the wok and cook for 2-3 minutes until they start to turn pink.',
            'Add broccoli, bell pepper, and julienned carrot to the wok. Stir-fry for an additional 3-4 minutes or until the vegetables are crisp-tender.',
            'Pour the stir-fry sauce over the prawns and vegetables. Toss to coat evenly.',
            'Serve the prawn and vegetable stir-fry over cooked rice.',]
        },
        {
            title: 'Coconut Curry Prawns',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfVRouy0BCmt9LjUjSJgoG1Z45bkaRxMcgA&usqp=CAU',
            ingredients: ['1 pound large prawns, peeled and deveined',
            '1 can (14 oz) coconut milk',
            '2 tablespoons red curry paste',
            '1 tablespoon vegetable oil',
            '1 onion, thinly sliced',
            '1 red bell pepper, sliced',
            '1 zucchini, sliced',
            '1 tablespoon fish sauce',
            '1 tablespoon brown sugar',
            'Fresh cilantro for garnish',
            'Cooked rice for serving'],
            instructions: ['In a pan, heat vegetable oil over medium heat. Add sliced onion and sauté until softened.',
            'Stir in red curry paste and cook for 1-2 minutes.',
            'Add coconut milk to the pan and bring to a simmer.',
            'Add prawns, red bell pepper, zucchini, fish sauce, and brown sugar. Cook for 5-7 minutes or until prawns are cooked through.',
            'Serve the coconut curry prawns over cooked rice, garnished with fresh cilantro.',
            'Enjoy these flavorful prawn recipes!',]
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