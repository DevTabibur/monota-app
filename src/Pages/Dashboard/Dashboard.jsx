import React from "react";
import "./Dashboard.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Container className='py-5'>
        <Row className='g-4'>
          <Col md={3} lg={3} sm={12}>
            <button onClick={toggleDrawer} className="bg-danger border-0 p-3 text-white rounded">Open Drawer</button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="bla bla bla"
            >
            <ul className="drawer-ul">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="review">Add Review</Link>
              </li>

              <li>
                <Link to="order">My Order</Link>
              </li>
              </ul>
            </Drawer>
          </Col>

          <Col md={9} lg={9} sm={12}>
            <h2>Dashboard</h2>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
