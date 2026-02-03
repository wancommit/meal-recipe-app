import { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Chore: Fetch recipes from backend
    fetch('http://localhost:3001/api/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });

   
  }, 
  []);

  

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Recipe Collection
      </h1>
      
      {recipes.length === 0 ? (
        <p className="text-gray-600">No recipes found. Connect to your API!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <div 
              key={recipe._id} 
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {recipe.imageUrl && (
                <img 
                  src={recipe.imageUrl} 
                  alt={recipe.name} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.name}
                </h2>
                <p className="text-gray-600 mb-2">
                  {recipe.country} • {recipe.mealType}
                </p>
                <p className="text-sm text-gray-500">
                  ⏱️ {recipe.cookingTime} min • 🍽️ Serves {recipe.servings}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeList;