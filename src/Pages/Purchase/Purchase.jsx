import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSingleParts from "../../Hooks/useSingleParts";
import "./Purchase.css";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PurchaseForm from "../Shared/PurchaseForm/PurchaseForm";
import { ToastContainer, toast } from 'react-toastify';


const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [singleParts] = useSingleParts(id);

  const handleQuantity = (e) => {
    alert();
  };

  const handlePurchaseForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const addedQuantity = e.target.quantity.value;
    const contact = e.target.contact.value;

    // if ( singleParts?.minimumQuantity < addedQuantity){
    //   toast.error("Please add quantity above minimum quantity", {
    //     toastId: "quantity",
    //   });
    // }
    // else if(singleParts?.availableQuantity > addedQuantity){
    //   toast.error("You have to add quantity below available quantity", {
    //     toastId: "quantity",
    //   });

    // }

    const purchaseInfo = {
      name, email, address, addedQuantity, contact
    }
    // send data to server for update
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url, {
      method: "PUT",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(purchaseInfo),
    })
    .then( res=> res.json())
    .then(data => {
      console.log('data', data);
      toast.success('Successfully added quantity', {toastId: "Success"})
      e.target.reset()
    })

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
