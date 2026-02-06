import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import FilterSidebar from '../components/FilterSideBar'
import RecipeCard from '../components/RecipeCard'

function RecipesPage() {
    const navigate = useNavigate()

    // State
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [isFilterOpen, setIsFilterOpen] = useState(false) // Mobile drawer
    const [filters, setFilters] = useState({
        country: '',
        mealType: '',
        duration: ''
    })

    // Fetch recipes when filters change
    useEffect(() => {
        fetchRecipes()
    }, [filters])

    const fetchRecipes = async () => {
        try {
            setLoading(true)

            const params = new URLSearchParams()
            if (filters.country) params.append('country', filters.country)
            if (filters.mealType) params.append('mealType', filters.mealType)
            if (filters.duration === 'short') params.append('cookingTime', '10')
            if (filters.duration === 'medium') params.append('cookingTime', '45')

            const queryString = params.toString()
            const url = `http://localhost:3001/api/recipes${queryString ? '?' + queryString : ''}`

            const response = await fetch(url)
            if (!response.ok) throw new Error('Failed to fetch recipes')

            const data = await response.json()
            setRecipes(data)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }))
    }

    const handleClearFilters = () => {
        setFilters({ country: '', mealType: '', duration: '' })
        setSearchTerm('')
    }

    const handleRecipeClick = (recipeId) => {
        navigate(`/recipe/${recipeId}`)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-gray-600">Loading recipes... 🍳</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl text-red-600">Error: {error}</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#FAF7F0' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Page Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4" style={{ color: '#2C3E50' }}>
                        What's cooking today?
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 px-4">
                       Browse simple meals from every corner of the world — quick, fun, and made for everyday kitchens.
                    </p>

                    {/* Search Bar */}
                    <SearchBar
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block lg:col-span-1">
                        <FilterSidebar
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onClearFilters={handleClearFilters}
                        />
                    </div>

                    {/* Recipe Grid */}
                    <div className="lg:col-span-3">
                        {filteredRecipes.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-xl text-gray-600">No recipes found.</p>
                                <p className="text-gray-500 mt-2">Try adjusting your filters!</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {filteredRecipes.map(recipe => (
                                    <RecipeCard
                                        key={recipe._id}
                                        recipe={recipe}
                                        onClick={() => handleRecipeClick(recipe._id)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Floating Mobile Filter Button (Docked bottom-right) */}
            <button
                onClick={() => setIsFilterOpen(true)}
                className="fixed bottom-6 right-6 bg-[#2C3E50] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 lg:hidden z-50"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 12h18M3 20h18" />
                </svg>
                Filter
            </button>

            {/* Mobile Filter Drawer */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-transform duration-300 ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsFilterOpen(false)}
                />

                {/* Drawer */}
                <div className="absolute bottom-0 right-0 w-full bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto p-6">
                    {/* Drawer Handle */}
                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />

                    {/* Filter Content */}
                    <FilterSidebar
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onClearFilters={handleClearFilters}
                    />

                    {/* Apply Button */}
                    <button
                        onClick={() => setIsFilterOpen(false)}
                        className="w-full mt-6 px-6 py-3 rounded-full font-semibold"
                        style={{ backgroundColor: '#D4E7C5', color: '#2C3E50' }}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecipesPage
