import "./Experience.css";
import Navbar from "./Navbar";
import Re from "../img/reymark.jpg";
import Ob from "../img/observe.jpg";
import Mabinay from "../img/mabinay.jpg";
import def from "../img/defense.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container5">
            <div class="bubbles">
              <span class="circle" style={{ "--i": 11 }}></span>
              <span class="circle" style={{ "--i": 12 }}></span>
              <span class="circle" style={{ "--i": 24 }}></span>
              <span class="circle" style={{ "--i": 10 }}></span>
              <span class="circle" s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      tyle={{ "--i": 14 }}></span>
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



           
          </div>
          <section id="info">
        <div class="text-center">
          <h2 class="display-2 text-white"><strong>Experiences</strong></h2></div>
        <div class="text-center">
          <h6><p class="text-white">During my on-the-job training, I learned a lot by doing tasks with guidance from mentors in real-life situations.</p></h6></div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Ob} alt="" />
                <h4 className="text-center">Observe while installing cable together with KCAT Staff </h4>

              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Mabinay} alt="" />
                <h4 className="text-center">Market Promo Fyers in Mabinay with our Co-Trainee</h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Ob} alt="" />
                <h4 className="text-center">Field Observe while aligning cable wire</h4>
              </div>
            </div>

          </div>
        </div>

   
      </section>

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

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href=""> Reymark </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
