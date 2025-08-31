import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import patterns from '../data/patterns';

const PatternPage = () => {
  const { id } = useParams();
  const pattern = patterns.find(p => p.id === id);

  if (!pattern) {
    return <div className="text-center mt-10">Pattern not found.</div>;
  }
  const instructions = pattern.instructions ? pattern.instructions : null;

  document.title = pattern.title;

  return (
    <>
      <Navbar />
      <div className=" flex flex-col p-10 ml-100 mr-100">
        <h1 className="text-3xl jeju-font mb-4">{pattern.title}</h1>
        <img src={pattern.image} alt={pattern.title} className="w-450 mb-4" />
        <p className="mb-2">{pattern.description}</p>
        {/* Materials List */}
        {pattern.materials && (
          <div className="mb-6 w-full">
            <h2 className="text-xl font-semibold mb-2 jeju-font text-red-800">Materials</h2>
            <ul className="list-disc list-inside text-left">
              {pattern.materials.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Abbreviations List */}
        {pattern.abbreviations && (
          <div className="mb-6 w-full">
            <h2 className="text-xl font-semibold mb-2 jeju-font text-red-800">Abbreviations</h2>
            <ul className="list-disc list-inside text-left">
              {pattern.abbreviations.map((abbr, index) => (
                <li key={index}>{abbr}</li>
              ))}
            </ul>
          </div>
        )}
        {pattern.instructions && (
          <div>
            <h2 className="text-xl font-semibold mb-2 jeju-font text-red-800">Instructions</h2>
            <div
              className="instructions text-left leading-relaxed"
              dangerouslySetInnerHTML={{ __html: pattern.instructions }}
            ></div>
          </div>
        )}

        {/* YouTube Video Embed */}
        <h2 className="text-xl font-semibold mb-2 jeju-font text-red-800">Video:</h2>

        {pattern.video && (
          <div className="w-full flex justify-center mt-6">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${pattern.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PatternPage;
