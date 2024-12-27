import React from 'react';
import { TrendingUp, MessageCircle } from 'lucide-react';

const PopularTopics = () => {
  const popularTopics = [
    { name: "Anime Recommendations", threads: 156 },
    { name: "Seasonal Discussions", threads: 124 },
    { name: "Industry News", threads: 98 },
    { name: "Fan Theories", threads: 87 },
    { name: "Manga Adaptations", threads: 76 }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <TrendingUp className="mr-2" /> Popular Topics
      </h2>
      <div className="space-y-3">
        {popularTopics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between text-white/70 hover:text-white transition-colors cursor-pointer">
            <span>{topic.name}</span>
            <span className="flex items-center text-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              {topic.threads}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;