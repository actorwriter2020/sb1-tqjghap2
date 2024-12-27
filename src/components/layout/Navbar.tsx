import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageSquare, Calendar, Trophy, Newspaper, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-purple-900/50 backdrop-blur-lg py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-white text-xl font-bold">
            <Sparkles className="mr-2" />
            AnimeDaimyo
          </Link>
          <div className="flex space-x-6">
            <Link to="/top-2024" className="text-white hover:text-purple-200 flex items-center">
              <Trophy className="w-4 h-4 mr-1" /> Top 2024
            </Link>
            <Link to="/all-time" className="text-white hover:text-purple-200 flex items-center">
              <Star className="w-4 h-4 mr-1" /> All Time
            </Link>
            <Link to="/upcoming" className="text-white hover:text-purple-200 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> Upcoming
            </Link>
            <Link to="/articles" className="text-white hover:text-purple-200 flex items-center">
              <Newspaper className="w-4 h-4 mr-1" /> Articles
            </Link>
            <Link to="/message-board" className="text-white hover:text-purple-200 flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" /> Forum
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;