import React from 'react';
import LearnMoreButton from '../common/LearnMoreButton';

const FeaturedArticle = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-96 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80"
            alt="Featured article"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-purple-300 font-semibold mb-2">Featured Article</span>
          <h2 className="text-3xl font-bold text-white mb-4">
            The Rise of Cyberpunk Anime in 2024
          </h2>
          <p className="text-white/70 mb-6">
            Exploring the surge of cyberpunk-themed anime releases this year and their impact on the industry. From groundbreaking animation techniques to compelling storytelling...
          </p>
          <LearnMoreButton articleId={0} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;