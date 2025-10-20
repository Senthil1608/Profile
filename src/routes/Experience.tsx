import { useEffect, useRef, type JSX } from 'react';
import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import genikLogo from "../assets/images/genik Logo.png";
import rearticle from "../assets/images/rearticleLogo.svg";
import hclTech from "../assets/images/hcl tech.webp";

const EXPERIENCES = [
  {
    company: 'HCL Technologies (Xerox Project)',
    role: 'React Developer',
    period: 'Present',
    logo: hclTech,
    highlights: [
      'Building device-centric UIs to improve onsite Xerox workflows.',
      'Following CI/CD & DevOps best practices.',
      'Collaborating with cross-functional teams using Git & code reviews.'
    ],
    tech: ['React', 'TypeScript', 'Git', 'Azure DevOps']
  },
  {
    company: 'Genik Technologies Pvt Ltd',
    role: 'R&D Intern — Product Analyst',
    period: 'Aug 2023 – Aug 2024',
    logo: genikLogo,
    secondaryLogo: rearticle,
    highlights: [
      'Represented product in pitch decks and college showcases.',
      'Engineered backend systems for cite-score & impact calculations for 7.5k+ journals.',
      'Built LaTeX-driven editor & graphing framework for Rearticle.',
      'Performed black-box & white-box QA to improve UX.'
    ],
    tech: ['Node.js', 'Python', 'LaTeX', 'Postgres']
  }
];

export default function Experience(): JSX.Element {
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    itemsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      <main className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Experience and Projects</h2>

        <section className="experience-wrap">
          <div className="timeline" aria-hidden="true" />
          <div className="experience-grid" >
            {EXPERIENCES.map((exp, i) => (
              <article
                key={exp.company}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el as HTMLDivElement;
                }}
                className={`exp-card ${i % 2 === 0 ? 'left' : 'right'}`}
                aria-label={`${exp.role} at ${exp.company}`} style={{ background: "#003753ff" }}
              >
                <div className="logo-col">
                  <div className="logo-blob" style={{ background: i % 2 === 0 ? 'linear-gradient(135deg,#60a5fa,#06b6d4)' : 'linear-gradient(135deg,#f97316,#ef4444)' }}>
                    <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                    {exp.secondaryLogo && <img src={exp.secondaryLogo} alt="" className="secondary-logo" aria-hidden="true" />}
                  </div>
                </div>

                <div className="content-col">
                  <div className="card-head">
                    <h4 className="role">{exp.role}</h4>
                    <div className="meta">
                      <span className="company">{exp.company}</span>
                      <span className="dot" aria-hidden="true">•</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="highlights">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>

                  <div className="tech-row" aria-hidden="true">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>

              </article>
            ))}

          </div>
          <div className="container my-5 d-flex justify-content-center">
            <div className="card project-card shadow-lg border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div className="project-icon mb-3">
                  <i className="bi bi-controller fs-1 text-primary"></i>
                </div>
                <h4 className="card-title fw-bold mb-3">Find U</h4>
                <p className="card-text text-muted mb-4">
                  A fun interactive game built to predict the actor you chose in mind by asking a series of questions.
                </p>
                <a href="https://find-u-game.vercel.app/" target="_blank" className="btn btn-gradient fw-semibold px-4 py-2">
                  Visit Project
                </a>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />

      <style>{`
        /* avoid horizontal overflow and keep the layout compact */
        .experience-wrap { position: relative; padding: 2rem 1rem 4rem; overflow-x: hidden; box-sizing: border-box; }

        /* center grid and restrict width so cards never push page horizontally */
        .experience-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding-inline: 8px;
          box-sizing: border-box;
        }
        .project-card {
    width: 22rem;
    background: linear-gradient(145deg, #ffffff, #f0f4ff);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  .btn-gradient {
    background: linear-gradient(90deg, #007bff, #00bcd4);
    color: white;
    border: none;
    border-radius: 50px;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .btn-gradient:hover {
    background: linear-gradient(90deg, #0056b3, #0097a7);
    transform: scale(1.05);
    color: #fff;
  }

  .project-icon i {
    background: linear-gradient(135deg, #007bff, #00bcd4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
        /* vertical timeline line - kept inside the centered grid */
        .timeline {
          position: absolute;
          left: 50%;
          top: 2rem;
          bottom: 0;
          width: 3px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border-radius: 4px;
          z-index: 1;
        }

        /* card - full width of grid column, limited max-width */
        .exp-card {
          display: grid;
          grid-template-columns: 96px 1fr;
          gap: 1rem;
          align-items: center;
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
          background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
          border-radius: 12px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 10px 30px rgba(2,6,23,0.18);
          transform-origin: center;
          opacity: 0;
          transition: transform 500ms cubic-bezier(.2,.9,.2,1), opacity 420ms ease;
          box-sizing: border-box;
        }

        /* gentle lateral offset instead of big margins to avoid overflow */
        @media(min-width: 992px) {
          .exp-card.left { transform: translateX(-22px); }
          .exp-card.right { transform: translateX(22px); }
        }

        /* reveal animation when observed */
        .exp-card.is-visible { opacity: 1; transform: translateY(0) scale(1); }
        .exp-card.left.is-visible { animation: slideInLeft 640ms cubic-bezier(.2,.9,.2,1) both; }
        .exp-card.right.is-visible { animation: slideInRight 640ms cubic-bezier(.2,.9,.2,1) both; }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-18px) translateY(14px) scale(.995); }
          to { opacity: 1; transform: translateX(-22px) translateY(0) scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(18px) translateY(14px) scale(.995); }
          to { opacity: 1; transform: translateX(22px) translateY(0) scale(1); }
        }

        /* logo blob - slightly reduced to save horizontal space */
        .logo-col { display:flex; align-items:center; justify-content:center; }
        .logo-blob {
          width: 84px;
          height: 84px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          position: relative;
          overflow: visible;
          box-shadow: 0 8px 26px rgba(2,6,23,0.16), inset 0 -6px 12px rgba(255,255,255,0.02);
          transform: translateZ(0);
          transition: transform 420ms ease;
          animation: floatSway 6.5s ease-in-out infinite;
        }
        .company-logo { width: 60px; height: auto; object-fit:contain; filter: drop-shadow(0 6px 18px rgba(2,6,23,0.14)); transition: transform 260ms ease; }
        .secondary-logo { position: absolute; right: -6px; bottom: -6px; width: 40px; height:40px; opacity: .95; transform: rotate(-10deg); box-shadow: 0 8px 18px rgba(2,6,23,0.12); }

        .exp-card:hover .logo-blob { transform: translateY(-6px) scale(1.03); }

        @keyframes floatSway {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(1.5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        /* content */
        .card-head { display:flex; flex-direction:column; gap:6px; }
        .role { margin:0; font-size:1.02rem; font-weight:700; letter-spacing:-0.2px; }
        .meta { color: rgba(255,255,255,0.72); display:flex; gap:8px; align-items:center; font-size:.92rem; }
        .company { font-weight:600; }
        .period { font-weight:600; opacity:.9; }

        .highlights { margin: .6rem 0 0 0; padding-left: 1.05rem; color: rgba(255,255,255,0.88); }
        .highlights li { margin: .35rem 0; line-height:1.35; }

        .tech-row { margin-top: .75rem; display:flex; gap:.45rem; flex-wrap:wrap; }
        .tech-pill { background: rgba(255,255,255,0.03); padding:6px 10px; border-radius:999px; font-size:.8rem; border:1px solid rgba(255,255,255,0.02); color: rgba(255,255,255,0.92); }

        /* responsive - stack cleanly, timeline moves left in narrow view */
        @media (max-width: 991px) {
          .experience-wrap { padding: 1.5rem 12px 3rem; }
          .experience-grid { gap: 1.25rem; padding-inline: 0; }
          .exp-card { grid-template-columns: 68px 1fr; padding: 12px; max-width: 100%; }
          .timeline { left: 20px; transform: none; width: 2px; top: 1rem; }
          .logo-blob { width: 64px; height: 64px; border-radius: 12px; }
          .company-logo { width: 46px; }
        }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .logo-blob, .exp-card, .timeline { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  );
}
