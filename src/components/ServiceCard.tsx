import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

export function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="pixel-card text-center">
      <div className="text-indigo-600 mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="font-pixel text-sm text-indigo-950 tracking-wider">
        {title}
      </h3>
    </div>
  );
}