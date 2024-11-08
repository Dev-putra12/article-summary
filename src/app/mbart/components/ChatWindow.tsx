import React from 'react';
import ChatMessage from './ChatMessage';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex flex-col">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message.text} isUser={message.isUser} />
      ))}
    </div>
  );
};

export default ChatWindow;
