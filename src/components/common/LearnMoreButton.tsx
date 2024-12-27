import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LearnMoreButtonProps {
  articleId: number;
  className?: string;
}

const LearnMoreButton = ({ articleId, className = '' }: LearnMoreButtonProps) => {
  const navigate = useNavigate();

  const handleLearnMore = (id: number) => {
    navigate(`/articles/${id}`);
  };

  return (
    <button
      onClick={() => handleLearnMore(articleId)}
      className={`flex items-center text-purple-300 hover:text-purple-200 transition-colors ${className}`}
    >
      Read More <ArrowRight className="ml-2 w-4 h-4" />
    </button>
  );
};

export default LearnMoreButton;