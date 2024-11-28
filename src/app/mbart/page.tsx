'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

export default function MbartPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Halo! Anda sedang menggunakan article text summarization dengan model mBART", isUser: false },
  ]);

  interface mBartResponse {
    summary?: string;
    error?: string;
  }

  const handleSendMessage = async (message: string) => {
    try {
      setMessages(prev => [...prev, { text: message, isUser: true }]);
      setMessages(prev => [...prev, { text: "Sedang memproses...", isUser: false }]);
  
      const response = await fetch(`${API_URL}/mbart-summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });
  
      const data: mBartResponse = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Terjadi kesalahan');
      }
  
      setMessages(prev => {
        const newMessages = prev.slice(0, -1);
        return [...newMessages, { text: data.summary!, isUser: false }];
      });
  
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => {
        const newMessages = prev.slice(0, -1);
        return [...newMessages, { 
          text: error instanceof Error ? error.message : 'Terjadi kesalahan tidak diketahui', 
          isUser: false 
        }];
      });
    }
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
          <h1 className="text-white font-semibold">MBART Article Text Summarizer</h1>
          <div className="flex gap-4">
          <Link href="/bart">
          <button className="px-5 py-1 text-sm text-white bg-transparent hover:bg-[#303030] rounded-3xl outline-none outline-white">
              BART
            </button>
          </Link>
          <Link href="/mbart">
            <button className="px-5 py-1 text-sm text-black bg-white rounded-3xl ">
              mBART
            </button>
          </Link>
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
