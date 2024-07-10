import "./Home.css";


import Navbar from "./Navbar";
import Me from "../img/mine.jpg";
import Re from "../img/reymark.jpg";
import Ob from "../img/observe1.jpg";
import Mabinay from "../img/mabinay.jpg";


const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            <div class="bubbly">
              <span class="circles" style={{ "--i": 11 }}></span>
              <span class="circles" style={{ "--i": 12 }}></span>
              <span class="circles" style={{ "--i": 24 }}></span>
              <span class="circles" style={{ "--i": 10 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 23 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 20 }}></span>
              <span class="circles" style={{ "--i": 22 }}></span>
              <span class="circles" style={{ "--i": 25 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 21 }}></span>
              <span class="circles" style={{ "--i": 15 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 28 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 20 }}></span>
              <span class="circles" style={{ "--i": 22 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 12 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 28 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 13 }}></span>
              <span class="circles" style={{ "--i": 28 }}></span>
              <span class="circles" style={{ "--i": 19 }}></span>
              <span class="circles" style={{ "--i": 18 }}></span>
              <span class="circles" style={{ "--i": 20 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
              <span class="circles" style={{ "--i": 16 }}></span>
              <span class="circles" style={{ "--i": 14 }}></span>
              <span class="circles" style={{ "--i": 17 }}></span>
            </div>

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={Me}
                        alt="Profile Picture of Reymark Prudente"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold">
                        Reymark
                      </h1>
                      <br />
                      <p className="self text-light">
                        I'm 22 years old,
                        Taking up Bachelor of Information Technology
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <i><h2 class="display-2 text-white"><strong>About</strong></h2></i>
              <p class="text-white">
                Hello, my name is Reymark N. Prudente.
                "I recently graduated as a fourth-year BSIT college student. Throughout my academic journey, I faced various challenges in programming, yet my commitment to learning remained unwavering. Undertaking an On-the-Job Training (OJT) enriched me with practical experience and valuable industry insights. Now, having graduated this year, I am enthusiastic about applying my skills and knowledge in a professional environment, dedicated to advancing in the field of Information Technology and making meaningful contributions."
              </p>
              <a href="#work" class="btn btn-brand">Know More</a>
            </div>
            <div class="col-lg-6">
              <img src={Re} alt="Profile Picture of Reymark N. Prudente" />
            </div>
          </div>
        </div>
      </section>

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

   

    </>
  );
};

export default Home;
