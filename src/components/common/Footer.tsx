import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-light border-top py-4" role="contentinfo" aria-label="Footer" style={{background : "#004062ff"}}>
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-4">
            <h5 className="fw-bold mb-1">P S Senthil Srinivas</h5>
            <p className="mb-0 small text-warning">Frontend developer — building accessible, responsive web apps.</p>
          </div>

          <nav className="col-md-4" aria-label="Footer navigation">
            <h6 className="visually-hidden">Footer navigation</h6>
            <ul className="list-unstyled d-flex flex-column flex-sm-row gap-3 mb-0 justify-content-center">
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/experience" className="text-light text-decoration-none">Experience</a></li>
              <li><a href="/skills" className="text-light text-decoration-none">Skills</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </nav>

          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
            <div className="d-flex gap-3 align-items-center">
              <span className="d-none d-md-inline fst-italic text-light">"Every Little Smile can touch"</span>
              <div className="d-flex gap-2" aria-label="Social links">
                <a href="mailto:your.email@example.com" className="text-light" aria-label="Email">
                  <FaEnvelope size={18} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="GitHub">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="LinkedIn">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-light my-3" />

        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} P S Senthil Srinivas</p>
      </div>
    </footer>
  );
}

export default Footer;
