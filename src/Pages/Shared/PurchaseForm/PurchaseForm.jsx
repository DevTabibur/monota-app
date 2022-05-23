import React from "react";
import "./PurchaseForm.css";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import useSingleParts from "../../../Hooks/useSingleParts";
import { useParams } from "react-router-dom";

const PurchaseForm = ({ handlePurchaseForm }) => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [singleParts] = useSingleParts(id);


  return (
    <>
      <div className="contact-form">
        <div className="wrapper">
          <div className="inner">
            <form onSubmit={handlePurchaseForm}>
              <label className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={user?.displayName}
                  readOnly
                />
                <span className="border"></span>
              </label>

              <label className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={user?.email}
                  readOnly
                />
                <span className="border"></span>
              </label>

              <label className="form-group">
                <input
                  type="text"
                  id="addressID"
                  name="address"
                  className="form-control"
                />
                <span>Address</span>
                <span className="border"></span>
              </label>

              <label className="form-group">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control"
                />
                <span>Order (Quantity)</span>
                <span className="border"></span>
              </label>

              <label className="form-group">
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  className="form-control"
                />
                <span>Contact Number (optional)</span>
                <span className="border"></span>
              </label>

              <button type="submit" className="contact-submit-btn">
                PURCHASE
                <AiOutlineArrowRight className="submit-arrow-icon" />
                <i className="zmdi zmdi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseForm;
