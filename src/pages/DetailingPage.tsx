import React from 'react';
import InteriorDetailingSection from '../components/InteriorDetailingSection';
import ExteriorDetailingSection from '../components/ExteriorDetailingSection';
import ScrollBanner from '../components/ScrollBanner';

const DetailingPage = () => {
  return (
    <>
      <InteriorDetailingSection />
      <ScrollBanner />
      <ExteriorDetailingSection />
    </>
  );
};

export default DetailingPage;