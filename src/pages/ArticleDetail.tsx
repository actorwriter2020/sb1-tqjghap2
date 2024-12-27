import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Article not found</h1>
          <Link 
            to="/articles" 
            className="inline-flex items-center text-purple-300 hover:text-purple-200"
          >
            <ArrowLeft className="mr-2" /> Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-purple-300 hover:text-purple-200 mb-4"
          >
            <ArrowLeft className="mr-2" /> Back to Articles
          </Link>
          <h1 className="text-3xl font-bold text-white mb-4">{article.title}</h1>
          <div className="text-white/70 space-y-4">
            <p className="text-lg font-medium">{article.excerpt}</p>
            <div className="mt-6 space-y-4 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
            <p className="text-sm text-white/50 mt-8">{article.date}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;