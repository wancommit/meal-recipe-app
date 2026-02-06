import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden" 
      style={{ backgroundColor: '#FAF7F0' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4" 
          style={{ color: '#2C3E50' }}
        >
          Your passport to 
          <br />
      easy flavors
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
          From street food to comfort bowls, discover simple global eats you can whip up with joy — no passport required.
        </p>
        
        {/* CTA Button */}
        <Link 
          to="/recipes"
          className="inline-block px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105"
          style={{ 
            backgroundColor: '#D4E7C5',
            color: '#2C3E50'
          }}
        >
          Cook with us!
        </Link>
      </div>

      {/* Hero Graphic */}
      <div className="mt-10 sm:mt-16">
        <img 
          src="./assets/hero-illustration.svg" 
          alt="Hero illustration" 
          className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-2xl"
        />
      </div>
    </div>
  )
}

export default LandingPage
