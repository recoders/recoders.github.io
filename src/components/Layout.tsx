import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-indigo-950 text-white font-pixel">
      {children}
    </div>
  );
}