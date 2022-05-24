import React from "react";
import "./Dashboard.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { GoThreeBars } from "react-icons/go";

const Dashboard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Container className="py-5 drawer-page">
        <Row className="g-4">
          <Col md={2} lg={2} sm={12}>
            <button
              onClick={toggleDrawer}
              className="shadow bg-danger border-0 p-3 text-white rounded"
            >
              <GoThreeBars />
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="left"
              className="bla bla bla"
            >
              <ul className="drawer-ul">
                <li>
                  <Link to="users" className="drawer-link shadow rounded">
                    All User
                  </Link>
                </li>
                <li>
                  <Link to="profile" className="drawer-link shadow rounded">
                    My Profile
                  </Link>
                </li>

                <li>
                  <Link to="review" className="drawer-link shadow rounded">
                    Add Review
                  </Link>
                </li>

                <li>
                  <Link to="order" className="drawer-link shadow rounded">
                    My Order
                  </Link>
                </li>
              </ul>
            </Drawer>
          </Col>

          <Col md={10} lg={10} sm={12}>
            <div className="dashboard-bg">
              <h2 className="text-danger mb-2">Dashboard</h2>
              <Outlet></Outlet>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
