import react, { useState } from 'react'
import { Card, Col } from 'react-bootstrap';

const ShowAddedItems = ({ item, handleDelete }) => {
    return (
        <>
          <Col
            md={4}
            sm={12}
            lg={4}
            className="d-flex justify-content-center align-items-center g-4"
          >
            <Card
              className="parent-col shadow p-3 rounded"
              style={{ width: "22rem" }}
            >
              <Card.Img className=" h-75 mx-auto" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <h5>Supplier: {item.supplier}</h5>
                  <h5>Price: ${item.price}</h5>
                  <h5>Quantity: {item.quantity}</h5>
                  <h5>Sold: {item.sold}</h5>
                  <p>{item.description}</p>
                </Card.Text>
                <button onClick={()=> handleDelete(item._id)} className="card-btn">DELETE</button>
              </Card.Body>
            </Card>
          </Col>
        </>
      );

}
    export default ShowAddedItems;