import React, { useState, useEffect } from 'react';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailingPage from './pages/DetailingPage';
import TuningPage from './pages/TuningPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    // First: Show loader for minimum 4 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Second: Load all content in background
    const contentLoadTimer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 100); // Small delay to ensure loader renders first

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentLoadTimer);
    };
  }, []);

  // Show only loader until loading completes
  if (isLoading) {
    return <PageLoader setLoading={setIsLoading} />;
  }

  // Show blank screen while content loads (optional)
  if (!isContentLoaded) {
    return <div className="fixed inset-0 bg-gray-900 z-50" />;
  }

  // Show full content when everything is ready
  return (
    <BrowserRouter basename="/spabs">

    <Routes>
      <div className="min-h-screen bg-gray-50" style={{ overflowX: 'hidden' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailing" element={<DetailingPage />} />
          <Route path="/tuning" element={<TuningPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Routes>

    </BrowserRouter>


  );
};

export default App;