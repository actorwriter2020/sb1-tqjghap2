import React from 'react';
import { Star } from 'lucide-react';
import WatchNowButton from './WatchNowButton';
import { streamingLinks } from '../../config/streaming';
import { images } from '../../config/images';

interface AnimeCardProps {
  anime: {
    title: string;
    rating?: string;
    genre: string;
    image?: string;
    releaseDate?: string;
    streamingKey?: keyof typeof streamingLinks;
  };
  rank?: number;
}

const AnimeCard = ({ anime, rank }: AnimeCardProps) => {
  return (
    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
      {anime.image && (
        <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg group">
          <img
            src={anime.image || images.fallback}
            alt={anime.title}
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {anime.streamingKey && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <WatchNowButton animeKey={anime.streamingKey} />
            </div>
          )}
        </div>
      )}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-white font-bold">{anime.title}</h3>
          <p className="text-white/70">{anime.genre}</p>
          {anime.releaseDate && (
            <p className="text-white/70 text-sm">{anime.releaseDate}</p>
          )}
        </div>
        {rank && <div className="text-2xl font-bold text-white/50">#{rank}</div>}
      </div>
      {anime.rating && (
        <div className="mt-2 flex items-center text-yellow-400">
          <Star className="w-4 h-4 mr-1" />
          <span>{anime.rating}</span>
        </div>
      )}
    </div>
  );
};

export default AnimeCard;