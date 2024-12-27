import React from 'react';
import { Calendar } from 'lucide-react';
import { upcomingAnime2025 } from '../data/upcomingAnime';
import UpcomingAnimeCard from '../components/anime/UpcomingAnimeCard';

const UpcomingAnime = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
        <Calendar className="mr-2" /> Upcoming Anime 2025
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingAnime2025.map((anime, index) => (
          <UpcomingAnimeCard key={index} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingAnime;