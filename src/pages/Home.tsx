import React from 'react';
import Hero from '../components/Hero';
import FeaturedConventions from '../components/FeaturedConventions';
import LatestArticles from '../components/articles/LatestArticles';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <div>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FeaturedConventions />
        <LatestArticles />
        <UpcomingEvents />
      </main>
    </div>
  );
};

export default Home;