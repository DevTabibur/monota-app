import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reviews.css";
import useReview from "../../../Hooks/useReview";
import { Col } from "react-bootstrap";

const Reviews = ({ item }) => {
  const { name, image, ratings, review } = item;
  return (
    <>
      
      <Col md={6} lg={6} sm={12} className="mb-5 pb-2">
        <div className="review-box d-flex">
          <div className="box-left">
            <img className="author-img" src={image} alt="author__img" />
            <h3>{name}</h3>
            <hr />
            <p>{ratings} ratings</p>
          </div>
          <div className="box-right">
            <p>{review.slice(0, 80)}...</p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Reviews;
