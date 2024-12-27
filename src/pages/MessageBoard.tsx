import React from 'react';
import { MessageSquare } from 'lucide-react';
import ThreadList from '../components/forum/ThreadList';
import PopularTopics from '../components/forum/PopularTopics';

const MessageBoard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white flex items-center">
          <MessageSquare className="mr-2" /> Message Board
        </h1>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
          New Thread
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ThreadList />
        </div>
        <div className="lg:col-span-1">
          <PopularTopics />
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;