import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <div className="pixel-card group">
      <div className="relative overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-indigo-600/80 opacity-0 group-hover:opacity-100 
                      transition-opacity flex items-center justify-center">
          <a href={link} 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white">
            <ExternalLink className="w-8 h-8" />
          </a>
        </div>
      </div>
      <h3 className="retro-text text-sm mb-2 text-indigo-950">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}