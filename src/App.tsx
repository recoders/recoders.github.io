import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;