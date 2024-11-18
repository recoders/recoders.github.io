import React from 'react';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function RetroButton({ children, onClick }: RetroButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="pixel-button font-pixel text-sm tracking-wider"
    >
      {children}
    </button>
  );
}