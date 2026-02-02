const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Get all recipes (with optional filters)
router.get('/', async (req, res) => {
    try {
        // Get query params (mealType, country, maxTime) from req.query
        const { mealType, country, cookingTime } = req.query;

        // Build a filter object for mongoose
        const filter = {};
        if (mealType) filter.mealType = mealType;
        if (country) filter.country = { $regex: new RegExp(country, 'i') };
        if (cookingTime) filter.cookingTime = { $lte: parseInt(cookingTime) };

        console.log('Query params:', req.query);
        console.log('Filter object:', filter);

        // Use Recipe.find(filter) to query database
        const recipes = await Recipe.find(filter)

        console.log('Found recipes:', recipes.length);

        // Send results back to JSON
        res.json(recipes);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


// Get random recipe
router.get('/random', async (req, res) => {
    try {

        const { mealType, country, cookingTime } = req.query;

        // Build filter like in main route
        const filter = {};
        if (mealType) filter.mealType = mealType;
        if (country) filter.country = { $regex: new RegExp(country, 'i') };
        if (cookingTime) filter.cookingTime = { $lte: parseInt(cookingTime) };

        // Use match stage to filter before sampling
        const pipeline = [];
        if (Object.keys(filter).length > 0) {
            pipeline.push({ $match: filter });
        }
        pipeline.push({ $sample: { size: 1 } });


         // Get a random document recipe
        const randomRecipes = await Recipe.aggregate(pipeline);


        // Check if there's a recipe
        if (randomRecipes.length === 0) {
            return res.status(404).json({ message: 'No recipes found' });
        }

        // Send the first (and only) random recipe
        res.json(randomRecipes[0]); // aggregate returns an array and what's required is the first recipe
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


// Get single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    
    // If no recipe found with that ID
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    // Send results back to JSON
    res.json(recipe);


  } catch (error) {
    // If ID format is invalid (not a valid MongoDB ObjectId)
    res.status(500).json({ message: error.message });
  }
})


module.exports = router;