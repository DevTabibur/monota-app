import React from "react";
import "./Dashboard.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <button onClick={toggleDrawer}>Drawer</button>
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

          <Col>
            <h2>Dashboard</h2>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
