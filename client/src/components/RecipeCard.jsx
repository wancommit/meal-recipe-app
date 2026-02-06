function RecipeCard({ recipe, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image with Badge */}
      <div className="relative">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.name}
          className="w-full h-48 object-cover"
        />
        
        {/* Meal Type Badge */}
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium capitalize"
          style={{ 
            backgroundColor: '#D4E7C5',
            color: '#2C3E50'
          }}
        >
          {recipe.mealType}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#2C3E50' }}>
          {recipe.name}
        </h3>
        
        <p className="text-gray-600 mb-3 flex items-center gap-1">
          <span>{recipe.country}</span>
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{recipe.cookingTime} mins</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span>🍽️</span>
            <span>Servings: {recipe.servings}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard