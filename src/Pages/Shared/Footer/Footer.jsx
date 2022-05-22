import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import logo from "../../../Assets/monota-img/logo.png";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import payment from "../../../Assets/monota-img/payment.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer" id="footer">
      <Container className="py-5">
        <Row className="g-4">
          <Col
            md={4}
            lg={4}
            sm={12}
            className="bg-light rounded p-4 text-center"
          >
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>

          <Col md={4} lg={4} sm={12} className="text-center">
            <h2 className="title">Contact Us</h2>
            <ul className="list-icon">
              <li>
                <span>
                  {" "}
                  <AiTwotoneMail className="icon" />
                  tobiburrohman2@gmail.com
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <BsFillTelephoneFill className="icon" />
                  +8801305-588223
                </span>
              </li>
              <li>
                <span>
                  <BsFacebook className="icon" />
                </span>
                <span>
                  <BsTwitter className="icon" />
                </span>
                <span>
                  <BsGithub className="icon" />
                </span>
              </li>
            </ul>
          </Col>

          <Col md={4} lg={4} sm={12} className="text-center">
            <h2 className="title">Information</h2>
            <Link to="/#">Blogs</Link>
            <Link to="/#">About Us</Link>
            <Link to="/#">Reviews</Link>
          </Col>
        </Row>

        <Row>
          <section
            id="footer-bottom"
            className="footer-bottom mt-4 bg-danger rounded"
          >
            <div className="container"></div>
          </section>
          <Col md={6} lg={6} sm={12}>
            <p className="text-center copyright py-3">
              Copyright © 2022 Dev Tabibur all rights reserved.
            </p>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <p className="text-center copyright py-3">
              <img src={payment} alt="payment" />
            </p>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Footer;
