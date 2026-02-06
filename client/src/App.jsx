// import { useState } from 'react'
// import RecipeList from './components/RecipeList'  
// import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import RecipesPage from './pages/RecipesPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import AboutPage from './pages/AboutPage'






function App() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
