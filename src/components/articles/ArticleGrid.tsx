import React from 'react';
import { articles } from '../../data/articles';
import LearnMoreButton from '../common/LearnMoreButton';

const ArticleGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      {articles.map((article, index) => (
        <article key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
            <p className="text-white/70 mb-4">{article.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-sm">{article.date}</span>
              <LearnMoreButton articleId={index + 1} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleGrid;