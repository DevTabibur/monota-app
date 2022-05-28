import react, { useState } from "react";
import { Card, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowAddedItems = ({ item, handleDelete }) => {
  // console.log(item);
  const {_id} = item;
  return (
    <>
      <Col
        md={6}
        sm={12}
        lg={6}
        className="d-flex justify-content-center align-items-center g-4"
      >
        <Card
          className="parent-col shadow p-3 rounded"
          style={{ width: "22rem" }}
        >
          <Card.Img className=" h-75 mx-auto" variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.userName}</Card.Title>
            <Card.Text>
              <h5>Price: ${item.price}</h5>
              <h5>Quantity: {item.quantity}</h5>
              <p>{item.description}</p>
            </Card.Text>
            <button onClick={() => handleDelete(item._id)} className="card-btn border-0 bg-danger text-white px-4 py-3 rounded shadow">
              DELETE
            </button>
            <Link to={`/dashboard/order/payment/${_id}`} className="ms-3 shadow rounded card-btn border-0 bg-info text-white px-4 py-3">PAYMENT</Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default ShowAddedItems;
