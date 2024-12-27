import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-900/50 backdrop-blur-lg py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-white">
          <p>Made with <Heart className="inline-block w-4 h-4 mx-1 text-red-400" /> by AnimeDaimyo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;