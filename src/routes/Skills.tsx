import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import c from "../assets/images/cProg.png";
import cpp from "../assets/images/c++.png";
import git from "../assets/images/git.png"
import agile from "../assets/images/agile.png"
import azure from "../assets/images/azureDevops.png"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import javascript from  "../assets/images/javascript.png"
import dotnet from "../assets/images/dotnet.png"
import react from "../assets/images/react.png"
import kotlin from "../assets/images/kotlin.png"

const skills = [
  { name: 'Problem Solving in C', img: c },
  { name: 'C++ OOPs', img: cpp },
  { name: 'Git', img: git },
  { name: 'Agile Process', img: agile },
  { name: 'Azure DevOps', img: azure },
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'JavaScript', img: javascript },
  { name: '.NET', img: dotnet },
  { name: 'React JS', img: react },
  { name: 'Kotlin', img: kotlin },
];

function Skills() {
  return (
    <>
      <NavBar />
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="card border-0 shadow-sm rounded-4 text-center p-3 hover-scale h-100">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="img-fluid mb-2 mx-auto skill-icon"
                  style={{ height: '50px', objectFit: 'contain' }}
                />
                <h6 className="text-truncate small mt-2">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
