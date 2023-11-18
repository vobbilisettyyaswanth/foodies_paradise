document.addEventListener('DOMContentLoaded', function () {
    const recipes = [
        {
            title: 'Chicken 65',
            image: 'https://th.bing.com/th/id/OIP.rjkPEZYVS4e3TM6OA5V_uAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Boneless chicken pieces (500g)', 'Ginger-garlic paste (1 tablespoon)', 'Red chili powder (1 teaspoon', 'Turmeric powder (1/2 teaspoon)', 'Garam masala (1/2 teaspoon)', 'Curry leaves (a handful)', 'Corn flour (2 tablespoons)', 'All-purpose flour (2 tablespoons)', 'Lemon juice (1 tablespoon)', 'Salt to taste', 'Oil for frying', 'Green chilies and fresh coriander for garnish'],
            instructions: 'Marinate the chicken pieces with yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, and salt. Allow it to marinate for at least 30 minutes. In a separate bowl, mix corn flour and all-purpose flour. Coat the marinated chicken pieces with this flour mixture. Heat oil in a pan for frying. Fry the coated chicken pieces until they are golden brown and cooked through. Drain excess oil on paper towels. In another pan, heat a little oil and add curry leaves and green chilies. Sauté for a minute.Add the fried chicken to the pan and toss it with the curry leaves and green chilies.Finish by squeezing lemon juice over the chicken and garnish with fresh coriander.Your Chicken 65 is ready to be served! Enjoy this spicy and delicious dish.',
        },
        {
            title: 'Chicken butter masala',
            image: 'https://th.bing.com/th/id/OIP.WXB6NKQDwc3ivDHrCNTPKAHaGF?w=260&h=214&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Boneless chicken pieces (500g)', 'Butter (2 tablespoons)', 'Oil (2 tablespoons)', 'Onion (1, finely chopped)', 'Tomato (2, pureed)', 'Ginger-garlic paste (1 tablespoon)', 'Red chili powder (1 teaspoon)', 'Turmeric powder (1/2 teaspoon)', 'Garam masala (1 teaspoon)', 'Cashew nuts (10-12, soaked in water)', 'Fresh cream (1/2 cup)', ],
            instructions: 'Marinate the chicken with red chili powder, turmeric powder, and salt. Let it marinate for at least 30 minutes. Heat oil and butter in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for another minute until the raw smell disappears. Add the pureed tomatoes and cook until the oil separates from the masala. Blend the soaked cashew nuts into a smooth paste and add it to the pan. Cook for a few minutes. Add the marinated chicken to the masala and cook until the chicken is done. Sprinkle garam masala and kasuri methi over the chicken. Stir well. Pour in fresh cream and mix until the curry is creamy and well combined. Adjust salt and spice levels according to taste. Garnish with fresh coriander before serving. Your Chicken Butter Masala is ready to be enjoyed with naan or rice!',
        },
        {
            title: 'Cashew Chicken',
            image: 'https://th.bing.com/th/id/OIP.2wzD7PWHuBZz944H8RuemgHaFj?w=208&h=156&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            ingredients: ['Boneless chicken pieces (500g)', 'Cashew nuts (1/2 cup)', 'Soy sauce (2 tablespoons)', 'Hoisin sauce (2 tablespoons)', 'Ginger (1 tablespoon, minced)', 'Garlic (1 tablespoon, minced)', 'Garlic (1 tablespoon, minced)', 'Sesame oil (1 tablespoon)', 'Vegetable oil (2 tablespoons)', 'Bell peppers (2, sliced)', 'Salt and pepper to taste', ],
            instructions: 'Marinate the chicken with soy sauce, hoisin sauce, minced ginger, minced garlic, and cornstarch. Let it marinate for at least 30 minutes. Heat vegetable oil and sesame oil in a pan. Add the marinated chicken and cook until it is browned and cooked through. Add sliced bell peppers and cashew nuts to the pan. Stir-fry for a few minutes until the peppers are tender-crisp. Season with salt and pepper to taste. Garnish with sliced green onions. Your Cashew Chicken is ready to be served! Enjoy it with rice or noodles.',
        },
        {
            title: 'Mutton ghee roast',
            image: 'chilli chicken.jpg',
            ingredients: ['Mutton pieces (500g)', 'Ghee (4 tablespoons)', 'Dry red chilies (8-10, depending on spice preference)', 'Cumin seeds (1 teaspoon)', 'Coriander seeds (1 tablespoon)', 'Black peppercorns (1 teaspoon)', 'Fennel seeds (1 teaspoon)', 'Ginger-garlic paste (1 tablespoon)', 'Tamarind paste (1 tablespoon)', 'Turmeric powder (1/2 teaspoon)', 'Curry leaves (a handful)', 'Salt to taste'],
            instructions: 'Dry roast dry red chilies, cumin seeds, coriander seeds, black peppercorns, and fennel seeds until fragrant. Grind them into a fine powder. Marinate the mutton with the ground spice powder, ginger-garlic paste, tamarind paste, turmeric powder, and salt. Let it marinate for at least 30 minutes. Heat ghee in a pan, add curry leaves, and sauté until they crackle.Add the marinated mutton and cook until the meat is tender and the ghee separates.Garnish with fresh coriander before serving.Your flavorful Mutton Ghee Roast is ready to be enjoyed with rice or bread!',
        },
        {
            title: 'Mutton curry',
            image: 'Mutton curry.jpg',
            ingredients: ['500g mutton, cleaned and cut into pieces', '2 large onions, finely chopped', '2 tomatoes, chopped', '1/4 cup oil or ghee', '1 tablespoon ginger-garlic paste', '1/2 cup yogurt', '1 teaspoon turmeric powder','2 teaspoons red chili powder (adjust to taste)', '1 teaspoon coriander powder', '1 teaspoon cumin powder', '1 teaspoon garam masala', 'Salt to taste', 'Fresh coriander leaves for garnish', ],
            instructions: 'Heat oil or ghee in a large pot. Add chopped onions and sauté until golden brown.Add ginger-garlic paste and sauté for a minute until the raw smell disappears.Add mutton pieces and cook until they are browned on all sides. Stir in chopped tomatoes and cook until they are soft and the oil starts to separate.Add turmeric powder, red chili powder, coriander powder, cumin powder, and salt. Mix well.Beat the yogurt and add it to the pot. Cook until the oil separates again. Add enough water to cover the mutton and bring it to a boil. Reduce the heat, cover, and simmer until the mutton is tender (this may take 1-1.5 hours depending on the meat).Sprinkle garam masala and cook for an additional 5-10 minutes. Garnish with fresh coriander leaves. Serve the delicious mutton curry with rice or bread of your choice. Adjust the spice levels according to your preference.',
        },
        {
            title: 'Achari ghost',
            image: 'Achari mutton ghost.jpg',
            ingredients: ['500g mutton, cleaned and cut into pieces',
            '3 tablespoons mustard oil',
            '2 onions, finely sliced',
            '2 tomatoes, chopped',
            '1 tablespoon ginger-garlic paste',
            '2 tablespoons achari masala (pickling spice blend)', '1 teaspoon turmeric powder',
            '1 teaspoon red chili powder (adjust to taste)',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
            'Salt to taste',
            'Fresh coriander leaves for garnish',
            '1 tablespoon fennel seeds',
            '1 tablespoon mustard seeds',
            '1 tablespoon fenugreek seeds',
            '1 tablespoon cumin seeds',
            '1 tablespoon nigella seeds (kalonji)',
            '5-6 dry red chilies'],
            instructions: 'Dry roast the ingredients for achari masala until fragrant. Grind them into a coarse powder. Heat mustard oil in a pan. Add sliced onions and sauté until golden brown. Add ginger-garlic paste and cook for a minute until the raw smell disappears. Add mutton pieces and brown them on all sides. Stir in chopped tomatoes and cook until they are soft and the oil separates. Add turmeric powder, red chili powder, cumin powder, coriander powder, and achari masala. Mix well.Cook the mutton with the masala for a few minutes until the oil starts to separate.Add enough water to cover the mutton, bring it to a boil, then reduce the heat, cover, and simmer until the mutton is tender.Adjust salt and spice levels according to your taste.Garnish with fresh coriander leaves. Serve Achari Ghost with naan or rice for a flavorful and tangy dish!',
        },
        {
            title: 'Paneer cashew curry',
            image: 'paneer butter masala.jpg',
            ingredients: ['250g paneer, cubed',
            '2 tablespoons butter',
            '1 onion, finely chopped',
            '2 tomatoes, pureed',
            '1 tablespoon ginger-garlic paste',
            '1/2 cup cashews, soaked and blended into a paste',
            '1 teaspoon red chili powder',
            '1 teaspoon turmeric powder',
            '1 teaspoon garam masala',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
           'Salt to taste',
            '1/2 cup cream',
            'Fresh coriander leaves for garnish'],
            instructions: 'Grind soaked cashews into a smooth paste.Heat oil or ghee in a pan. Add chopped onions and sauté until golden brown.Add ginger-garlic paste and sauté for a minute until the raw smell disappears.Add tomato puree and cook until the oil separates.Add red chili powder, turmeric powder, garam masala, cumin powder, coriander powder, and salt. Mix well.Add cubed paneer and cashew paste. Cook for a few minutes.Adjust the consistency with water if needed and simmer until the curry reaches the desired thickness.Garnish with fresh coriander leaves.Serve the Paneer Cashew Curry with naan or rice for a rich and flavorful meal! Adjust the spice levels according to your preference.',
        },
        {
            title: 'Paneer Butter masala',
            image: 'paneer cashew curry.jpg',
            ingredients: ['250g paneer, cubed',
            '2 tablespoons butter',
            '1 onion, finely chopped',
            '2 tomatoes, pureed',
            '1 tablespoon ginger-garlic paste',
            '1/2 cup cashews, soaked and blended into a paste',
            '1 teaspoon red chili powder',
            '1 teaspoon turmeric powder',
            '1 teaspoon garam masala',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
           'Salt to taste',
            '1/2 cup cream',
            'Fresh coriander leaves for garnish'],
            instructions: 'Heat butter in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute until the raw smell disappears. Add tomato puree and cook until the oil separates.Add cashew paste, red chili powder, turmeric powder, garam masala, cumin powder, coriander powder, and salt. Mix well.Add cubed paneer and cook for a few minutes.Pour in cream and simmer until the curry reaches the desired consistency.Garnish with fresh coriander leaves.Serve the Paneer Butter Masala with naan or rice for a creamy and delicious dish! Adjust the spice levels according to your preference.',
        },
        {
            title: 'Paneer curry',
            image: 'paneer curry.jpg',
            ingredients: ['250g paneer, cubed',
            '1 onion, finely chopped',
            '2 tomatoes, chopped',
            '1 tablespoon oil or ghee',
            '1 tablespoon ginger-garlic paste',
            '1 teaspoon cumin powder',
            '1 teaspoon coriander powder',
            '1/2 teaspoon turmeric powder',
            '1/2 teaspoon red chili powder',
            'Salt to taste',
            'Fresh coriander leaves for garnish',],
            instructions: 'Heat oil or ghee in a pan. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and sauté for a minute until the raw smell disappears.Add chopped tomatoes and cook until they are soft. Add cumin powder, coriander powder, turmeric powder, red chili powder, and salt. Mix well.Add cubed paneer and stir gently to coat the paneer with the masala.Simmer for a few minutes until the paneer is heated through. Garnish with fresh coriander leaves.Serve the Paneer Curry with rice or bread for a quick and delicious meal! Adjust the spice levels according to your preference.',
        },
        {
            title: 'Ice Cream Sandwiches',
            image: 'paneer curry.jpg',
            ingredients: ['Ice Cream of your choice', 'Cookies (chocolate chip, oatmeal, or your favorite)', ],
            instructions: 'Allow the ice cream to soften slightly. Take two cookies and place a scoop of ice cream on one cookie. Sandwich the ice cream with another cookie, pressing gently. Optionally, roll the edges of the ice cream in sprinkles or chopped nuts. Repeat with the remaining cookies and ice cream. Place the ice cream sandwiches in the freezer for a few hours to firm up. Your quick and delightful Ice Cream Sandwiches are ready to be enjoyed! Customize with your favorite ice cream and cookies.',
        },
        {
            title: 'Kulfi',
            image: 'paneer curry.jpg',
            ingredients: ['2 cups full-fat milk', '1/2 cup condensed milk', '1/2 cup evaporated milk', '1/2 cup sugar', '1/2 teaspoon cardamom powder', '1/4 cup chopped nuts (pistachios, almonds)' ],
            instructions: 'In a heavy-bottomed pan, simmer full-fat milk until it reduces to half, stirring continuously. Add condensed milk, evaporated milk, and sugar. Mix well until sugar dissolves. Continue to cook the mixture until it thickens, stirring frequently. Add cardamom powder and chopped nuts. Mix well. Allow the mixture to cool slightly. Pour the mixture into Kulfi molds or small cups. Freeze for at least 6 hours or overnight. Your rich and creamy Kulfi Ice Cream is ready to be enjoyed! Adjust sugar and nut quantities based on your preference.',
        },
        {
            title: 'Chocolate Ice Cream',
            image: 'paneer curry.jpg',
            ingredients: ['2 cups heavy cream', '1 cup whole milk', '3/4 cup granulated sugar', '1/2 cup cocoa powde', '1 teaspoon vanilla extract', '1/2 cup chocolate chips or chopped chocolate',],
            instructions: 'In a bowl, whisk together heavy cream, whole milk, granulated sugar, and cocoa powder until well combined. Add vanilla extract and mix. Pour the mixture into an ice cream maker and churn according to the manufacturers instructions. In the last few minutes of churning, add chocolate chips or chopped chocolate. Transfer the churned ice cream to a lidded container and freeze for a few hours until it reaches the desired consistency. Your delicious Chocolate Ice Cream is ready to be enjoyed! Adjust the sugar and chocolate quantities based on your preference.',
        },
        {
            title: 'South Indian Spicy Fish Curry',
            image: 'paneer curry.jpg',
            ingredients: ['500g fish fillets (any firm white fish)', '1 cup coconut milk', '2 tablespoons oil', '1 onion, finely chopped', '2 tomatoes, chopped', '1 tablespoon ginger-garlic paste', '1 teaspoon mustard seeds', '1 teaspoon fenugreek seeds', '1 tablespoon red chili powder', '1 teaspoon turmeric powde', 'Curry leaves', 'Salt to taste',],
            instructions: 'Heat oil in a pan, add mustard seeds and fenugreek seeds. Let them splutter. Add chopped onions and sauté until golden brown. Add ginger-garlic paste and cook until the raw smell disappears. Add tomatoes, red chili powder, turmeric powder, and salt. Cook until tomatoes are soft. Pour in coconut milk and bring the curry to a simmer. Add fish fillets and cook until fish is done. Garnish with curry leaves and serve with rice.',
        },
        {
            title: 'Thai Green Fish Curry',
            image: 'paneer curry.jpg',
            ingredients: ['500g white fish, cut into chunks', '1 can (400ml) coconut milk', '2 tablespoons green curry paste', '1 tablespoon fish sauce', '1 tablespoon sugar', '1 cup assorted vegetables (bell peppers, bamboo shoots, and Thai eggplant)', 'Fresh basil leaves', 'Lime wedges'],
            instructions: 'In a pan, heat half of the coconut milk and stir in green curry paste. Add fish sauce and sugar, mix well. Add the remaining coconut milk and bring to a gentle boil. Add fish chunks and vegetables, simmer until the fish is cooked and the vegetables are tender. Stir in fresh basil leaves and remove from heat. Serve hot with rice, garnished with lime wedges.',
        },
        {
            title: 'Goan Fish Curry',
            image: 'paneer cashew curry.jpg',
            ingredients: ['500g fish (pomfret or kingfish)', '1 cup grated coconut', '1 onion, finely chopped', '2 tomatoes, chopped', '1 tablespoon coriander seeds', '1 teaspoon cumin seeds', '1 teaspoon turmeric powder', '1 tablespoon tamarind pulp', '2-3 dried red chilies', '4-5 garlic cloves', 'Salt to taste'],
            instructions: 'Grind together grated coconut, coriander seeds, cumin seeds, red chilies, and garlic to make a smooth paste. Heat oil in a pan, sauté chopped onions until golden brown. Add tomatoes and cook until they are soft. Add the ground paste, turmeric powder, and tamarind pulp. Cook for a few minutes. Add fish pieces and cook until they are done. Adjust the seasoning with salt.Serve hot with rice. Enjoy your fish curry!',
        },
        {
            title: ' Mushroom Risotto',
            image: 'paneer curry.jpg',
            ingredients: ['1 cup Arborio rice', '200g mushrooms, sliced', '1 onion, finely chopped', '2 cloves garlic, minced', '4 cups vegetable broth, heated', '1/2 cup dry white wine', '1/2 cup grated Parmesan cheese', '2 tablespoons butter', 'Fresh parsley, chopped', 'Salt and pepper to taste'],
            instructions: 'In a pan, sauté onions and garlic in butter until softened. Add mushrooms and cook until they release their moisture. Stir in Arborio rice and cook until translucent. Pour in the white wine and cook until it is mostly evaporated. Gradually add hot vegetable broth, one ladle at a time, stirring until absorbed. Continue until the rice is creamy and cooked. Stir in Parmesan cheese, salt, and pepper. Garnish with fresh parsley.',
        },
        {
            title: 'Garlic Butter Mushrooms',
            image: 'paneer curry.jpg',
            ingredients: ['500g mushrooms, halved', '4 tablespoons butter', '4 cloves garlic, minced', '2 tablespoons fresh parsley, chopped', 'Salt and pepper to taste', 'Lemon wedges for serving'],
            instructions: 'In a skillet, melt butter over medium heat.Add minced garlic and sauté until fragrant.Add mushrooms, salt, and pepper. Cook until mushrooms are golden brown.Stir in fresh parsley and cook for an additional minute.Serve with a squeeze of lemon on top.',
        },
        {
            title: 'Creamy Mushroom Chicken',
            image: 'paneer curry.jpg',
            ingredients: ['4 boneless, skinless chicken breasts', '200g mushrooms, sliced', '1 onion, chopped', '2 cloves garlic, minced','1 cup chicken broth', '1/2 cup heavy cream', '2 tablespoons olive oil', '1 teaspoon thyme', 'Salt and pepper to taste'],
            instructions: 'Season chicken breasts with salt and pepper.In a pan, heat olive oil and cook chicken until browned on both sides. Remove and set aside.In the same pan, sauté onions and garlic until softened.Add mushrooms and cook until they release their moisture.Pour in chicken broth, heavy cream, and thyme. Bring to a simmer.Add the browned chicken back to the pan and cook until chicken is cooked through.Adjust seasoning and serve over rice or mashed potatoes.Enjoy these mushroom recipes packed with flavor and versatility!',
        },
        {
            title: 'Classic Mashed Potatoes',
            image: 'paneer curry.jpg',
            ingredients: ['4 large potatoes, peeled and diced', '1/2 cup butter', '1/2 cup milk', 'Salt and pepper to taste', 'Chopped chives for garnish (optional)', ],
            instructions: 'Boil the diced potatoes in salted water until fork-tender. Drain the potatoes and mash them.In a saucepan, warm the milk and melt the butter.Pour the milk-butter mixture into the mashed potatoes and whip until smooth. Season with salt and pepper to taste.Garnish with chopped chives if desired.',
        },
        {
            title: 'Roasted Garlic Parmesan Potatoes',
            image: 'paneer butter masala.jpg',
            ingredients: ['1.5 lbs baby potatoes, halved', '3 tablespoons olive oil', '4 cloves garlic, minced', '1/2 cup grated Parmesan cheese', '1 teaspoon dried rosemary', 'Salt and pepper to taste', 'Chopped fresh parsley for garnish'],
            instructions: 'Preheat the oven to 400°F (200°C).In a bowl, toss the halved potatoes with olive oil, minced garlic, Parmesan cheese, and rosemary.Spread the potatoes on a baking sheet in a single layer.Roast for 25-30 minutes or until golden brown and crispy.Season with salt and pepper, and garnish with chopped parsley before serving.',
        },
        {
            title: 'Potato and Leek Soup',
            image: 'paneer curry.jpg',
            ingredients: ['4 large potatoes, peeled and diced', '2 leeks, cleaned and sliced', '1 onion, chopped', '2 cloves garlic, minced', '4 cups vegetable or chicken broth', '1 cup milk', '2 tablespoons butter', 'Salt and pepper to taste', 'Chopped chives or green onions for garnish'],
            instructions: 'In a pot, sauté onions and garlic in butter until softened.Add leeks and cook until they are tender.Add diced potatoes and broth. Bring to a boil, then simmer until potatoes are cooked.Use an immersion blender to puree the soup until smooth.Stir in milk and season with salt and pepper.Garnish with chopped chives or green onions before serving.Enjoy these potato recipes that cover the comfort of mashed potatoes, the savory delight of roasted potatoes, and the warmth of a potato and leek soup!',
        },
        {
            title: 'Classic Chocolate Cake',
            image: 'chilli chicken.jpg',
            ingredients: ['1 and 3/4 cups all-purpose flour', '3/4 cup unsweetened cocoa powder', '2 cups granulated sugar', '1 and 1/2 teaspoons baking powder', '1 and 1/2 teaspoons baking soda', '1 teaspoon salt', '2 large eggs', '1 cup whole milk', '1/2 cup vegetable oil', '2 teaspoons vanilla extract', '1 cup boiling water'],
            instructions: 'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.In a large bowl, sift together flour, cocoa powder, sugar, baking powder, baking soda, and salt.Add eggs, milk, oil, and vanilla extract. Beat on medium speed until well combined.Stir in boiling water, the batter will be thin.Pour the batter into the prepared pans and bake for 30-35 minutes or until a toothpick inserted comes out clean.Allow the cakes to cool before frosting.',
        },
        {
            title: 'Lemon Blueberry Pound Cake',
            image: 'paneer curry.jpg',
            ingredients: ['2 and 1/2 cups all-purpose flour', '2 teaspoons baking powder', '1/2 teaspoon salt', '1 cup unsalted butter, softened', '2 cups granulated sugar', '4 large eggs', '1 teaspoon vanilla extract', '1 cup sour cream', 'Zest of 2 lemons', '2 cups fresh blueberries'],
            instructions: 'Preheat the oven to 350°F (175°C) and grease a 10-inch bundt pan. In a bowl, whisk together flour, baking powder, and salt.In another bowl, cream together butter and sugar until light and fluffy. Add eggs one at a time, beating well after each addition. Stir in vanilla. Gradually add the dry ingredients to the wet ingredients, alternating with sour cream. Fold in lemon zest and blueberries. Pour the batter into the prepared pan and bake for 60-70 minutes or until a toothpick inserted comes out clean. Allow the cake to cool before removing from the pan.',
        },
        {
            title: ' Carrot Cake with Cream Cheese Frosting',
            image: 'paneer curry.jpg',
            ingredients: ['2 cups all-purpose flour', '2 teaspoons baking powder', '1 and 1/2 teaspoons baking soda', '1 teaspoon salt', '2 teaspoons ground cinnamon', '1 and 1/2 cups vegetable oil', '1 cup granulated sugar', '1 cup brown sugar, packed', '4 large eggs', '2 teaspoons vanilla extract', '3 cups grated carrots', '1 cup chopped nuts (optional)', 'Cream Cheese Frosting (8 oz cream cheese, 1/2 cup unsalted butter, 4 cups powdered sugar, 1 teaspoon vanilla extract)'],
            instructions: 'Preheat the oven to 350°F (175°C) and grease two 9-inch round cake pans.In a bowl, whisk together flour, baking powder, baking soda, salt, and cinnamon.In another bowl, whisk together oil, granulated sugar, brown sugar, eggs, and vanilla.Gradually add the dry ingredients to the wet ingredients, mixing until well combined.Fold in grated carrots and nuts. Divide the batter between the prepared pans and bake for 25-30 minutes or until a toothpick inserted comes out clean. Allow the cakes to cool before frosting with cream cheese frosting. Enjoy these delicious cake recipes!',
        },
        {
            title: 'Classic Vanilla Milkshake',
            image: 'cashew chicken.jpg',
            ingredients: ['2 cups vanilla ice cream', '1 cup milk', '1 teaspoon vanilla extract', 'Whipped cream for topping (optional)', 'Sprinkles or chocolate shavings for garnish (optional)',],
            instructions: 'In a blender, combine vanilla ice cream, milk, and vanilla extract. Blend until smooth and creamy. Pour into a glass, top with whipped cream, and garnish with sprinkles or chocolate shavings if desired.',
        },
        {
            title: 'Chocolate Banana Milkshake',
            image: 'paneer cashew curry.jpg',
            ingredients: ['2 ripe bananas', '2 cups chocolate ice cream', '1 cup milk', '2 tablespoons chocolate syrup', 'Sliced bananas for garnish (optional)'],
            instructions: 'In a blender, combine ripe bananas, chocolate ice cream, milk, and chocolate syrup.Blend until smooth.Pour into a glass, and garnish with sliced bananas if desired.',
        },
        {
            title: 'Strawberry Oatmeal Milkshake',
            image: 'paneer curry.jpg',
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