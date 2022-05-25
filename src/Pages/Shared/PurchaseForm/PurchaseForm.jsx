import React, { useState } from "react";
import "./PurchaseForm.css";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import useSingleParts from "../../../Hooks/useSingleParts";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { signOut } from "firebase/auth";

const PurchaseForm = ({ handlePurchaseForm }) => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [singleParts] = useSingleParts(id);
  const navigate = useNavigate();

  const [filterUser, setFilterUser] = useState({});
console.log('filterUser', filterUser);

  const getItems = async () => {
    const email = user?.email;
    const url = `http://localhost:5000/users/${email}`;
    // console.log(url);
    try {
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // console.log(data, "data");
      setFilterUser(data);
    } catch (error) {
      // console.log(error);
      if (error.response.status === 403 || error.response.status === 401) {
        signOut(auth);
        navigate("/login");
      }
      // alert(error.message)
    }
  };
  getItems();

  return (
    <>
      <div className="contact-form">
        <div className="wrapper">
          <div className="inner">
            <form onSubmit={handlePurchaseForm}>
              <label className="form-group">
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control"
                  value={user?.displayName || filterUser[0]?.displayName}
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
