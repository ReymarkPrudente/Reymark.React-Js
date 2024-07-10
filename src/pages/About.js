import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import re from "../img/reymark.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <section id="info">
      <div class="text-center">
         <h2 class="display-2 text-white"><strong>About</strong></h2></div>
         </section>
      <section id="carton">
        <div className="container mt-5">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-secondary">About My Self</h4>
                  <p>
                    I am a book reader and dedicated college student pursuing a
                    Bachelor of Science in Information Technology (BSIT) at
                    Central Philippines State University. I like listening music, eating delicacy and traveling different kind of views.
                  </p>
                
                </div>
                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={re}
                      alt="Profile Picture of Lorriane Grace A. Lumanog"
                    />
                  </center>
                  <center>
                    <div className="card box">
                      <div className="row p-2">
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faUnity} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGithub} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faGamepad} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faSpotify} />
                        </div>
                        <div className="col text-center">
                          <FontAwesomeIcon className="icons" icon={faSteam} />
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-5 pt-5">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h2>Education</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Pinaguinpinan National High School
                      </h4>
                      <p className="text-secondary">
                        Brgy. Pinaguinpinan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Pinaguinpinan Elementary School</h4>
                      <p className="text-secondary">
                        Brgy. Pinaguinpinan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skill" className="bg-secondary">
        <div className="col skills">
          <h2 className="text-center mt-5 mb-5">Skills</h2>
          <div class="row justify-content-center">
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">HTML</h5>
              <p className="text-center">90%</p>
              <span class="bar">
                <span class="html"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">CSS</h5>
              <p className="text-center">70%</p>
              <span class="bar">
                <span class="css"></span>
              </span>
            </div>
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">JAVASCRIPT</h5>
              <p className="text-center">50%</p>
              <span class="bar">
                <span class="javascript"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">PHP</h5>
              <p className="text-center">35%</p>
              <span class="bar">
                <span class="php"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> Lorriane Grace</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
