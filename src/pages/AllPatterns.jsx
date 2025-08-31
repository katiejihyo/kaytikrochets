import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import patterns from '../data/patterns'
import { Link } from 'react-router-dom'

const AllPatterns = () => {
  const [query, setQuery] = useState("")

  useEffect(() => {
    document.title = "Kayti Krochets - All Patterns";
  }, []);

  const filteredPatterns = [...patterns]
    .reverse()
    .filter(pattern =>
      pattern.title.toLowerCase().includes(query.toLowerCase()) ||
      pattern.description.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-40 py-10">
        <p className="text-center alex-font text-4xl pt-8 pb-4">𐙚 All Patterns 𐙚</p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search patterns"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mb-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {filteredPatterns.map((pattern) => (
          <Link
            key={pattern.id}
            to={`/patterns/${pattern.id}`}
            className="pattern-grid-box flex flex-row items-start mb-8 hover:shadow-lg transition duration-200 rounded-xl p-4"
          >
            <img
              src={pattern.image}
              alt={pattern.title}
              className="w-32 h-32 object-cover rounded-2xl"
            />
            <div className="mt-2 ml-6">
              <h1 className="text-xl font-bold jeju-font">{pattern.title}</h1>
              <p className="mt-2">{pattern.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default AllPatterns
