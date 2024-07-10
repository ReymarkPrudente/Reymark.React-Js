import React from "react";
import "./Contact.css";

import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact section" id="contact">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">Contact Me</h1>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">Do you have any inquiries?</h3>
          <div className="row">
            <div className="contact-info-item padd-15">
            <a href="mail to: reymarknapomucenoprudente@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
              </a>
              <h4>Email me at</h4>
              <p>reymarknapomucenoprudente@gmail.com</p>
            </div>
            <div className="contact-info-item padd-15">
            <a href="https://facebook.com/Reymark Prudente" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
              </a>
              <h4>Chat me</h4>
              <p>Reymark Prudente</p>
            </div>
            <div className="contact-info-item padd-15">
            <a href="https://github.com/reymarkprudente" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
              </a>
              <h4>Github</h4>
              <p>reymarkprudente</p>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15 fw-bold">I'M VERY RESPONSIVE TO MESSAGES</h4>
         
        </div>
      </section>
       </>
  );
};

export default Contact;