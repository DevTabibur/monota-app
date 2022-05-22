// @ts-nocheck
import React from "react";
import "./Summary.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";

const Summary = () => {
  return (
    <>
      <Container className="py-4 summary-section">
        <div className="section-title text-center py-4">
          <h2>Business Summary</h2>
        </div>
        <Row className="g-4">

          <Col lg={4} md={4} sm={6}>
            <div className="summary-box text-center">
              <div className="icon-div">
                <BsPeople className="icon"/>
              </div>
              <div className="info">
                <h4>100+</h4>
                <h6>Customers</h6>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={6}>
            <div className="summary-box text-center">
              <div className="icon-div">
                <FaDollarSign className="icon"/>
              </div>
              <div className="info">
                <h4>120M+</h4>
                <h6>Annual Revenues</h6>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={6}>
            <div className="summary-box text-center">
              <div className="icon-div">
                <AiOutlineComment className="icon"/>
              </div>
              <div className="info">
                <h4>33K+</h4>
                <h6>Reviews</h6>
              </div>
            </div>
          </Col>

          
        </Row>
      </Container>
    </>
  );
};

export default Summary;
