function AboutPage() {
  return (
     <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#2C3E50' }}>
        About Recipe\me
      </h1>
      
      <div className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg text-gray-700">
          Recipe\me was built for my sister who loves exploring cuisines from around the world
          but found existing recipe apps cluttered and overwhelming.
        </p>
        
        <p className="text-base sm:text-lg text-gray-700">
          I designed and built this app to be clean, focused, and delightful to use.
        </p>
        
        <h2 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8" style={{ color: '#2C3E50' }}>
          Tech Stack
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
          <li>React + Vite</li>
          <li>Tailwind CSS</li>
          <li>Node.js + Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>

  )
}

export default AboutPage