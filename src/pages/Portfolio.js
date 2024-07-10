import "./Portfolio.css";
import Navbar from "./Navbar";

import Me from "../img/Me.png";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">
            <div class="bubbles">
              <span class="circle" style={{ "--i": 11 }}></span>
              <span class="circle" style={{ "--i": 12 }}></span>
              <span class="circle" style={{ "--i": 24 }}></span>
              <span class="circle" style={{ "--i": 10 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 23 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 20 }}></span>
              <span class="circle" style={{ "--i": 22 }}></span>
              <span class="circle" style={{ "--i": 25 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 21 }}></span>
              <span class="circle" style={{ "--i": 15 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 28 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 20 }}></span>
              <span class="circle" style={{ "--i": 22 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 12 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 28 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 13 }}></span>
              <span class="circle" style={{ "--i": 28 }}></span>
              <span class="circle" style={{ "--i": 19 }}></span>
              <span class="circle" style={{ "--i": 18 }}></span>
              <span class="circle" style={{ "--i": 20 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
              <span class="circle" style={{ "--i": 16 }}></span>
              <span class="circle" style={{ "--i": 14 }}></span>
              <span class="circle" style={{ "--i": 17 }}></span>
            </div>

            <div id="portfolio-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Portfolio
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center">Projects</h1>
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-6">Websites</p>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={Me} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={Me} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={Me} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={Me} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr />
              <p className="display-6">Digital Arts</p>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={Me} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>
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

export default Portfolio;
