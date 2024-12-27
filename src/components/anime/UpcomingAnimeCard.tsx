import React from 'react';
import { Calendar, Film } from 'lucide-react';
import AnimeStudioBadge from './AnimeStudioBadge';

interface UpcomingAnimeCardProps {
  anime: {
    title: string;
    genre: string;
    releaseDate: string;
    image: string;
    studio: string;
  };
}

const UpcomingAnimeCard: React.FC<UpcomingAnimeCardProps> = ({ anime }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/15 transition-colors">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{anime.title}</h3>
        <div className="space-y-3">
          <p className="text-white/70 flex items-center">
            <Film className="w-4 h-4 mr-2" />
            {anime.genre}
          </p>
          <p className="text-white/70 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {anime.releaseDate}
          </p>
          <AnimeStudioBadge studio={anime.studio} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingAnimeCard;