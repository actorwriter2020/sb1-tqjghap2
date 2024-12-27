import React from 'react';
import { Play } from 'lucide-react';
import { streamingLinks } from '../../config/streaming';

interface WatchNowButtonProps {
  animeKey: keyof typeof streamingLinks;
  className?: string;
}

const WatchNowButton = ({ animeKey, className = '' }: WatchNowButtonProps) => {
  const handleWatch = () => {
    const url = streamingLinks[animeKey];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleWatch}
      className={`flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 ${className}`}
    >
      <Play className="w-4 h-4" /> Watch Now
    </button>
  );
};

export default WatchNowButton;