import React from 'react';
import { Trophy } from 'lucide-react';
import AnticipatedAnime from '../components/anime/AnticipatedAnime';

const AnimeList2024 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
        <Trophy className="mr-2" /> Top Anime of 2024
      </h1>
      
      <div className="grid grid-cols-1 gap-8">
        <AnticipatedAnime />
      </div>
    </div>
  );
};

export default AnimeList2024;