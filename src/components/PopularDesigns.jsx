import React from 'react';
import { Link } from 'react-router-dom';
import patterns from '../data/patterns';

const FEATURED = ['star-wrist-warmers', 'star-tote-bag', 'strawberry-airpods-case'];

const PopularDesigns = () => {
  const featured = FEATURED
    .map((id) => patterns.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="bg-shell/50 py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Reader favorites</p>
          <h2 className="alex-font text-5xl sm:text-6xl text-cocoa">Popular Designs</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((p) => (
            <Link key={p.id} to={`/patterns/${p.id}`} className="pattern-card group">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="pattern-card__img transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1">
                <span className={`chip chip--${p.difficulty} self-start`}>{p.difficulty}</span>
                <h3 className="jeju-font text-lg text-cocoa">{p.title}</h3>
                <p className="jeju-font text-sm text-cocoa-soft line-clamp-2">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/patterns" className="btn-ghost">View all patterns →</Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDesigns;
