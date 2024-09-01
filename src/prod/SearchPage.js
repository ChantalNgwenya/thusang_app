import React, { useState } from 'react';
import { Search, MapPin, Briefcase, MoreHorizontal, Calendar, Settings } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulating API call to fetch nearby health facilities
    const mockResults = [
      "Central Hospital",
      "Parktown Clinic",
      "Rosebank Medical Center",
      "7th Avenue Health",
      "Parkwood Family Practice"
    ];
    setSearchResults(mockResults);
  };

  return (
    <div className="container">
      <div className="map-background">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <Search className="search-icon" />
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">Home</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            <span className="text-sm">Work</span>
          </div>
          <div className="flex items-center">
            <MoreHorizontal className="h-4 w-4" />
            <span className="text-sm">More</span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-4">
        <h2 className="text-lg font-semibold mb-2">Recent</h2>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} className="mb-2">{result}</li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No searches...</p>
        )}
      </div>
      
      <div className="bg-white border-t border-gray-200">
        <div className="flex justify-around p-4">
          <button className="flex flex-col items-center">
            <MapPin className="h-6 w-6 text-green-600" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Search className="h-6 w-6" />
            <span className="text-xs mt-1">Consult</span>
          </button>
          <button className="flex flex-col items-center">
            <Calendar className="h-6 w-6" />
            <span className="text-xs mt-1">Schedule</span>
          </button>
          <button className="flex flex-col items-center">
            <Settings className="h-6 w-6" />
            <span className="text-xs mt-1">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;