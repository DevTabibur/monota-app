import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroBanner from "../Shared/HeroBanner/HeroBanner";
import Contact from "../Contact/Contact";
import { AiFillCar, AiOutlineSafetyCertificate } from "react-icons/ai";
import {MdOutlineSupportAgent} from 'react-icons/md';


const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container className="services py-5">
        <Row>
          <Col lg={4} md={4} sm={6} className="">
            <div className="icon-box d-flex justify-content-center align-items-center">
              <div className="icon">
                <AiFillCar className="inner-icon"/>
              </div>
              <h2>FREE SHIPPING</h2>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6} className="">
            <div className="icon-box d-flex justify-content-center align-items-center">
              <div className="icon">
                <AiOutlineSafetyCertificate className="inner-icon"/>
              </div>
              <h2>SAFE SHIPPING</h2>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6} className="">
            <div className="icon-box d-flex justify-content-center align-items-center">
              <div className="icon">
                <MdOutlineSupportAgent className="inner-icon"/>
              </div>
              <h2>ONLINE SUPPORT</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
