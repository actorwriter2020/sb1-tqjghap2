import React from 'react';
import { MessageCircle, ThumbsUp } from 'lucide-react';
import { forumThreads } from '../../data/forum';

const ThreadList = () => {
  return (
    <div className="space-y-4">
      {forumThreads.map((thread, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-2">{thread.title}</h3>
          <p className="text-white/70 mb-4">{thread.preview}</p>
          <div className="flex items-center space-x-4 text-white/50">
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {thread.replies}
            </span>
            <span className="flex items-center">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {thread.likes}
            </span>
            <span>Posted by {thread.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;