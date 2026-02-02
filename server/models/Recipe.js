const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mealType:{
        type:String,
        required: true,
        enum:['breakfast', 'lunch', 'dinner']
    },
    country:{
        type: String,
        required: true
    },
    cookingTime:{
        type: Number,
        required: true
    },
    description: String,
    ingredients: {
        type:String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    imageUrl: String
},{
        timestamps: true // Adds createdAt, updatedAt automatically

})