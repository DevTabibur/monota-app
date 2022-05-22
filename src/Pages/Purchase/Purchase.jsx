import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSingleParts from "../../Hooks/useSingleParts";
import "./Purchase.css";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import PurchaseForm from "../Shared/PurchaseForm/PurchaseForm";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [singleParts] = useSingleParts(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const handleQuantity = (e) => {
    alert();
  };

  return (
    <>
      <Container className="bg-gray">
        <Row>
          <Col md={6} lg={6} sm={12}>
            <figure>
              <img className="w-100" src={singleParts?.image} alt="Album" />
            </figure>
            <h2 className="card-title">{singleParts?.name}</h2>
            <p>{singleParts?.description}</p>
            <p>Price: ${singleParts?.price}</p>
            <p>Available Quantity: {singleParts?.availableQuantity}</p>
            <form onSubmit={handleSubmit(handleQuantity)}>
              <input
                type="text"
                placeholder="Quantity"
                className="input input-bordered input-secondary w-full max-w-xs"
                required=""
                {...register("quantity", {
                  required: "Quantity is required",
                  pattern: {
                    message: "Please enter a valid Quantity",
                  },
                })}
                // onKeyUp={(e) => {
                //     trigger('quantity')
                //     setQuantity(e.target.value)
                // }}
              />
              <button className="text-white bg-danger px-5 py-[10px] rounded-md ml-2">
                Proceed
              </button>
            </form>
          </Col>

          <Col md={6} lg={6} sm={12}>
            <div className="card-body">
              <PurchaseForm></PurchaseForm>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Purchase;
