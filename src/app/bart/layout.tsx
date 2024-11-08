import React from 'react';

export default function BartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">BART Text Summarizer</h1>
      {children}
    </section>
  );
}
