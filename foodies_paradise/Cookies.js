document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic Chocolate Chip Cookies',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJa5L6UNBsLCAU8wgJBVur07mDkgDNhd7Sw&usqp=CAU',
            ingredients: ['1 cup (2 sticks) unsalted butter, softened',
            '3/4 cup granulated sugar',
            '3/4 cup packed brown sugar',
            '2 large eggs',
            '1 teaspoon vanilla extract',
            '2 1/4 cups all-purpose flour',
            '1 teaspoon baking soda',
            '1/2 teaspoon salt',
            '2 cups chocolate chips',],
            instructions: ['Preheat the oven to 375°F (190°C) and line baking sheets with parchment paper.',
            'In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.',
            'Beat in the eggs one at a time, then stir in the vanilla extract.',
            'In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add this dry mixture to the wet ingredients, mixing until just combined.',
            'Fold in the chocolate chips.',
            'Drop rounded tablespoons of dough onto the prepared baking sheets and bake for 9-11 minutes or until the edges are golden brown. Allow cookies to cool on the sheets for a few minutes before transferring to a wire rack.',]
        },
        {
            title: 'Oatmeal Raisin Cookies',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqn3PZY-L6kjvSUXnnPxdY9ErDApbooGF3w&usqp=CAU',
            ingredients: ['1 cup (2 sticks) unsalted butter, softened',
            '1 cup granulated sugar',
            '1 cup packed brown sugar',
            '2 large eggs',
            '1 teaspoon vanilla extract',
            '1 1/2 cups all-purpose flour',
            '1 teaspoon baking soda',
            '1/2 teaspoon ground cinnamon',
            '1/2 teaspoon salt',
            '3 cups old-fashioned oats',
            '1 cup raisins'],
            instructions: ['Preheat the oven to 350°F (175°C) and line baking sheets with parchment paper.',
            'In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.',
            'Beat in the eggs one at a time, then stir in the vanilla extract.',
            'In a separate bowl, whisk together the flour, baking soda, cinnamon, and salt. Gradually add this dry mixture to the wet ingredients, mixing until just combined.',
            'Stir in the oats and raisins.',
            'Drop rounded tablespoons of dough onto the prepared baking sheets and bake for 10-12 minutes or until the edges are lightly golden. Allow cookies to cool on the sheets for a few minutes before transferring to a wire rack.',]
        },
        {
            title: 'Peanut Butter Blossoms',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILeWd_lNvIkRUeQCqb-8t6mTx9KVn_0-Suw&usqp=CAU',
            ingredients: ['1/2 cup (1 stick) unsalted butter, softened',
            '3/4 cup creamy peanut butter',
            '1/3 cup granulated sugar',
            '1/3 cup packed brown sugar',
            '1 large egg',
            '2 tablespoons milk',
            '1 teaspoon vanilla extract',
            '1 1/2 cups all-purpose flour',
            '1 teaspoon baking soda',
            '1/2 teaspoon salt',
            '1/3 cup granulated sugar for rolling',
            'Hersheys Kisses (unwrapped)'],
            instructions: ['Preheat the oven to 375°F (190°C) and line baking sheets with parchment paper.',
            'In a large bowl, cream together the butter, peanut butter, granulated sugar, and brown sugar until smooth.',
            'Add the egg, milk, and vanilla extract, and beat until well combined.',
            'In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add this dry mixture to the wet ingredients, mixing until just combined.',
            'Shape the dough into 1-inch balls, roll in granulated sugar, and place on the prepared baking sheets.',
            'Bake for 8-10 minutes. As soon as the cookies come out of the oven, press a Hersheys Kiss into the center of each cookie.',
            'Allow cookies to cool on the sheets for a few minutes before transferring to a wire rack.',]
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