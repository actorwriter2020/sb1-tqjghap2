import React from 'react';
import { Trophy, Flame, Play } from 'lucide-react';

const anticipatedAnime = [
  {
    title: "Delicious in Dungeon",
    votes: "9.8%",
    platform: "Netflix",
    url: "https://www.netflix.com/title/81632163",
    note: "Full series available with Netflix subscription"
  },
  {
    title: "Frieren: Beyond Journey's End",
    votes: "9.2%",
    platform: "Crunchyroll",
    url: "https://beta.crunchyroll.com/series/G0XHWM5WG/frieren-beyond-journeys-end",
    note: "First episode free, full series with subscription"
  },
  {
    title: "The Apothecary Diaries",
    votes: "8.9%",
    platform: "Crunchyroll",
    url: "https://beta.crunchyroll.com/series/GG5H5XE45/the-apothecary-diaries",
    note: "First episode free, full series with subscription"
  },
  {
    title: "Solo Leveling",
    votes: "8.7%",
    platform: "Crunchyroll",
    url: "https://beta.crunchyroll.com/series/GDKHZEP8K/solo-leveling",
    note: "First episode free, full series with subscription"
  },
  {
    title: "Classroom of the Elite III",
    votes: "8.5%",
    platform: "Crunchyroll",
    url: "https://beta.crunchyroll.com/series/GRVN8MNQY/classroom-of-the-elite",
    note: "First episode free, full series with subscription"
  }
];

const AnticipatedAnime = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <Trophy className="mr-2" /> Most Anticipated Anime 2024-2025
      </h2>
      <div className="space-y-4">
        {anticipatedAnime.map((anime, index) => (
          <div
            key={index}
            className="block bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-purple-300">#{index + 1}</span>
                  {index === 0 && <Flame className="text-yellow-500" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {anime.title}
                </h3>
                <div className="space-y-2">
                  <div className="bg-purple-500/20 rounded-full px-3 py-1 inline-block">
                    <span className="text-purple-200">{anime.votes} anticipated</span>
                  </div>
                  <p className="text-white/70 text-sm">{anime.note}</p>
                  <p className="text-purple-300 text-sm">Available on {anime.platform}</p>
                </div>
              </div>
              <a
                href={anime.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-300 hover:text-purple-200 px-6 py-3 border border-purple-300 hover:border-purple-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <Play className="w-4 h-4" />
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnticipatedAnime;