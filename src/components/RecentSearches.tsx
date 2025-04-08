import React from 'react';
import { History } from 'lucide-react';

interface RecentSearchesProps {
  searches: string[];
  onSelect: (city: string) => void;
}

export const RecentSearches: React.FC<RecentSearchesProps> = ({ searches, onSelect }) => {
  if (searches.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-2">
        <History size={20} className="text-white" />
        <h3 className="text-lg font-semibold text-white">Recent Searches</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {searches.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm text-white border border-white/20 hover:bg-white/20 transition-colors"
          >
          {city}
          </button>
        ))}
      </div>
    </div>
  );
};