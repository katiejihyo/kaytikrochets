import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PatternPage from './pages/PatternPage';
import AllPatterns from './pages/AllPatterns';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patterns" element={<AllPatterns />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/patterns/:id" element={<PatternPage />} />
      {/* legacy routes → keep old links working */}
      <Route path="/pages/AllPatterns" element={<AllPatterns />} />
      <Route path="/pages/AboutMe" element={<AboutMe />} />
    </Routes>
  )
}

export default App
