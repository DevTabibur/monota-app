import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./FindParts.css";

const FindParts = () => {
  const handleFindingProduct = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="find-parts-bg">
            <div className="inner-info py-5 text-white">
              <h2 className="d-block mb-3 text-center">Find your Parts</h2>

              <div className="find-form-bg w-100 text-center px-5">
              <Form onSubmit={handleFindingProduct}>
                <Form.Group className="mb-3">
                  <Form.Control className="w-100" type="text" placeholder="Find your Parts" />
                </Form.Group>
                <Button className="w-100" variant="danger" type="submit">
                  FIND YOUR TOOLS/PARTS
                </Button>
              </Form>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FindParts;
