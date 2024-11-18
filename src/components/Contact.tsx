import React from 'react';
import { RetroButton } from './RetroButton';

export function Contact() {
  return (
    <section className="bg-indigo-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-pixel text-2xl mb-8 tracking-wider">START A QUEST WITH US</h2>
        <p className="text-indigo-200 mb-8 font-pixel text-sm leading-relaxed">
          Ready to transform your digital presence?
        </p>
        <RetroButton><a href='mailto:contact@re-coders.com'>CONTACT US</a></RetroButton>
      </div>
    </section>
  );
}