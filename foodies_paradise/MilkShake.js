document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic Vanilla Milkshake',
            image: 'https://th.bing.com/th/id/OIP.xg249xbSsDfuhe6mPfoGRAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['2 cups vanilla ice cream', '1 cup milk', '1 teaspoon vanilla extract', 'Whipped cream for topping (optional)', 'Sprinkles or chocolate shavings for garnish (optional)',],
            instructions: 'In a blender, combine vanilla ice cream, milk, and vanilla extract. Blend until smooth and creamy. Pour into a glass, top with whipped cream, and garnish with sprinkles or chocolate shavings if desired.',
        },
        {
            title: 'Chocolate Banana Milkshake',
            image: 'https://th.bing.com/th/id/OIP.bBMwzUskKfAmQHvZYX6zHAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['2 ripe bananas', '2 cups chocolate ice cream', '1 cup milk', '2 tablespoons chocolate syrup', 'Sliced bananas for garnish (optional)'],
            instructions: 'In a blender, combine ripe bananas, chocolate ice cream, milk, and chocolate syrup.Blend until smooth.Pour into a glass, and garnish with sliced bananas if desired.',
        },
        {
            title: 'Strawberry Oatmeal Milkshake',
            image: 'https://th.bing.com/th/id/OIP.RLzlRyGBIE08aZ4-0bTNIAHaH3?w=186&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['1 cup fresh or frozen strawberries', '1/2 cup rolled oats', '1 cup milk', '2 tablespoons honey or maple syrup', '1/2 teaspoon vanilla extract', 'Ice cubes (optional)'],
            instructions: 'In a blender, combine strawberries, rolled oats, milk, honey or maple syrup, and vanilla extract. Blend until smooth and creamy. Add ice cubes if a colder shake is desired. Pour into a glass and enjoy!',
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