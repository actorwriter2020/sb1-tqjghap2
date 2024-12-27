import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { upcomingEvents } from '../data/events';
import PurchaseButton from './common/PurchaseButton';

const UpcomingEvents = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {upcomingEvents.map((event) => (
        <div
          key={event.id}
          className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-colors duration-300"
        >
          <div className="flex">
            <div className="w-1/3 relative group">
              <a
                href={event.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Visit Website</span>
                </div>
              </a>
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                <a
                  href={event.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors"
                >
                  {event.name}
                </a>
              </h3>
              <div className="space-y-2">
                <p className="text-white/90 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </p>
                <p className="text-white/90 flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </p>
              </div>
              <PurchaseButton eventId={event.id} className="mt-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;