'use client';

import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

export default function BartPage() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulasi respons dari API (ganti dengan panggilan API asli nanti)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: `Respons untuk: ${message}`, isUser: false }]);
    }, 1000);
    
    // Uncomment dan sesuaikan kode di bawah ini ketika Anda siap mengintegrasikan dengan API Flask
    /*
    try {
      const response = await fetch('http://your-flask-api-url/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.summary, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { text: 'Terjadi kesalahan saat memproses permintaan Anda.', isUser: false }]);
    }
    */
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
