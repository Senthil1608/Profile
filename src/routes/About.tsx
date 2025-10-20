import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePhoto from '../assets/images/profile.png';
import { FaSchool, FaUniversity, FaTrophy } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setAnimate(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <NavBar />
      <main className="container">
        <section className="about-modern-section py-4">
          <div className="row align-items-center g-4" >
            <div className="col-lg-5" >
              <div className="card profile-card glass shadow-sm border-0 overflow-hidden" style={{background : "#012743ff"}}   >
                <div className="card-body text-center p-4">
                  <div className="avatar-wrap mb-3">
                    <img src={profilePhoto} alt="P S Senthil Srinivas — profile" className="rounded-circle profile-photo" />
                    <div className="accent-ring" aria-hidden="true" />
                  </div>

                  <h2 className="h4 fw-bold mb-1 text-white">P S Senthil Srinivas</h2>
                  <p className="mb-1 text-white">Frontend Developer — BE (ECE), Sri Sairam Engineering College</p>

                  <div className="d-flex justify-content-center gap-2 mt-2">
                    <span className="badge role-badge">Software Dev since 3rd year</span>
                    <span className="badge SIH-badge"><FaTrophy className="me-1" />SIH 2024 Finalist</span>
                  </div>

                  <p className="mt-3 small text-white mb-0">Building accessible, responsive web apps with a focus on polish and performance.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3">Academic Highlights</h3>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <FaSchool className="text-primary fs-5" />
                        <div>
                          <div className="fw-semibold">10th Standard</div>
                          <div className="small text-muted">Lalaji Memorial Omega International School</div>
                        </div>
                      </div>
                      <span className="badge score-badge bg-primary rounded-pill">90.8%</span>
                    </div>

                    <div className="progress progress-modern" style={{height: '12px'}} aria-hidden="true">
                      <div
                        className="progress-bar progress-bar-modern bg-primary"
                        role="progressbar"
                        style={{ width: animate ? '90.8%' : '0%' }}
                        aria-valuenow={90.8}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <FaSchool className="text-info fs-5" />
                        <div>
                          <div className="fw-semibold">12th Standard</div>
                          <div className="small text-muted">Lalaji Memorial Omega International School</div>
                        </div>
                      </div>
                      <span className="badge score-badge bg-info text-dark rounded-pill">86.5%</span>
                    </div>

                    <div className="progress progress-modern" style={{height: '12px'}} aria-hidden="true">
                      <div
                        className="progress-bar progress-bar-modern bg-info"
                        role="progressbar"
                        style={{ width: animate ? '86.5%' : '0%' }}
                        aria-valuenow={86.5}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>

                  <div className="mb-0">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <FaUniversity className="text-success fs-5" />
                        <div>
                          <div className="fw-semibold">College — BE (ECE)</div>
                          <div className="small text-muted">Sri Sairam Engineering College</div>
                        </div>
                      </div>
                      <span className="badge score-badge bg-success rounded-pill">8.62 / 10</span>
                    </div>

                    <div className="progress progress-modern" style={{height: '12px'}} aria-hidden="true">
                      <div
                        className="progress-bar progress-bar-modern bg-success"
                        role="progressbar"
                        style={{ width: animate ? `${(8.62 / 10) * 100}%` : '0%' }}
                        aria-valuenow={8.62}
                        aria-valuemin={0}
                        aria-valuemax={10}
                      />
                    </div>
                  </div>

                  <hr className="my-3" />

                  <p className="small text-muted mb-0">Active in hackathons and practical software development during college. Experienced building responsive, accessible interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          backdrop-filter: blur(6px);
          border-radius: 12px;
        }

        .profile-card {
          position: relative;
          overflow: visible;
          border-radius: 14px;
          transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease;
        }
        .profile-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(2,6,23,0.32); }

        .avatar-wrap { position: relative; display: inline-block; }
        .profile-photo {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 6px 18px rgba(2,6,23,0.35);
          border: 4px solid rgba(255,255,255,0.06);
        }
        .accent-ring {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd54a, #ff8a65);
          transform: rotate(20deg);
          filter: blur(6px);
          opacity: 0.9;
          z-index: -1;
        }

        .role-badge {
          background:linear-gradient(135deg, #ffd54a, #ff8a65);
          color: #fff;
          border-radius: 999px;
          padding: 0.35rem 0.6rem;
          font-size: 0.78rem;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .SIH-badge {
          background: linear-gradient(90deg,#fff7e6,#fff1c2);
          color: #2b2b2b;
          border-radius: 999px;
          padding: 0.35rem 0.6rem;
          font-size: 0.78rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .progress-modern {
          background: rgba(0,0,0,0.06);
          border-radius: 999px;
          overflow: hidden;
        }
        .progress-bar-modern {
          height: 100%;
          transform-origin: left center;
          transition: width 900ms cubic-bezier(.2,.9,.2,1);
          box-shadow: 0 6px 18px rgba(2,6,23,0.14) inset;
        }

        .score-badge { font-weight: 600; padding: 0.45rem 0.65rem; }

        @media (max-width: 576px) {
          .profile-photo { width: 96px; height: 96px; }
          .accent-ring { width: 22px; height: 22px; }
        }
      `}</style>
    </>
  );
}

export default About;
