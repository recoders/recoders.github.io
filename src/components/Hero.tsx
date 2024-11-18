import React from 'react';
import { RetroButton } from './RetroButton';

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-pixel text-6xl mb-8 leading-relaxed tracking-wider">
          RE-CODERS
          <br />
          <span className="text-indigo-400">DEVELOPMENT</span>
        </h1>
        <p className="mb-12 text-indigo-200 font-pixel text-xl leading-relaxed">
          We craft digital experiences with retro charm and modern technology
        </p>
        <RetroButton><a href='#contact'>START PROJECT →</a></RetroButton>
      </div>
    </header>
  );
}