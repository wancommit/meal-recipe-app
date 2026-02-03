const mongoose = require('mongoose');
require('dotenv').config();
const Recipe = require('./models/Recipe');

// Sample recipes data with servings
const recipes = [
  {
    name: "Classic Pancakes",
    mealType: "breakfast",
    country: "USA",
    cookingTime: 20,
    servings: 4,
    description: "Fluffy American-style pancakes perfect for weekend mornings",
    ingredients: "2 cups flour, 2 eggs, 1.5 cups milk, 4 tbsp melted butter, 2 tbsp sugar, 2 tsp baking powder, 1/2 tsp salt",
    instructions: "1. Mix dry ingredients in a bowl. 2. Whisk together wet ingredients separately. 3. Combine wet and dry, don't overmix. 4. Heat griddle to medium. 5. Pour 1/4 cup batter per pancake. 6. Flip when bubbles form on surface. 7. Cook until golden brown.",
    imageUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400"
  },
  {
    name: "Jollof Rice",
    mealType: "lunch",
    country: "Ghana",
    cookingTime: 45,
    servings: 6,
    description: "West African classic one-pot rice dish with rich tomato flavor",
    ingredients: "3 cups rice, 400g tomato paste, 1 onion, 3 tomatoes, 2 bell peppers, 4 cups stock, spices (thyme, curry, bay leaves), vegetable oil",
    instructions: "1. Blend tomatoes, peppers, onion. 2. Fry tomato paste in oil until darkened. 3. Add blended mixture and cook. 4. Add stock and spices. 5. Add parboiled rice. 6. Cover and cook on low heat until rice is tender.",
    imageUrl: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400"
  },
  {
    name: "Spaghetti Carbonara",
    mealType: "dinner",
    country: "Italy",
    cookingTime: 25,
    servings: 4,
    description: "Classic Roman pasta with eggs, cheese, and guanciale",
    ingredients: "400g spaghetti, 200g guanciale or pancetta, 4 egg yolks, 100g Pecorino Romano cheese, black pepper, salt",
    instructions: "1. Cook pasta in salted boiling water. 2. Fry guanciale until crispy. 3. Mix egg yolks with grated cheese. 4. Drain pasta, saving pasta water. 5. Mix hot pasta with guanciale off heat. 6. Add egg mixture quickly, tossing. 7. Add pasta water to reach creamy consistency.",
    imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400"
  },
  {
    name: "Shakshuka",
    mealType: "breakfast",
    country: "Israel",
    cookingTime: 30,
    servings: 3,
    description: "Eggs poached in spicy tomato and pepper sauce",
    ingredients: "6 eggs, 1 can crushed tomatoes, 2 bell peppers, 1 onion, 4 garlic cloves, 1 tsp cumin, 1 tsp paprika, chili flakes, olive oil, feta cheese, parsley",
    instructions: "1. Sauté onions and peppers until soft. 2. Add garlic and spices, cook 1 minute. 3. Add tomatoes and simmer 10 minutes. 4. Make wells in sauce, crack eggs into each. 5. Cover and cook until eggs are set. 6. Top with feta and parsley.",
    imageUrl: "https://images.unsplash.com/photo-1587486937356-f07c2c504b4b?w=400"
  },
  {
    name: "Tacos al Pastor",
    mealType: "lunch",
    country: "Mexico",
    cookingTime: 35,
    servings: 4,
    description: "Mexican street tacos with marinated pork and pineapple",
    ingredients: "500g pork shoulder, 3 dried chilies, 1/4 pineapple, 1 onion, cilantro, lime, corn tortillas, achiote paste, garlic, vinegar",
    instructions: "1. Blend chilies, achiote, garlic, vinegar for marinade. 2. Marinate pork for 2+ hours. 3. Grill or pan-fry pork with pineapple. 4. Chop pork and pineapple. 5. Warm tortillas. 6. Assemble tacos with meat, pineapple, onion, cilantro, lime.",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"
  },
  {
    name: "Pad Thai",
    mealType: "dinner",
    country: "Thailand",
    cookingTime: 30,
    servings: 2,
    description: "Iconic Thai stir-fried noodles with sweet and tangy sauce",
    ingredients: "200g rice noodles, 200g shrimp or chicken, 2 eggs, 3 tbsp tamarind paste, 2 tbsp fish sauce, 1 tbsp sugar, bean sprouts, peanuts, lime, garlic, shallots",
    instructions: "1. Soak noodles in warm water. 2. Mix tamarind, fish sauce, sugar for sauce. 3. Stir-fry garlic and protein. 4. Push aside, scramble eggs. 5. Add drained noodles and sauce. 6. Toss everything together. 7. Add bean sprouts. 8. Serve with peanuts and lime.",
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400"
  },
  {
    name: "Full English Breakfast",
    mealType: "breakfast",
    country: "UK",
    cookingTime: 25,
    servings: 2,
    description: "Traditional British breakfast fry-up",
    ingredients: "2 eggs, 2 bacon rashers, 2 sausages, 1 tomato, mushrooms, baked beans, black pudding, toast, butter",
    instructions: "1. Grill sausages and bacon. 2. Fry eggs to preference. 3. Grill tomato halves. 4. Sauté mushrooms. 5. Heat baked beans. 6. Toast bread. 7. Arrange everything on plate and serve hot.",
    imageUrl: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400"
  },
  {
    name: "Chicken Curry",
    mealType: "dinner",
    country: "India",
    cookingTime: 50,
    servings: 6,
    description: "Aromatic Indian curry with tender chicken in spiced gravy",
    ingredients: "500g chicken, 2 onions, 3 tomatoes, ginger-garlic paste, yogurt, curry powder, garam masala, turmeric, chili powder, coriander, oil, cream",
    instructions: "1. Marinate chicken in yogurt and spices. 2. Fry onions until golden. 3. Add ginger-garlic paste. 4. Add tomatoes and cook down. 5. Add spices and chicken. 6. Simmer until chicken is cooked. 7. Add cream and garnish with coriander.",
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400"
  },
  {
    name: "Greek Salad",
    mealType: "lunch",
    country: "Greece",
    cookingTime: 15,
    servings: 4,
    description: "Fresh Mediterranean salad with feta and olives",
    ingredients: "4 tomatoes, 1 cucumber, 1 red onion, 200g feta cheese, kalamata olives, olive oil, red wine vinegar, oregano, salt, pepper",
    instructions: "1. Chop tomatoes and cucumber into chunks. 2. Slice onion thinly. 3. Combine vegetables in bowl. 4. Add olives and feta chunks. 5. Dress with olive oil and vinegar. 6. Season with oregano, salt, pepper. 7. Toss gently and serve.",
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400"
  },
  {
    name: "Croissant",
    mealType: "breakfast",
    country: "France",
    cookingTime: 180,
    servings: 8,
    description: "Buttery, flaky French pastry (time-intensive but worth it)",
    ingredients: "500g flour, 10g salt, 50g sugar, 10g yeast, 300ml milk, 250g butter (for laminating)",
    instructions: "1. Make dough with flour, salt, sugar, yeast, milk. 2. Chill overnight. 3. Roll out, add butter layer. 4. Fold and roll (laminating) multiple times. 5. Chill between folds. 6. Roll out, cut triangles. 7. Roll into crescents. 8. Proof and bake at 200°C until golden.",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
  },
  {
    name: "Ramen",
    mealType: "dinner",
    country: "Japan",
    cookingTime: 40,
    servings: 2,
    description: "Japanese noodle soup with rich broth and toppings",
    ingredients: "Ramen noodles, 4 cups chicken/pork broth, 2 eggs, pork belly or chicken, soy sauce, mirin, green onions, nori, bamboo shoots, sesame oil",
    instructions: "1. Prepare broth and season with soy sauce and mirin. 2. Cook pork/chicken separately. 3. Soft-boil eggs and marinate in soy sauce. 4. Cook noodles according to package. 5. Assemble: noodles in bowl, pour hot broth. 6. Top with meat, egg, green onions, nori.",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400"
  },
  {
    name: "Feijoada",
    mealType: "lunch",
    country: "Brazil",
    cookingTime: 120,
    servings: 8,
    description: "Brazilian black bean stew with pork",
    ingredients: "500g black beans, 300g pork ribs, 200g sausage, 150g bacon, 2 onions, 4 garlic cloves, bay leaves, orange, rice, collard greens, farofa",
    instructions: "1. Soak beans overnight. 2. Cook beans with water and bay leaves. 3. In separate pan, brown all meats. 4. Add meats to beans. 5. Sauté onions and garlic, add to pot. 6. Simmer 2 hours until beans are creamy. 7. Serve with rice, orange slices, greens, farofa.",
    imageUrl: "https://images.unsplash.com/photo-1628191081301-1201166f94f9?w=400"
  },
  {
    name: "Pho",
    mealType: "breakfast",
    country: "Vietnam",
    cookingTime: 60,
    servings: 4,
    description: "Vietnamese noodle soup with aromatic broth",
    ingredients: "Rice noodles, 2L beef broth, 300g beef slices, ginger, star anise, cinnamon, fish sauce, bean sprouts, Thai basil, lime, chili, hoisin sauce",
    instructions: "1. Char ginger and onions. 2. Simmer broth with spices (star anise, cinnamon) for 45 min. 3. Strain broth. 4. Cook rice noodles. 5. Slice beef thinly. 6. Pour hot broth over noodles and raw beef (cooks in bowl). 7. Serve with herbs, lime, chili, hoisin.",
    imageUrl: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400"
  },
  {
    name: "Paella",
    mealType: "dinner",
    country: "Spain",
    cookingTime: 50,
    servings: 6,
    description: "Spanish rice dish with seafood and saffron",
    ingredients: "400g paella rice, 500g mixed seafood (shrimp, mussels, squid), 1L fish stock, saffron, 2 tomatoes, bell peppers, peas, garlic, paprika, olive oil, lemon",
    instructions: "1. Heat oil in paella pan. 2. Sauté garlic and peppers. 3. Add tomatoes and paprika. 4. Add rice, toast briefly. 5. Add saffron-infused hot stock. 6. Don't stir! Let cook. 7. Add seafood on top halfway through. 8. Cook until rice is done and crispy bottom forms. 9. Serve with lemon.",
    imageUrl: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400"
  },
  {
    name: "Waakye",
    mealType: "lunch",
    country: "Ghana",
    cookingTime: 55,
    servings: 5,
    description: "Ghanaian rice and beans cooked with millet leaves",
    ingredients: "2 cups rice, 1 cup black-eyed peas, dried millet leaves or baking soda, salt, water",
    instructions: "1. Soak beans for 2 hours. 2. Boil beans with millet leaves until tender. 3. Add rice to beans and cooking liquid. 4. Add more water if needed. 5. Cook until rice is done and has reddish-brown color from leaves. 6. Serve with stew, fried plantains, gari, boiled eggs, spaghetti.",
    imageUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400"
  }
];

// Connect to MongoDB and seed data
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing recipes
    await Recipe.deleteMany({});
    console.log('🗑️  Cleared existing recipes');

    // Insert new recipes
    const insertedRecipes = await Recipe.insertMany(recipes);
    console.log(`✅ Successfully seeded ${insertedRecipes.length} recipes!`);

    // Show sample
    console.log('\n📋 Sample recipe:');
    console.log(`   ${insertedRecipes[0].name} - ${insertedRecipes[0].servings} servings`);

    // Close connection
    await mongoose.connection.close();
    console.log('👋 Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();