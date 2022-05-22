import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reviews.css";
import useReview from "../../../Hooks/useReview";

const Reviews = ({ item }) => {
  const { name, image, ratings, review } = item;
  return (
    <>
      
      <div className="col-lg-6 col-md-6 col-sm-12 g-4 mb-5 pb-2">
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
      </div>
    </>
  );
};

export default Reviews;
