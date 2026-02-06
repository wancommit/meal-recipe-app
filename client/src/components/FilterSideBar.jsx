function FilterSidebar({ filters, onFilterChange, onClearFilters }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4" style={{ color: '#2C3E50' }}>
        Filter by
      </h3>
      
      {/* Country Dropdown */}
      <div className="relative mb-6">
        <select
          value={filters.country}
          onChange={(e) => onFilterChange('country', e.target.value)}
          className="appearance-none w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          style={{ 
            backgroundColor: '#2C3E50',
            color: 'white'
          }}
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Italy">Italy</option>
          <option value="Ghana">Ghana</option>
          <option value="Mexico">Mexico</option>
          <option value="Thailand">Thailand</option>
          <option value="France">France</option>
          <option value="Japan">Japan</option>
          <option value="India">India</option>
          <option value="Spain">Spain</option>
          <option value="Brazil">Brazil</option>
          <option value="Vietnam">Vietnam</option>
          <option value="UK">UK</option>
          <option value="Greece">Greece</option>
          <option value="Israel">Israel</option>
        </select>
        {/* Custom Arrow */}
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      
      {/* Type Radio Buttons */}
      <div className="mb-6">
        <h4 className="font-medium mb-3" style={{ color: '#2C3E50' }}>Type</h4>
        
        <label className="flex items-center mb-2 cursor-pointer">
          <input
            type="radio"
            name="mealType"
            value="breakfast"
            checked={filters.mealType === 'breakfast'}
            onChange={(e) => onFilterChange('mealType', e.target.value)}
            className="mr-2"
          />
          <span className="text-gray-700">Breakfast</span>
        </label>
        
        <label className="flex items-center mb-2 cursor-pointer">
          <input
            type="radio"
            name="mealType"
            value="lunch"
            checked={filters.mealType === 'lunch'}
            onChange={(e) => onFilterChange('mealType', e.target.value)}
            className="mr-2"
          />
          <span className="text-gray-700">Lunch</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="mealType"
            value="dinner"
            checked={filters.mealType === 'dinner'}
            onChange={(e) => onFilterChange('mealType', e.target.value)}
            className="mr-2"
          />
          <span className="text-gray-700">Dinner</span>
        </label>
      </div>
      
      {/* Duration Radio Buttons */}
      <div className="mb-6">
        <h4 className="font-medium mb-3" style={{ color: '#2C3E50' }}>Duration</h4>
        
        <label className="flex items-center mb-2 cursor-pointer">
          <input
            type="radio"
            name="duration"
            value="short"
            checked={filters.duration === 'short'}
            onChange={(e) => onFilterChange('duration', e.target.value)}
            className="mr-2"
          />
          <span className="text-gray-700">Short (≤ 10 mins)</span>
        </label>
        
        <label className="flex items-center mb-2 cursor-pointer">
          <input
            type="radio"
            name="duration"
            value="medium"
            checked={filters.duration === 'medium'}
            onChange={(e) => onFilterChange('duration', e.target.value)}
            className="mr-2"
          />
          <span className="text-gray-700">Medium (≥45 mins)</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="duration"
            value="long"
            checked={filters.duration === 'long'}
            onChange={(e) => onFilterChange('duration', e.target.value)}
            className="mr-2"
          />
          <span className="text-gray-700">Long (11–45 mins)</span>
        </label>
      </div>
      
      {/* Clear Filter Button */}
      <button
        onClick={onClearFilters}
        className="w-full text-left text-red-600 hover:text-red-700 flex items-center gap-2"
      >
        <span>🗑️</span>
        <span>Clear filter</span>
      </button>
    </div>
  )
}

export default FilterSidebar
