import React, { useEffect, useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import patterns from '../data/patterns'
import { Link } from 'react-router-dom'

const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const AllPatterns = () => {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [category, setCategory] = useState("All");

  useEffect(() => { document.title = "Patterns · Kayti Krochets"; }, []);

  const categories = useMemo(() => {
    const set = new Set(patterns.map((p) => p.category).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    return [...patterns]
      .reverse()
      .filter((p) => {
        const q = query.toLowerCase();
        const matchesQuery =
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q);
        const matchesDiff = difficulty === "All" || p.difficulty === difficulty;
        const matchesCat = category === "All" || p.category === category;
        return matchesQuery && matchesDiff && matchesCat;
      });
  }, [query, difficulty, category]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-5 sm:px-8 py-12">
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">{patterns.length} free patterns</p>
          <h1 className="alex-font text-5xl sm:text-6xl text-cocoa">All Patterns</h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-5 mb-10">
          <input
            type="text"
            placeholder="Search by name or description…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-xl mx-auto px-5 py-3 rounded-full border border-shell bg-white jeju-font text-cocoa placeholder:text-cocoa-soft/60 focus:outline-none focus:ring-2 focus:ring-rose/40"
          />

          <div className="flex flex-wrap gap-2 justify-center">
            {DIFFICULTIES.map((d) => (
              <button key={d} className="filter-pill" data-active={difficulty === d} onClick={() => setDifficulty(d)}>
                {d}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button key={c} className="filter-pill" data-active={category === c} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="alex-font text-4xl text-cocoa mb-3">No patterns match yet</p>
            <p className="jeju-font text-cocoa-soft mb-6">Try clearing a filter or searching something else.</p>
            <button className="btn-ghost" onClick={() => { setQuery(""); setDifficulty("All"); setCategory("All"); }}>
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p) => (
              <Link key={p.id} to={`/patterns/${p.id}`} className="pattern-card group">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} className="pattern-card__img transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`chip chip--${p.difficulty}`}>{p.difficulty}</span>
                  </div>
                  <h2 className="jeju-font text-lg text-cocoa">{p.title}</h2>
                  <p className="jeju-font text-sm text-cocoa-soft line-clamp-2">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default AllPatterns
