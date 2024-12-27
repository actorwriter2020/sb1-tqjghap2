import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ConventionSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for conventions..."
          className="w-full px-6 py-4 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 border-2 border-white/30 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
      </div>
    </div>
  );
};

export default ConventionSearch;