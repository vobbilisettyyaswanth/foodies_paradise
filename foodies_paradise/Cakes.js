document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic Chocolate Cake',
            image: 'https://th.bing.com/th/id/OIP.KlNiX7L803eR_j6WVNOTzQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['1 and 3/4 cups all-purpose flour', '3/4 cup unsweetened cocoa powder', '2 cups granulated sugar', '1 and 1/2 teaspoons baking powder', '1 and 1/2 teaspoons baking soda', '1 teaspoon salt', '2 large eggs', '1 cup whole milk', '1/2 cup vegetable oil', '2 teaspoons vanilla extract', '1 cup boiling water'],
            instructions: 'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.In a large bowl, sift together flour, cocoa powder, sugar, baking powder, baking soda, and salt.Add eggs, milk, oil, and vanilla extract. Beat on medium speed until well combined.Stir in boiling water, the batter will be thin.Pour the batter into the prepared pans and bake for 30-35 minutes or until a toothpick inserted comes out clean.Allow the cakes to cool before frosting.',
        },
        {
            title: 'Lemon Blueberry Pound Cake',
            image: 'https://th.bing.com/th/id/OIP.H4ve5V7Jo6EpIFucJ-ofNQHaFN?w=186&h=130&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['2 and 1/2 cups all-purpose flour', '2 teaspoons baking powder', '1/2 teaspoon salt', '1 cup unsalted butter, softened', '2 cups granulated sugar', '4 large eggs', '1 teaspoon vanilla extract', '1 cup sour cream', 'Zest of 2 lemons', '2 cups fresh blueberries'],
            instructions: 'Preheat the oven to 350°F (175°C) and grease a 10-inch bundt pan. In a bowl, whisk together flour, baking powder, and salt.In another bowl, cream together butter and sugar until light and fluffy. Add eggs one at a time, beating well after each addition. Stir in vanilla. Gradually add the dry ingredients to the wet ingredients, alternating with sour cream. Fold in lemon zest and blueberries. Pour the batter into the prepared pan and bake for 60-70 minutes or until a toothpick inserted comes out clean. Allow the cake to cool before removing from the pan.',
        },
        {
            title: 'Carrot Cake with Cream Cheese Frosting',
            image: 'https://th.bing.com/th/id/OIP.xX1kaCnNG3PAHxO5lEGCtQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['2 cups all-purpose flour', '2 teaspoons baking powder', '1 and 1/2 teaspoons baking soda', '1 teaspoon salt', '2 teaspoons ground cinnamon', '1 and 1/2 cups vegetable oil', '1 cup granulated sugar', '1 cup brown sugar, packed', '4 large eggs', '2 teaspoons vanilla extract', '3 cups grated carrots', '1 cup chopped nuts (optional)', 'Cream Cheese Frosting (8 oz cream cheese, 1/2 cup unsalted butter, 4 cups powdered sugar, 1 teaspoon vanilla extract)'],
            instructions: 'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.In a bowl, whisk together flour, baking powder, baking soda, salt, and cinnamon.In another bowl, whisk together oil, granulated sugar, brown sugar, eggs, and vanilla.Gradually add the dry ingredients to the wet ingredients, mixing until well combined.Fold in grated carrots and nuts. Divide the batter between the prepared pans and bake for 25-30 minutes or until a toothpick inserted comes out clean. Allow the cakes to cool before frosting with cream cheese frosting. Enjoy these delicious cake recipes!',
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