import React from 'react';
import { Sparkles } from 'lucide-react';
import ConventionSearch from './ConventionSearch';

const Hero = () => {
  return (
    <header className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.myanimelist.net/images/anime/1441/122795l.jpg"
          alt="Spy x Family"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-purple-900/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl flex items-center justify-center">
          <Sparkles className="inline-block mr-2 h-8 w-8 md:h-12 md:w-12" />
          AnimeDaimyo
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-200 mb-4 font-medium">
          Featured: Spy × Family
        </h2>
        <p className="text-lg text-white/90 mb-6 drop-shadow-lg max-w-2xl mx-auto">
          Your Ultimate Guide to Anime Conventions Across the Country!
        </p>
        <div className="max-w-xl mx-auto">
          <ConventionSearch />
        </div>
      </div>
    </header>
  );
}

export default Hero;