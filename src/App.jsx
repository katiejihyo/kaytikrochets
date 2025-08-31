import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import PatternPage from './pages/PatternPage';
import AllPatterns from './pages/AllPatterns';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/AllPatterns" element={<AllPatterns />} />
        <Route path="/pages/AboutMe" element={<AboutMe />} />
        <Route path="/patterns/:id" element={<PatternPage />} />
      </Routes>
    </>
  )
}

export default App