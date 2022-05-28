import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import logo from "../../../Assets/monota-img/logo.png";
import axios from "axios";
import useToken from "../../../Hooks/useToken";

const HeaderNav = () => {
  const [user] = useAuthState(auth);
  const [token] = useToken(user)

  // const navigate = useNavigate();

  // const [filterUser, setFilterUser] = useState({});

  // const getItems = async () => {
  //   const email = user?.email;
  //   const url = `https://glacial-cove-96112.herokuapp.com/users/${email}`;
  //   // console.log(url);
  //   try {
  //     const { data } = await axios.get(url, {
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     // console.log(data, "data");
  //     setFilterUser(data);
  //   } catch (error) {
  //     // console.log(error);
  //     if (error.response.status === 403 || error.response.status === 401) {
  //       signOut(auth);
  //       navigate("/login");
  //     }
  //     // alert(error.message)
  //   }
  // };
  // getItems();


  return (
    <>
      <Navbar className="shadow header" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="header-link" to="/home">
                HOME
              </Nav.Link>

              <Nav.Link as={Link} className="header-link" to="/portfolio">
                PORTFOLIO
              </Nav.Link>

              <Nav.Link as={Link} className="header-link" to="/blog">
                BLOG
              </Nav.Link>

              {/* // only login user can see this route */}

              {user && (
                <>
                  {" "}
                  <Nav.Link as={Link} className="header-link" to="/dashboard">
                    DASHBOARD
                  </Nav.Link>
                </>
              )}

              {user && (
                <Nav.Link className="header-link" to="/">
                  {user?.displayName}
                </Nav.Link>
              )}
              {user ? (
                <button
                  className="header-link sign-out-btn"
                  onClick={() => signOut(auth)}
                >
                  LOGOUT
                </button>
              ) : (
                <Nav.Link className="header-link" as={Link} to="/login">
                  LOGIN
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
