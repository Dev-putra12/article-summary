'use client';

import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

export default function BartPage() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hey! How's it going?", isUser: false },
  ]);

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Simulasi respons dari API (ganti dengan panggilan API asli nanti)
    setTimeout(() => {
      setMessages(prev => [...prev, { text: `Respons untuk: ${message}`, isUser: false }]);
    }, 1000);
  };
    
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

  return (
    <div className="flex flex-col h-screen bg-[#212121]">
      <header className="border-b border-gray-800 p-2">
        <div className="max-w-full mx-auto flex items-center justify-between px-5">
          <h1 className="text-white font-semibold">BART Article Text Summarizer</h1>
          <div className="flex gap-4">
            <button className="px-5 py-1 text-sm text-black bg-white rounded-3xl ">
              BART
            </button>
            <button className="px-5 py-1 text-sm text-white bg-transparent hover:bg-[#303030] rounded-3xl outline-none outline-white">
              mBART
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <ChatWindow messages={messages} />
      </main>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
