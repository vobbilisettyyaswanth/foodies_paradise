document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Chicken 65',
            image: 'https://th.bing.com/th/id/OIP.rjkPEZYVS4e3TM6OA5V_uAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Boneless chicken pieces (500g)', 'Ginger-garlic paste (1 tablespoon)', 'Red chili powder (1 teaspoon', 'Turmeric powder (1/2 teaspoon)', 'Garam masala (1/2 teaspoon)', 'Curry leaves (a handful)', 'Corn flour (2 tablespoons)', 'All-purpose flour (2 tablespoons)', 'Lemon juice (1 tablespoon)', 'Salt to taste', 'Oil for frying', 'Green chilies and fresh coriander for garnish'],
            instructions: 'Marinate the chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt. Allow it to marinate for at least 30 minutes. In a separate bowl, mix corn flour and all-purpose flour. Coat the marinated chicken pieces with this flour mixture. Heat oil in a pan for frying. Fry the coated chicken pieces until they are golden brown and cooked through. Drain excess oil on paper towels. In another pan, heat a little oil and add curry leaves and green chilies. Sauté for a minute.Add the fried chicken to the pan and toss it with the curry leaves and green chilies.Finish by squeezing lemon juice over the chicken and garnish with fresh coriander.Your Chicken 65 is ready to be served! Enjoy this spicy and delicious dish.',
        },
        {
            title: 'Chicken butter masala',
            image: 'https://th.bing.com/th/id/OIP.WXB6NKQDwc3ivDHrCNTPKAHaGF?w=265&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Boneless chicken pieces (500g)', 'Butter (2 tablespoons)', 'Oil (2 tablespoons)', 'Onion (1, finely chopped)', 'Tomato (2, pureed)', 'Ginger-garlic paste (1 tablespoon)', 'Red chili powder (1 teaspoon)', 'Turmeric powder (1/2 teaspoon)', 'Garam masala (1 teaspoon)', 'Cashew nuts (10-12, soaked in water)', 'Fresh cream (1/2 cup)', ],
            instructions: 'Marinate the chicken with red chili powder, turmeric powder, and salt. Let it marinate for at least 30 minutes. Heat oil and butter in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for another minute until the raw smell disappears. Add the pureed tomatoes and cook until the oil separates from the masala. Blend the soaked cashew nuts into a smooth paste and add it to the pan. Cook for a few minutes. Add the marinated chicken to the masala and cook until the chicken is done. Sprinkle garam masala and kasuri methi over the chicken. Stir well. Pour in fresh cream and mix until the curry is creamy and well combined. Adjust salt and spice levels according to taste. Garnish with fresh coriander before serving. Your Chicken Butter Masala is ready to be enjoyed with naan or rice!',
        },
        {
            title: 'Cashew Chicken',
            image: 'https://th.bing.com/th/id/OIP.FLu1sSYN9UoQBM-_CtY7KAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Boneless chicken pieces (500g)', 'Cashew nuts (1/2 cup)', 'Soy sauce (2 tablespoons)', 'Hoisin sauce (2 tablespoons)', 'Ginger (1 tablespoon, minced)', 'Garlic (1 tablespoon, minced)', 'Garlic (1 tablespoon, minced)', 'Sesame oil (1 tablespoon)', 'Vegetable oil (2 tablespoons)', 'Bell peppers (2, sliced)', 'Salt and pepper to taste', ],
            instructions: 'Marinate the chicken with soy sauce, hoisin sauce, minced ginger, minced garlic, and cornstarch. Let it marinate for at least 30 minutes. Heat vegetable oil and sesame oil in a pan. Add the marinated chicken and cook until it is browned and cooked through. Add sliced bell peppers and cashew nuts to the pan. Stir-fry for a few minutes until the peppers are tender-crisp. Season with salt and pepper to taste. Garnish with sliced green onions. Your Cashew Chicken is ready to be served! Enjoy it with rice or noodles.',
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