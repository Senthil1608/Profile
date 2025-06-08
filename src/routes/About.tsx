import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import vithaiLogo from '../assets/images/vithai.jpg';

function About() {
  return (
    <>
      <NavBar />
      <div className="about-modern-section py-5 ">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Image Section */}
            <div className="col-md-5 text-center">
              <img
                src={vithaiLogo}
                alt="Vithai 17 Foundation"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>

            {/* Text Section */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-3">About Me</h2>
              <p className="lead">
                I am an <span className="text-accent">aspiring developer</span> passionate about staying at the
                forefront of evolving technologies. I completed my Bachelor's in{' '}
                <strong>Electronics and Communication Engineering</strong> at{' '}
                <span className="text-warning">Sri Sairam Engineering College</span>.
              </p>
              <p>
                I did my schooling at <strong>Lalaji Memorial Omega International School</strong>, now known as{' '}
                <span className="text-success">Heartfulness International School – Omega branch</span>.
              </p>
              <p>
                I’m a proud <strong>social enthusiast</strong> leading the{' '}
                <span className="text-accent">Vithai 17 Foundation</span>, working toward achieving the{' '}
                <em>Sustainable Development Goals</em>. One of our key collaborations includes working with the{' '}
                <strong>You House Our House Old Age Home</strong> to bring real social impact.
              </p>
              <a
                href="https://vithai17foundation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success mt-3"
              >
                Visit Vithai 17 Foundation
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
