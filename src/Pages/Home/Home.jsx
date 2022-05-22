// @ts-nocheck
import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroBanner from "../Shared/HeroBanner/HeroBanner";
import Contact from "../Contact/Contact";
import { AiFillCar, AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import Reviews from "../Shared/Reviews/Reviews";
import Services from "../Shared/Services/Services";
import FindParts from "../Shared/FindParts/FindParts";
import Summary from "../Shared/Summary/Summary";
import Parts from "../Shared/Parts/Parts";
import useParts from "../../Hooks/useParts";
import useReview from '../../Hooks/useReview';

const Home = () => {
  const [parts, setParts] = useParts();
  const [review, setReview] = useReview([]);

  return (
    <>
      {/* <HeroBanner />
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
      </Container> */}

      {/* <Services/>
      <FindParts /> */}

      {/* tools/parts */}
      {/* <Container className="py-4">
        <Row className="g-4">
          {parts.map((item) => (
            <Parts key={item._id} item={item} />
          ))}
        </Row>
      </Container> */}

      {/* <Summary/> */}

      {/* Reviews */}
      <Container className="pt-4">
      <h2 className="title mt-3 mb-5 pb-4 d-flex justify-content-center">
        What Client says about us
      </h2>
        <Row className='g-4'>
          {
            review.map((item) => <Reviews
              key={item._id}
              item={item}
            />)
          }
        </Row>
      </Container>
    </>
  );
};

export default Home;
