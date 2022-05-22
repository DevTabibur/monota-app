import React from "react";
import "./Parts.css";
import { Button, Card, Col } from "react-bootstrap";

const Parts = ({ item }) => {
  const {
    _id,
    name,
    image,
    price,
    description,
    minimumQuantity,
    availableQuantity,
  } = item;
  return (
    <Col md={4} lg={4} sm={12}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h6>Available Order Quantity: {availableQuantity}</h6>
          <h6>Minimum Order Quantity: {minimumQuantity}</h6>
          <h6>Price: ${price}</h6>
          <Card.Text>{description}</Card.Text>
          <Button variant="danger" className='w-75 text-center'>PURCHASE</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Parts;
