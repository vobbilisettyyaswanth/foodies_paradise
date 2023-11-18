document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Stuffed Bell Peppers',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJ-BoGB-MUHIFxCwT7Wi65cYESGAAJ-K6pg&usqp=CAU',
            ingredients: ['4 large bell peppers, halved and seeds removed',
            '1 cup cooked quinoa or rice',
            '1 cup black beans, drained and rinsed',
            '1 cup corn kernels',
            '1 cup diced tomatoes',
            '1 cup shredded cheese (cheddar or your choice)',
            '1 teaspoon cumin powder',
            '1 teaspoon chili powder',
            'Salt and pepper to taste',
            'Fresh cilantro for garnish',],
            instructions:['Preheat the oven to 375°F (190°C).',
            'In a bowl, mix cooked quinoa or rice, black beans, corn, tomatoes, half of the shredded cheese, cumin powder, chili powder, salt, and pepper.',
            'Stuff each bell pepper half with the mixture and place them in a baking dish.',
            'Top with the remaining cheese and bake for 25-30 minutes or until the peppers are tender.',
            'Garnish with fresh cilantro before serving.',]
        },
        {
            title: 'Grilled Bell Pepper Salad',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2XhxqqPf7Mok4zLgiO9BeSTY1S__PYAfJw&usqp=CAU',
            ingredients: ['3 bell peppers (assorted colors), sliced',
            '1 red onion, thinly sliced',
            '1 cucumber, diced',
            '1 cup cherry tomatoes, halved',
            '1/4 cup feta cheese, crumbled',
            '2 tablespoons olive oil',
            '1 tablespoon balsamic vinegar',
            'Salt and pepper to taste',
            'Fresh basil leaves for garnish'],
            instructions: ['Preheat the grill or grill pan over medium-high heat.',
            'Grill the bell pepper slices until they have grill marks and are slightly softened.',
            'In a large bowl, combine grilled bell peppers, red onion, cucumber, cherry tomatoes, and feta cheese.',
            'In a small bowl, whisk together olive oil, balsamic vinegar, salt, and pepper. Drizzle over the salad and toss gently.',
            'Garnish with fresh basil leaves before serving.',]
        },
        {
            title: 'Bell Pepper and Chickpea Stir-Fry',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFlmLsRAtDH6g-SJx_w5VoOxMweclWNV6Xg&usqp=CAU',
            ingredients: ['2 bell peppers (any color), thinly sliced',
            '1 can chickpeas, drained and rinsed',
            '1 onion, sliced',
            '2 cloves garlic, minced',
            '1 teaspoon ground cumin',
            '1 teaspoon smoked paprika',
            'Salt and pepper to taste',
            '2 tablespoons olive oil',
            'Fresh parsley for garnish'],
            instructions: ['Heat olive oil in a pan over medium heat. Add sliced onions and cook until softened.',
            'Add minced garlic, bell peppers, and chickpeas. Stir-fry for 5-7 minutes until the peppers are tender',
            'Season with ground cumin, smoked paprika, salt, and pepper. Stir well to combine.',
            'Cook for an additional 2-3 minutes until the chickpeas are heated through',
            'Garnish with fresh parsley before serving. This stir-fry can be enjoyed on its own or served over rice or quinoa.',]
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