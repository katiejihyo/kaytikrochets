import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import PatternPage from './pages/PatternPage';
import AllPatterns from './pages/AllPatterns';
import AboutMe from './pages/AboutMe';

// Counts a pageview in GoatCounter on every route change (SPA-aware).
// Safe no-op locally or if the script is blocked by an ad blocker.
const Analytics = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname + location.search;
    let tries = 0;
    // The GoatCounter script loads async, so on the first view it may not be
    // ready yet — retry briefly until count() exists, then stop.
    const send = () => {
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path });
      } else if (tries++ < 20) {
        setTimeout(send, 150);
      }
    };
    send();
  }, [location]);
  return null;
};

const App = () => {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<AllPatterns />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/patterns/:id" element={<PatternPage />} />
        {/* legacy routes → keep old links working */}
        <Route path="/pages/AllPatterns" element={<AllPatterns />} />
        <Route path="/pages/AboutMe" element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App
