import React from 'react';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import FeaturedTrips from '../components/FeaturedTrips';
import Awards from '../components/Awards';
import NewbieTours from '../components/NewbieTours';

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <NewbieTours />
      <FeaturedTrips />
      <Awards />
    </main>
  );
}