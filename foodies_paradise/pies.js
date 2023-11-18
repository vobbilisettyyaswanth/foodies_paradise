document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Classic apple pie',
            image: 'https://th.bing.com/th?id=OSK.5fd5f3c25c5034acfec5fbb271f62e16&w=194&h=242&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['For the Pie Crust:','2 1/2 cups all-purpose flour','1 cup unsalted butter', 'cold and cubed','1/4 cup granulated sugar','1/2 teaspoon salt','1/4 to 1/2 cup ice water'], 
            instructions: 'in a food processor, pulse together flour, sugar, and salt. Add cold, cubed butter and pulse until the mixture resembles coarse crumbs.Gradually add ice water, one tablespoon at a time, until the dough comes together.Divide the dough into two disks, wrap in plastic wrap, and refrigerate for at least 1 houApple Filling:Preheat the oven to 425°F In a large bowl, toss together sliced apples, sugars, lemon juice, cinnamon, nutmeg, and flour Roll out one disk of pie crust and line a 9-inch pie dish. Add the apple filling and dot with butter. Roll out the second disk of pie crust and place it over the filling. Seal and crimp the edges, and cut a few slits in the top for vent Bake for 45-50 minutes or until the crust is golden brown and the filling is bubbly.Allow the pie to cool before serving',
        },
        {
            title: 'Chocolate Silk Pie',
            image: 'https://th.bing.com/th?id=OSK.b6fff62f814128d0d2ab60293079efd0&w=194&h=194&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['2 ripe bananas', '2 cups chocolate ice cream', '1 cup milk', '2 tablespoons chocolate syrup', 'Sliced bananas for garnish (optional)'],
            instructions: 'Process;Chocolate Crust:Combine chocolate cookie crumbs and melted butter. Press the mixture into a 9-inch pie dish.Bake the crust at 350°F (175°C) for 8-10 minutes. Allow it to cool.Filling:In a large bowl, beat together softened cream cheese and powdered sugar until smooth.Add melted and cooled chocolate, and vanilla extract. Mix well.Fold in the whipped cream until the filling is smooth and well combined.Pour the filling into the cooled chocolate crust.Refrigerate for at least 4 hours or until set.Garnish with additional whipped cream and chocolate shavings before serving',
        },
        {
            title: 'Chicken Pot Pie',
            image: 'https://th.bing.com/th?id=OSK.7806211c565a7ef88fb1522e78b159af&w=194&h=109&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1',
            ingredients: ['For the Pie Crust:','2 1/2 cups all-purpose flour',' 1 cup unsalted butter, cold and cubed','1/2 teaspoon salt','1/2 cup ice waterFor the Filling:1/3 cup unsalted butter  1/3 cup all-purpose flou  1/2 teaspoon salt  1/4 teaspoon black pepper  1/4 teaspoon dried thyme   1 3/4 cups chicken broth   2/3 cup milk   2 cups cooked chicken, diced   1 cup frozen peas  1 cup frozen carrots'],
            instructions: 'In a food processor, pulse together flour and salt. Add cold, cubed butter and pulse until the mixture resembles coarse crumbs Gradually add ice water, one tablespoon at a time, until the dough comes together. Divide the dough into two disks, wrap in plastic wrap, and refrigerate for at least 1 hour.',
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