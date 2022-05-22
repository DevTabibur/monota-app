// @ts-nocheck
import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioImg from "../../Assets/Images/portfolio.png";
import { GoHome } from "react-icons/go";


const Portfolio = () => {
  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>Portfolio</h2>
            <p>Here you can see my details like portfolio</p>
          </Row>
        </Container>
      </div>

      <div className="about-section py-5">
        <Container>
          <Row>
            <Col md={5} sm={12} order="1">
              <div className="mid-col">
                <img src={PortfolioImg} alt="PortfolioImg" />
              </div>
            </Col>
            <Col md={2}></Col>
            <Col md={5} sm={12}>
              <div className="left-col">
                <div className="section-title">
                  <div className="icon">
                    <GoHome className="go-home-icon" />
                  </div>
                  <span>About Me</span>
                  <h2>Tabibur Rahman</h2>
                </div>
              </div>
              <div className="right-col">
                <h6>Email: tobiburrohman2@gmail.com</h6>
                <h4 className="mb-0">Education:</h4> <br />
                <p className="pt-0">
                  I love science. My previous department was science. Now I'm
                  doing B.S.C in physics(2nd year).{" "}
                </p>
                <h4>Skills:</h4> <br />
                <p>
                  HTML, CSS, SCSS, JS, REACT, NODE.JS, EXPRESS.JS, MONGODB, JWT, WORDPRESS,
                  I'm also a freelancer (WORDPRESS)
                </p>
                <h4>MERN Project:</h4> <br />
                <p>
                  1. https://incubator-app.web.app/<br />
                  2. https://juristic-4bf27.web.app/<br />
                  1. https://juristic-4bf27.web.app/<br />
                </p>
                <h4>WORDPRESS Project:</h4> <br />
                <p>
                  1. https://dlckenya.com/<br />
                  2. https://dlc.co.ke/<br />
                  1. https://breakthroughwithjeff.org/<br />
                </p>
                <div className="quoter">
                  <h4>Tabibur Rahman</h4>
                  <span>- MERN Stack Developer at Programming hero</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
