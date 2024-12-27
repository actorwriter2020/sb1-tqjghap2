import React from 'react';

interface AnimeStudioBadgeProps {
  studio: string;
}

const AnimeStudioBadge: React.FC<AnimeStudioBadgeProps> = ({ studio }) => {
  return (
    <span className="inline-block bg-purple-500/20 text-purple-200 text-sm px-3 py-1 rounded-full">
      {studio}
    </span>
  );
}

export default AnimeStudioBadge;