import React from 'react';
import { Trophy, Star, TrendingUp } from 'lucide-react';
import { animeImages } from '../config/images';

const TopAnimeList = () => {
  const allTimeAnime = [
    { rank: 1, title: "Fullmetal Alchemist: Brotherhood", rating: "9.1", image: animeImages.fullmetalAlchemist },
    { rank: 2, title: "Steins;Gate", rating: "9.0", image: animeImages.steinsGate },
    { rank: 3, title: "Death Note", rating: "8.9", image: animeImages.deathNote },
    { rank: 4, title: "Attack on Titan", rating: "8.9", image: animeImages.attackOnTitan },
    { rank: 5, title: "Hunter x Hunter", rating: "8.8", image: animeImages.hunterXHunter }
  ];

  const top2024Anime = [
    { rank: 1, title: "Solo Leveling", rating: "8.9", image: animeImages.soloLeveling },
    { rank: 2, title: "Classroom of the Elite Season 3", rating: "8.7", image: animeImages.classroomOfElite },
    { rank: 3, title: "Mushoku Tensei Season 2", rating: "8.6", image: animeImages.mushokuTensei },
    { rank: 4, title: "Black Butler -Public School Arc-", rating: "8.5", image: animeImages.defaultAnime },
    { rank: 5, title: "Kaiju No. 8", rating: "8.4", image: animeImages.defaultAnime }
  ];

  // Rest of the component remains the same
  return (
    // ... existing JSX
  );
};

export default TopAnimeList;