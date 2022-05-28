import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSingleParts from "../../Hooks/useSingleParts";
import "./Purchase.css";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PurchaseForm from "../Shared/PurchaseForm/PurchaseForm";
import { ToastContainer, toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  console.log('id', id);
  const [singleParts] = useSingleParts(id);

  const handleQuantity = (e) => {
    alert();
  };

  const handlePurchaseForm = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const addedQuantity = e.target.quantity.value;
    const contact = e.target.contact.value;
    const userInput = {
      userName,
      email,
      address,
      addedQuantity,
      contact,
    };

    if (
      singleParts?.minimumQuantity < addedQuantity ||
      addedQuantity > singleParts?.availableQuantity
    ) {
      //post order to database
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInput),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          toast.success("Successfully added quantity", { toastId: "Success" });
          e.target.reset();
        });
    } else {
      toast.error(
        "You have to add quantity above the minimum and below the maximum quantity",
        { toastId: "error" }
      );
    }
  };

  return (
    <div className="purchase-parent py-5">
      <Container className="bg-gray">
        <Row>
          <Col md={6} lg={6} sm={12}>
            <div className="img-div">
              <img className="" src={singleParts?.image} alt="Album" />
            </div>
            <h2 className="card-title">{singleParts?.name}</h2>
            <p>{singleParts?.description}</p>
            <p>Price: ${singleParts?.price}</p>
            <p>Minimum Quantity: {singleParts?.minimumQuantity}</p>
          </Col>

          <Col md={6} lg={6} sm={12}>
            <PurchaseForm
              handlePurchaseForm={handlePurchaseForm}
            ></PurchaseForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Purchase;
