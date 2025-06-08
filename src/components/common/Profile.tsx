import profile from '../../assets/images/profile.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import resume from '../../assets/SenthilSrinivasResume.pdf'

function Profile() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 border-0 rounded-4 text-center">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle border border-3 border-dark"
              style={{ maxWidth: '180px' }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h3 className="fw-bold">P S Senthil Srinivas</h3>
            <h5 className="text-muted mb-3">React Developer @ HCL Technologies Ltd</h5>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
              <a href="https://www.linkedin.com/in/senthil-srinivas-p-s-30b903230/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                <i className="bi bi-linkedin me-2"></i>LinkedIn
              </a>
              <a href="https://github.com/senthil1608" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <i className="bi bi-github me-2"></i>GitHub
              </a>
              <a href="tel:+91 90925 73000" className="btn btn-outline-success">
                <i className="bi bi-phone me-2"></i>Mobile
              </a>
              <a href={resume} download className="btn btn-outline-dark">
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
