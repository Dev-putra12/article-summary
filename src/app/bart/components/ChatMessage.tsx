import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className={`mb-4 ${isUser ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
