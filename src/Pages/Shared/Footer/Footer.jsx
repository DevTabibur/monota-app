import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <>
        {/* footer */}
        <footer id="footer" className="footer py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="footer-logo">LOGO HERE</div>
                <ul>
                  <li>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    84 Main Rd E, St Albans VIC 3021, Australia
                  </li>
                  <li>abc@gmail.com</li>
                  <li>+88 01307-588223</li>
                </ul>
              </div>

              <div className="col-md-6">
                <h5>Useful Social Links</h5>
                <div className="footer-social-media">
                  <div className="social-icon">
                    <ul className="d-flex">
                      <li>
                        <BsFacebook className="flex-icon" />
                      </li>
                      <li>
                        <BsTwitter className="flex-icon" />
                      </li>
                      <li>
                        <ImWhatsapp className="flex-icon" />
                      </li>
                      <li>
                        <BsGithub className="flex-icon" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* footer bottom */}
        <section id="footer-bottom" className="footer-bottom">
          <div className="container">
            <p className="text-center copyright py-3">
              Copyright © 2022 Dev Tabibur all rights reserved.
            </p>
          </div>
        </section>
      </>
    </>
  );
};

export default Footer;
