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
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm px-3 py-2 border border-success m-2">
      <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
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
        <ul className="navbar-nav text-end">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center text-white" href="/about" onClick={closeNavbar}>
              <i className="bi bi-person me-2"></i> About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center text-white" href="/experience" onClick={closeNavbar}>
              <i className="bi bi-briefcase me-2"></i> Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center text-white" href="/skills" onClick={closeNavbar}>
            <i className="	bi bi-lightning-charge-fill"></i> Skills

            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center text-white" href="/contact" onClick={closeNavbar}>
              <i className="bi bi-envelope me-2"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
