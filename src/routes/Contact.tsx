import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <NavBar />
      <section className="container-fluid py-5 bg-dark d-flex justify-content-center align-items-center ">
        <div className="card p-5 shadow rounded-4 w-100" style={{ maxWidth: '500px' }}>
          <h3 className="text-center mb-4 fw-bold">Contact Information</h3>

          <div className="d-flex align-items-center mb-3">
            <FaPhone className="me-3 text-primary fs-5" />
            <span className="fw-medium">+91 90925 73000</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaEnvelope className="me-3 text-danger fs-5" />
            <a
              href="mailto:senthind26@gmail.com"
              className="fw-medium text-decoration-none text-dark"
            >
              senthind26@gmail.com
            </a>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FaLinkedin className="me-3 text-primary fs-5" />
            <a
              href="https://www.linkedin.com/in/senthil-srinivas-p-s-30b903230/"
              className="fw-medium text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/senthil-srinivas-p-s
            </a>
          </div>

          <div className="d-flex align-items-center mb-2">
            <FaMapMarkerAlt className="me-3 text-success fs-5" />
            <span className="fw-medium">Chennai, India</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
