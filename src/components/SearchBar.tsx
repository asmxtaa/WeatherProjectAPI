import React, { useState, KeyboardEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/70 shadow-lg"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-500/80 backdrop-blur-md text-white rounded-lg hover:bg-blue-600/80 transition-colors flex items-center gap-2 shadow-lg"
      >
        <Search size={20} />
        Search
      </button>
    </div>
  );
};