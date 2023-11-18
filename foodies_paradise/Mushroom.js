document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: ' Mushroom Risotto',
            image: 'https://th.bing.com/th/id/OIP.nBwXkkl_MZdqAdk_rqCbDgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['1 cup Arborio rice', '200g mushrooms, sliced', '1 onion, finely chopped', '2 cloves garlic, minced', '4 cups vegetable broth, heated', '1/2 cup dry white wine', '1/2 cup grated Parmesan cheese', '2 tablespoons butter', 'Fresh parsley, chopped', 'Salt and pepper to taste'],
            instructions: 'In a pan, sauté onions and garlic in butter until softened. Add mushrooms and cook until they release their moisture. Stir in Arborio rice and cook until translucent. Pour in the white wine and cook until it is mostly evaporated. Gradually add hot vegetable broth, one ladle at a time, stirring until absorbed. Continue until the rice is creamy and cooked. Stir in Parmesan cheese, salt, and pepper. Garnish with fresh parsley.',
        },
        {
            title: 'Garlic Butter Mushrooms',
            image: 'https://th.bing.com/th/id/OIP.zKH5MiUA_bWjIMqZFXNZkQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['500g mushrooms, halved', '4 tablespoons butter', '4 cloves garlic, minced', '2 tablespoons fresh parsley, chopped', 'Salt and pepper to taste', 'Lemon wedges for serving'],
            instructions: 'In a skillet, melt butter over medium heat.Add minced garlic and sauté until fragrant.Add mushrooms, salt, and pepper. Cook until mushrooms are golden brown.Stir in fresh parsley and cook for an additional minute.Serve with a squeeze of lemon on top.',
        },
        {
            title: 'Creamy Mushroom Chicken',
            image: 'https://th.bing.com/th/id/OIP.jms9I0hyoTJDJmGSauyHnQHaE8?w=186&h=124&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['4 boneless, skinless chicken breasts', '200g mushrooms, sliced', '1 onion, chopped', '2 cloves garlic, minced','1 cup chicken broth', '1/2 cup heavy cream', '2 tablespoons olive oil', '1 teaspoon thyme', 'Salt and pepper to taste'],
            instructions: 'Season chicken breasts with salt and pepper.In a pan, heat olive oil and cook chicken until browned on both sides. Remove and set aside.In the same pan, sauté onions and garlic until softened.Add mushrooms and cook until they release their moisture.Pour in chicken broth, heavy cream, and thyme. Bring to a simmer.Add the browned chicken back to the pan and cook until chicken is cooked through.Adjust seasoning and serve over rice or mashed potatoes.Enjoy these mushroom recipes packed with flavor and versatility!',
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