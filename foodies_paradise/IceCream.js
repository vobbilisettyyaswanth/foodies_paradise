document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        
        {
            title: 'Ice Cream Sandwiches',
            image: 'https://th.bing.com/th/id/OIP.To8RxvbsZE_3p3x1xJJi7QHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Ice Cream of your choice', 'Cookies (chocolate chip, oatmeal, or your favorite)', ],
            instructions: 'Allow the ice cream to soften slightly. Take two cookies and place a scoop of ice cream on one cookie. Sandwich the ice cream with another cookie, pressing gently. Optionally, roll the edges of the ice cream in sprinkles or chopped nuts. Repeat with the remaining cookies and ice cream. Place the ice cream sandwiches in the freezer for a few hours to firm up. Your quick and delightful Ice Cream Sandwiches are ready to be enjoyed! Customize with your favorite ice cream and cookies.',
        },
        {
            title: 'Kulfi',
            image: 'https://th.bing.com/th/id/OIP.qRGEiZ-wQ5hcfHMrDaaP_AHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['2 cups full-fat milk', '1/2 cup condensed milk', '1/2 cup evaporated milk', '1/2 cup sugar', '1/2 teaspoon cardamom powder', '1/4 cup chopped nuts (pistachios, almonds)' ],
            instructions: 'In a heavy-bottomed pan, simmer full-fat milk until it reduces to half, stirring continuously. Add condensed milk, evaporated milk, and sugar. Mix well until sugar dissolves. Continue to cook the mixture until it thickens, stirring frequently. Add cardamom powder and chopped nuts. Mix well. Allow the mixture to cool slightly. Pour the mixture into Kulfi molds or small cups. Freeze for at least 6 hours or overnight. Your rich and creamy Kulfi Ice Cream is ready to be enjoyed! Adjust sugar and nut quantities based on your preference.',
        },
        {
            title: 'Chocolate Ice Cream',
            image: 'https://th.bing.com/th/id/OIP.VWUHpuA_2yaDbYMe0KZgXwHaGM?w=186&h=155&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup granulated sugar', '1/2 cup cocoa powde', '1 teaspoon vanilla extract', '1/2 cup chocolate chips or chopped chocolate',],
            instructions: 'In a bowl, whisk together heavy cream, whole milk, granulated sugar, and cocoa powder until well combined. Add vanilla extract and mix. Pour the mixture into an ice cream maker and churn according to the manufacturers instructions. In the last few minutes of churning, add chocolate chips or chopped chocolate. Transfer the churned ice cream to a lidded container and freeze for a few hours until it reaches the desired consistency. Your delicious Chocolate Ice Cream is ready to be enjoyed! Adjust the sugar and chocolate quantities based on your preference.',
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