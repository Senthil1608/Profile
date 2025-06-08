import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import genikLogo from "../assets/images/genik Logo.png"
import rearticle from "../assets/images/rearticleLogo.svg"
import hclTech from "../assets/images/hcl tech.webp"
function Experience() {
  return (
    <>
      <NavBar />
      <section className="container py-5">
        <h2 className="text-center mb-5 fw-bold">My Experience</h2>
        {/* HCL Tech Card */}
        <div className="card mb-4 shadow-sm border-0 rounded-4 p-3">
          <div className="row g-3 align-items-center">
            <div className="p-5 col-md-3 text-center">
              <img
                src={hclTech}
                alt="HCL Technologies"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-9">
              <h5 className="fw-bold">React Developer</h5>
              <p className="mb-1 text-muted">HCL Technologies – Xerox Project</p>
              <p className="mb-2"><strong>Status:</strong> Currently Working</p>
              <ul className="mb-0">
                <li>Developing device-based apps to increase efficiency within Xerox projects.</li>
                <li>Follow DevOps practices for continuous integration and delivery.</li>
                <li>Using Git for version control and collaboration.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Genik Technologies Card */}
        <div className="card mb-4 shadow-sm border-0 rounded-4 p-5">
          <div className="row g-3 align-items-center">
            <div className="p-5 col-md-3 text-center d-flex flex-column align-items-center">
              <img
                src={genikLogo}
                alt="Genik Technologies"
                className="img-fluid rounded-3 mb-5"
              />
               <img
                src={rearticle}
                alt="Genik Technologies"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-9">
              <h5 className="fw-bold">Research and Development Intern</h5>
              <p className="mb-1 text-muted">Genik Technologies Pvt Ltd, Chennai</p>
              <p className="mb-2"><strong>Project:</strong> Rearticle – Research Editor based on LaTeX</p>
              <p className="mb-1"><strong>Duration:</strong> Aug 2023 – Aug 2024</p>
              <ul className="mb-0">
                <li>Represented the company in their pitch deck as Product Analyst in PSG Engineering College.</li>
                <li>Engineered backend systems to compute cite scores and impact factors for over 7500 journals.</li>
                <li>Performed black-box and white-box QA testing to enhance user experience.</li>
                <li>Designed a robust LaTeX code framework enabling diverse graph creation from provided data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Experience;
