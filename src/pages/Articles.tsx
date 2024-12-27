import React from 'react';
import { Newspaper } from 'lucide-react';
import ArticleGrid from '../components/articles/ArticleGrid';
import FeaturedArticle from '../components/articles/FeaturedArticle';

const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center">
        <Newspaper className="mr-2" /> Articles
      </h1>
      
      <FeaturedArticle />
      <ArticleGrid />
    </div>
  );
};

export default Articles;