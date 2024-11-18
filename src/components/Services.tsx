import React from 'react';
import { Code, Gamepad2, Zap, Cpu, Phone, Smartphone, SmartphoneIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  { icon: <Code className="w-8 h-8" />, title: "Web Development" },
  { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Apps" },
  { icon: <Zap className="w-8 h-8" />, title: "Performance Optimization" },
  { icon: <Cpu className="w-8 h-8" />, title: "Crypto Solutions" }
];

export function Services() {
  return (
    <section className="bg-indigo-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-2xl text-center mb-16 tracking-wider">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}