import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import CTA from '../components/CTA';
import BookingForm from '../components/BookingForm';
import ScrollBanner from '../components/ScrollBanner';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <ScrollBanner />
      <Services />
      <CTA />
      <BookingForm />
    </>
  );
};

export default HomePage;