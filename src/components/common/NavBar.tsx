import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav-color shadow-sm px-3 py-2 border border-warning m-2 ">
        <a className="navbar-brand fw-bold d-flex align-items-center nav-brand" href="/">
          <i className="bi bi-person-circle me-2 fs-4"></i>
          P S Senthil Srinivas
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} fs-3 text-white`}></i>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-end align-items-center">
            <li className="nav-item">
              <a className="nav-link nav-link-custom d-flex align-items-center" href="/about" onClick={closeNavbar}>
                <i className="bi bi-person me-2"></i> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom d-flex align-items-center" href="/experience" onClick={closeNavbar}>
                <i className="bi bi-briefcase me-2"></i> Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom d-flex align-items-center" href="/skills" onClick={closeNavbar}>
                <i className="bi bi-lightning-charge-fill me-2"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom d-flex align-items-center" href="/contact" onClick={closeNavbar}>
                <i className="bi bi-envelope me-2"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style>{`
        /* Nav smooth hover & focus styles */
        .nav-link-custom {
          color: #ffffff;
          padding: 0.35rem 0.65rem;
          border-radius: 0.5rem;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, color 180ms ease;
        }

        .nav-link-custom:hover,
        .nav-link-custom:focus {
          background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.02);
          color: #ffd54a;
          text-decoration: none;
        }

        .nav-link-custom:active {
          transform: translateY(-2px);
        }

        .nav-link-custom:focus {
          outline: 3px solid rgba(255,213,74,0.14);
          outline-offset: 3px;
        }

        .nav-brand {
          transition: transform 180ms ease, color 180ms ease;
        }

        .nav-brand:hover,
        .nav-brand:focus {
          transform: scale(1.02);
          color: #ffd54a;
          text-decoration: none;
        }

        /* Tweak navbar background transition when opening/closing */
        .navbar {
          transition: background-color 180ms ease, box-shadow 180ms ease;
        }

        /* Small screens: make hover subtle (no translate) for touch devices */
        @media (hover: none) and (pointer: coarse) {
          .nav-link-custom { transform: none; }
          .nav-link-custom:hover { transform: none; box-shadow: none; }
        }
      `}</style>
    </>
  );
}

export default NavBar;
