import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold logo" style={{ color: '#2C3E50' }}>
            Four\Spoons
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-[#D4E7C5] transition"
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className="text-gray-700 hover:text-[#D4E7C5] transition"
            >
              Recipes
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-[#D4E7C5] transition"
            >
              About
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/recipes" 
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar