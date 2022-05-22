import React from "react";
import ErrorImg from "../../Assets/Images/4041.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NotFound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="error-img-div d-flex justify-content-center">
            <img className="error-img" src={ErrorImg} alt="error__img" />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="error-page-info ">
            <h2 className="mb-5">There is nothing you want!</h2>
            <Link to="/home" className="btn btn-danger w-100 mb-3">
              Go Back to Home
            </Link>
            {/* <Link to="/about" className="btn btn-danger w-100">
              About Me
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
