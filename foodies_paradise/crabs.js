document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Crab Cakes',
            image: 'https://th.bing.com/th?id=OSK.c4cc5407b315ae953de65c26c8599166&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['1 pound lump crabmeat, picked over for shells',
            '1/2 cup breadcrumbs',
            '1/4 cup mayonnaise',
            '1 tablespoon Dijon mustard',
            '1 tablespoon Worcestershire sauce',
            '1 teaspoon Old Bay seasoning',
            '1 egg, beaten',
            'Salt and pepper to taste',
            '2 tablespoons unsalted butter',
            'Lemon wedges for serving',],
            instructions: ['In a bowl, combine crabmeat, breadcrumbs, mayonnaise, Dijon mustard, Worcestershire sauce, Old Bay seasoning, beaten egg, salt, and pepper.',
            'Form the mixture into crab cakes.',
            'Heat butter in a skillet over medium heat.',
            'Cook crab cakes for 4-5 minutes per side or until golden brown and heated through.',
            'Serve with lemon wedges.',]
        },
        {
            title: ' Garlic Butter Crab Legs',
            image: 'https://th.bing.com/th?id=OSK.aabe755e8ebc6c3f6750589c394865ed&w=194&h=291&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['1 pound large prawns, peeled and deveined', 
            '1/2 cup unsalted butter',
            '4 cloves garlic, minced',
            '1 tablespoon lemon juice',
            '1 teaspoon Old Bay seasoning',
            'Chopped fresh parsley for garnish'],
            instructions: ['Preheat the oven to 375°F (190°C).',
            'Place crab legs on a baking sheet.',
            'In a small saucepan, melt butter over medium heat. Add minced garlic, lemon juice, and Old Bay seasoning.',
            'Pour the garlic butter mixture over the crab legs.',
            'Bake in the preheated oven for 15-20 minutes or until the crab legs are heated through.',
            'Garnish with chopped parsley before serving.',]
        },
        {
            title: 'Crab Stuffed Mushrooms',
            image: 'https://th.bing.com/th?id=OSK.b71e5adeea94e84a0631317d3283a7e6&w=194&h=291&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['1 pound lump crabmeat, picked over for shells',
            '24 large mushrooms, cleaned and stems removed',
            '1/2 cup cream cheese, softened',
            '1/4 cup mayonnaise',
            '1/4 cup grated Parmesan cheese',
            '2 green onions, finely chopped',
            '1 teaspoon Worcestershire sauce',
            '1/2 teaspoon garlic powder',
            'Salt and black pepper to taste',
            'Chopped fresh parsley for garnish'],
            instructions: ['Preheat the oven to 375°F (190°C).',
            'In a bowl, combine lump crabmeat, cream cheese, mayonnaise, Parmesan cheese, green onions, Worcestershire sauce, garlic powder, salt, and black pepper.',
            'Stuff each mushroom cap with the crab mixture.',
            'Place the stuffed mushrooms on a baking sheet and bake for 15-20 minutes or until the tops are golden brown.',
            'Garnish with chopped fresh parsley and serve hot.',
            'Enjoy these tasty crab recipes!',]
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