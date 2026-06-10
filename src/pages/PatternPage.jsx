import React, { useEffect, useState, useMemo } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import patterns from '../data/patterns';

/* Turn the stored HTML instruction string into structured steps.
   Lines that are wrapped in <strong> become section headers; other
   non-empty lines become checkable steps. */
function parseInstructions(html) {
  if (!html) return [];
  const lines = html
    .split(/<br\s*\/?>/i)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const sections = [];
  let current = { heading: null, steps: [] };

  for (const line of lines) {
    const headingMatch = line.match(/^<strong>(.*?)<\/strong>$/i);
    if (headingMatch) {
      if (current.heading || current.steps.length) sections.push(current);
      current = { heading: headingMatch[1], steps: [] };
    } else {
      current.steps.push(line);
    }
  }
  if (current.heading || current.steps.length) sections.push(current);
  return sections;
}

const RowCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white rounded-2xl border border-shell p-6 text-center">
      <p className="eyebrow mb-4">Row counter</p>
      <div className="counter-display mb-5">{count}</div>
      <div className="flex items-center justify-center gap-4">
        <button className="counter-btn" onClick={() => setCount((c) => Math.max(0, c - 1))} aria-label="Decrease row count">−</button>
        <button className="counter-btn" onClick={() => setCount((c) => c + 1)} aria-label="Increase row count">+</button>
      </div>
      <button className="jeju-font text-sm text-cocoa-soft mt-5 underline hover:text-rose" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

const PatternPage = () => {
  const { id } = useParams();
  const pattern = patterns.find((p) => p.id === id);
  const sections = useMemo(() => parseInstructions(pattern?.instructions), [pattern]);
  const [done, setDone] = useState({});

  useEffect(() => {
    document.title = pattern ? `${pattern.title} · Kayti Krochets` : "Pattern not found";
  }, [pattern]);

  if (!pattern) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <p className="alex-font text-5xl text-cocoa mb-3">Pattern not found</p>
          <p className="jeju-font text-cocoa-soft mb-6">We couldn't find that one — it may have moved.</p>
          <Link to="/patterns" className="btn-primary">Back to patterns</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const toggle = (key) => setDone((d) => ({ ...d, [key]: !d[key] }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl w-full mx-auto px-5 sm:px-8 py-10">
        <Link to="/patterns" className="jeju-font text-sm text-cocoa-soft hover:text-rose">← All patterns</Link>

        {/* Header */}
        <header className="mt-6 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`chip chip--${pattern.difficulty}`}>{pattern.difficulty}</span>
            {pattern.category && <span className="chip" style={{ background: 'var(--color-lavender)', color: 'var(--color-cocoa-soft)' }}>{pattern.category}</span>}
            {pattern.time && <span className="jeju-font text-sm text-cocoa-soft">· {pattern.time}</span>}
          </div>
          <h1 className="alex-font text-5xl sm:text-6xl text-cocoa">{pattern.title}</h1>
          <p className="jeju-font text-lg text-cocoa-soft mt-3 max-w-2xl">{pattern.description}</p>
        </header>

        <img src={pattern.image} alt={pattern.title} className="w-full max-h-[460px] object-cover rounded-3xl mb-12" />

        {/* Two-column: content + sticky tools */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <div>
            {/* Materials & Abbreviations */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {pattern.materials && (
                <div className="bg-white rounded-2xl border border-shell p-6">
                  <h2 className="alex-font text-3xl text-rose-deep mb-3">Materials</h2>
                  <ul className="jeju-font text-cocoa space-y-1.5 list-disc list-inside text-sm">
                    {pattern.materials.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              )}
              {pattern.abbreviations && (
                <div className="bg-white rounded-2xl border border-shell p-6">
                  <h2 className="alex-font text-3xl text-rose-deep mb-3">Abbreviations</h2>
                  <ul className="jeju-font text-cocoa space-y-1.5 text-sm">
                    {pattern.abbreviations.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
              )}
            </div>

            {/* Interactive instructions */}
            {sections.length > 0 && (
              <div className="mb-10">
                <h2 className="alex-font text-4xl text-cocoa mb-2">Instructions</h2>
                <p className="jeju-font text-sm text-cocoa-soft mb-6">Tap a step to check it off as you go.</p>
                <div className="space-y-8">
                  {sections.map((section, si) => (
                    <div key={si}>
                      {section.heading && (
                        <h3 className="jeju-font text-lg font-bold text-rose-deep mb-2">{section.heading}</h3>
                      )}
                      <div className="space-y-1">
                        {section.steps.map((step, sj) => {
                          const key = `${si}-${sj}`;
                          return (
                            <div
                              key={key}
                              className="step-item"
                              data-done={!!done[key]}
                              onClick={() => toggle(key)}
                              role="checkbox"
                              aria-checked={!!done[key]}
                              tabIndex={0}
                              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(key); } }}
                            >
                              <span className="step-check">
                                {done[key] && (
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                )}
                              </span>
                              <span className="step-text jeju-font text-cocoa text-[0.95rem]" dangerouslySetInnerHTML={{ __html: step }} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video */}
            {pattern.video && (
              <div className="mb-4">
                <h2 className="alex-font text-4xl text-cocoa mb-5">Video Tutorial</h2>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: "16 / 9" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${pattern.video}`}
                    title={`${pattern.title} video tutorial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sticky tools sidebar */}
          <aside className="lg:sticky lg:top-24">
            <RowCounter />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatternPage;
