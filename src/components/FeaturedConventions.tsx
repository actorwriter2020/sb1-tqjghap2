import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { featuredConventions } from '../data/conventions';

const FeaturedConventions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredConventions.map((convention) => (
        <a
          key={convention.id}
          href={convention.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <div className="relative h-48">
            <img
              src={convention.image}
              alt={convention.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{convention.name}</h3>
            <div className="space-y-2">
              <p className="text-white/90 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {convention.location}
              </p>
              <p className="text-white/90 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {convention.date}
              </p>
              <p className="text-white/90 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {convention.attendees} Expected
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FeaturedConventions;