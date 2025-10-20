import { useEffect, useState } from 'react';
import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import c from "../assets/images/cProg.png";
import cpp from "../assets/images/c++.png";
import git from "../assets/images/git.png";
import agile from "../assets/images/agile.png";
import azure from "../assets/images/azureDevops.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from  "../assets/images/javascript.png";
import dotnet from "../assets/images/dotnet.png";
import react from "../assets/images/react.png";
import kotlin from "../assets/images/kotlin.png";
import { FaFilter } from 'react-icons/fa';

const skills = [
  { name: 'C', img: c, category: 'Language', level: 80, color: '#6c5ce7' },
  { name: 'C++', img: cpp, category: 'Language', level: 78, color: '#0097a7' },
  { name: 'Git', img: git, category: 'Tool', level: 86, color: '#f1502f' },
  { name: 'Agile', img: agile, category: 'Process', level: 75, color: '#ffb86b' },
  { name: 'Azure DevOps', img: azure, category: 'Tool', level: 70, color: '#0078d4' },
  { name: 'HTML', img: html, category: 'Web', level: 92, color: '#e44d26' },
  { name: 'CSS', img: css, category: 'Web', level: 88, color: '#2965f1' },
  { name: 'JavaScript', img: javascript, category: 'Web', level: 85, color: '#f0db4f' },
  { name: '.NET', img: dotnet, category: 'Framework', level: 72, color: '#512bd4' },
  { name: 'React', img: react, category: 'Framework', level: 88, color: '#61dafb' },
  { name: 'Kotlin', img: kotlin, category: 'Language', level: 66, color: '#7f52ff' },
];

function Skills() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [animate, setAnimate] = useState(false);

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

  useEffect(() => {
    // animate progress bars after mount
    const id = setTimeout(() => setAnimate(true), 60);
    return () => clearTimeout(id);
  }, []);

  const toggleFilter = () => setFilterOpen(prev => !prev);
  const applyCategory = (cat: string) => {
    setSelectedCategory(cat);
    setFilterOpen(false);
  };

  const filtered = skills.filter(s => selectedCategory === 'All' || s.category === selectedCategory);

  return (
    <>
      <NavBar />
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-between mb-4 gap-3 flex-column flex-md-row">
          <h2 className="mb-0 fw-bold">My Skills</h2>

          <div className="d-flex gap-2 align-items-center position-relative">
            <button
              className={`btn btn-sm d-flex align-items-center gap-2 ${filterOpen ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={toggleFilter}
              aria-expanded={filterOpen}
              aria-controls="skills-filter-panel"
            >
              <FaFilter /> {selectedCategory === 'All' ? 'Filter' : selectedCategory}
            </button>

            <small className="text-white d-none d-md-inline">Hover a tile for details</small>

            {/* Filter panel */}
            {filterOpen && (
              <div
                id="skills-filter-panel"
                role="menu"
                aria-label="Filter skills by category"
                className="card shadow-sm p-3 position-absolute"
                style={{ right: 0, top: '42px', zIndex: 30, minWidth: 200 }}
              >
                <div className="d-flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      role="menuitem"
                      className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                      onClick={() => applyCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="mt-2 text-end">
                  <button className="btn btn-sm btn-link text-muted" onClick={() => { setSelectedCategory('All'); setFilterOpen(false); }}>
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="skills-grid">
          {filtered.map((skill, idx) => (
            <article
              key={idx}
              className="skill-tile"
              aria-label={`${skill.name} — ${skill.category}`}
              style={{ ['--accent' as any]: skill.color }}
            >
              <div className="left">
                <div
                  className="ring"
                  style={{
                    background: `conic-gradient(var(--accent) ${skill.level}%, rgba(0,0,0,0.06) ${skill.level}% 100%)`
                  }}
                  aria-hidden="true"
                />
                <img src={skill.img} alt={skill.name} className="skill-img" />
              </div>

              <div className="skill-body">
                <h6 className="mb-0 fw-semibold">{skill.name}</h6>
                <div className="text-muted small">{skill.category}</div>

                <div className="mt-2 d-flex align-items-center gap-3">
                  <div className="mini-progress" aria-hidden="true">
                    <div
                      className="mini-bar"
                      style={{
                        width: animate ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, var(--accent), rgba(255,255,255,0.18))`
                      }}
                    />
                  </div>
                  <div className="level-text small">{skill.level}%</div>
                </div>
              </div>

              <div className="skill-overlay" aria-hidden="true">
                <div>
                  <div className="overlay-level">{skill.level}%</div>
                  <div className="overlay-note small">Proficiency</div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      <Footer />

      <style>{`
        :root { --tile-bg: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
        }

        .skill-tile {
          position: relative;
          background: var(--tile-bg);
          border-radius: 14px;
          padding: 1rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          transition: transform 320ms cubic-bezier(.2,.9,.2,1), box-shadow 320ms ease, background 220ms ease;
          cursor: default;
          overflow: hidden;
        }

        .skill-tile:hover {
          transform: translateY(-10px) rotate(-0.6deg);
          box-shadow: 0 22px 54px rgba(2,6,23,0.32);
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02));
        }

        .left { position: relative; width: 92px; min-width: 92px; height: 92px; display: flex; align-items: center; justify-content: center; }
        .ring {
          --size: 72px;
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          display: block;
          box-shadow: inset 0 -6px 18px rgba(0,0,0,0.08), 0 8px 20px rgba(2,6,23,0.06);
          transition: transform 420ms cubic-bezier(.2,.9,.2,1);
        }

        .skill-img {
          position: absolute;
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          padding: 6px;
          transform: translate(22px, -14px) rotate(-6deg);
          box-shadow: 0 6px 18px rgba(2,6,23,0.12);
          transition: transform 280ms ease;
        }

        .skill-tile:hover .ring { transform: rotate(-10deg) scale(1.03); }
        .skill-tile:hover .skill-img { transform: translate(26px, -16px) rotate(-2deg) scale(1.03); }

        .skill-body { flex: 1 1 auto; min-width: 0; display:flex; flex-direction:column; justify-content:center; gap:6px; }
        .skill-body h6 { font-size: 1rem; }
        .skill-body .text-muted { opacity: 0.85; }

        .mini-progress {
          width: 120px;
          height: 8px;
          background: rgba(0,0,0,0.06);
          border-radius: 999px;
          overflow: hidden;
          box-shadow: inset 0 -3px 8px rgba(0,0,0,0.06);
        }
        .mini-bar {
          height: 100%;
          transition: width 700ms cubic-bezier(.2,.9,.2,1);
        }
        .level-text { min-width: 36px; text-align: right; color: rgba(255,255,255,0.9); font-weight:600; }

        .skill-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(2,6,23,0.76), rgba(2,6,23,0.86));
          color: #fff;
          gap: 0.5rem;
          flex-direction: column;
          transform: translateY(8%);
          opacity: 0;
          transition: transform 260ms ease, opacity 260ms ease, bottom 260ms ease;
          pointer-events: none;
        }

        .skill-tile:hover .skill-overlay {
          bottom: 0;
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .overlay-level {
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 0.6px;
        }
        .overlay-note { opacity: 0.95; }

        .skill-tile { opacity: 0; transform: translateY(12px); animation: fadeUp 520ms forwards; }
        .skill-tile:nth-child(1) { animation-delay: 60ms; }
        .skill-tile:nth-child(2) { animation-delay: 90ms; }
        .skill-tile:nth-child(3) { animation-delay: 120ms; }
        .skill-tile:nth-child(4) { animation-delay: 150ms; }
        .skill-tile:nth-child(5) { animation-delay: 180ms; }
        .skill-tile:nth-child(6) { animation-delay: 210ms; }
        .skill-tile:nth-child(7) { animation-delay: 240ms; }
        .skill-tile:nth-child(8) { animation-delay: 270ms; }
        .skill-tile:nth-child(9) { animation-delay: 300ms; }
        .skill-tile:nth-child(10) { animation-delay: 330ms; }
        .skill-tile:nth-child(11) { animation-delay: 360ms; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 576px) {
          .skill-tile { flex-direction: row; gap: 0.75rem; padding: 0.8rem; }
          .left { width: 72px; min-width:72px; height:72px; }
          .ring { --size: 56px; }
          .skill-img { width:40px; height:40px; transform: translate(18px, -12px) rotate(-6deg); }
          .mini-progress { width: 90px; }
        }
      `}</style>
    </>
  );
}

export default Skills;
