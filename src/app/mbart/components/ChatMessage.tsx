import React from 'react';
import Image from 'next/image';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className="px-4 py-2 hover:bg-gray-800/50">
    <div className="max-w-3xl mx-auto flex gap-4 items-start">
      {!isUser && (
        <div className="w-content h-content rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <Image
            src="/assets/bart.png"  // path relatif dari folder public
            alt="AI Avatar"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
      )}
        <div className={`flex-1 ${isUser ? 'text-white text-right' : 'text-gray-100'}`}>
          {message}
        </div>
        {isUser && (
        <div className="w-content h-content rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 overflow-hidden">
        <Image
          src="/assets/user.png"  // path relatif dari folder public
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
