import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-muted border border-info text-white py-4 m-2">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              
              <li><a href="/experience" className="text-white text-decoration-none">Experience</a></li>
              <li><a href="/skills" className="text-white text-decoration-none">Skills</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
            <p className="mb-0 fst-italic fs-1">"Every Little Smile can touch"</p>
          </div>
        </div>

        <hr className="border-top border-light my-3" />

        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} P S Senthil Srinivas</p>
      </div>
    </footer>
  );
}

export default Footer;
