import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "DELIVERY MANAGEMENT PLATFORM",
    description: "A full-feature delivery management platform with presence in several countries",
    image: "./project1.png",
    link: "https://timetoeat.io"
  },
  {
    title: "NEXT-GEN CRYPTO WALLET",
    description: "Real-time cryptocurrency tracking application with a smart wallet feature",
    image: "./project2.png",
    link: "https://haha.me"
  },
  {
    title: "BUS TRACKING APP",
    description: "Real-time bus tracking application",
    image: "./project3.png",
    link: "http://rasp.orgp.spb.ru"
  },
  {
  title: "STUDING PLATFORM",
    description: "Full-feature studying platform with real-time collaboration",
    image: "./project4.png",
    link: "https://onclass.com"
  }
];

export function Portfolio() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="font-pixel text-2xl text-center mb-16 tracking-wider">SOME OF OUR PROJECTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}