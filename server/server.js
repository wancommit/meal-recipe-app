// Import dependences
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



// Inititalize express
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);


// Test route (to verify server works)
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running hot!'});
})


// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/meal-recipes')

.then(() => {
    console.log("Connection is open!")
})

.catch(err => {
    console.log("Opps, Error!")
    console.log(err)
})

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})