import React from 'react';
import { Star } from 'lucide-react';
import AnimeCard from '../components/anime/AnimeCard';
import { allTimeTopAnime } from '../data/allTimeAnime';

const AllTimeAnime = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
        <Star className="mr-2" /> Top Anime of All Time
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Action & Adventure</h2>
          <div className="space-y-4">
            {allTimeTopAnime.action.map((anime, index) => (
              <AnimeCard key={index} anime={anime} rank={index + 1} />
            ))}
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Drama & Romance</h2>
          <div className="space-y-4">
            {allTimeTopAnime.drama.map((anime, index) => (
              <AnimeCard key={index} anime={anime} rank={index + 1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllTimeAnime;