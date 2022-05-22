// @ts-nocheck
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroBanner from "../Shared/HeroBanner/HeroBanner";
import Contact from "../Contact/Contact";
import { AiFillCar, AiOutlineSafetyCertificate } from "react-icons/ai";
import {MdOutlineSupportAgent} from 'react-icons/md';
import Reviews from "../Shared/Reviews/Reviews";
import Services from "../Shared/Services/Services";


const Home = () => {
  return (
    <>
      <HeroBanner />
      <Container className="services py-5">
        <Row className='g-3'>
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
              <h2>24/7 SUPPORT</h2>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Reviews */}
      {/* <Reviews/> */}
      <Services/>
    </>
  );
};

export default Home;
