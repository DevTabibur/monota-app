import { updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import useToken from "../../../Hooks/useToken";
import "./Register.css";

const Register = () => {
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [user1] = useAuthState(auth);
  const [token] = useToken( user1 );


  const [sendEmailVerification] = useSendEmailVerification(auth);

  const [showPass, setShowPass] = useState(false);

  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    general: "",
  });


  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    


    const handleNameChange =(e)=>{
      const userName = e.target.value;
      setUserInfo({...userInfo, userName: userName});
      setErrors({...errors, userName: ""});
    }
  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    // setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    await sendEmailVerification();

    const displayName= userInfo.userName;
    await updateProfile({ displayName });
        alert('Updated profile');

  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email provided, please provide a valid email", {
            toastId: "InvalidEmail",
          });
          break;
        case "auth/invalid-password":
          toast.error("Wrong password. Intruder!!", {
            toastId: "InvalidEmail",
          });
          break;
        default:
          toast.error("something went wrong", { toastId: "InvalidEmail" });
      }
    }
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    if (user1 || user) {
      navigate(from, { replace: true });
    }
  }, [user1, user])


  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>Register Here</h2>
            <p>Are you new to the website? PLease Register!</p>
          </Row>
        </Container>
      </div>

      <div className="login-bg">
        <ToastContainer />
        <Container className="py-5">
          <Row>
            <Col></Col>
            <Col md={4} lg={4} sm={4}>
              <div className="form-bg shadow rounded-3 p-3">
                <h2 className="title text-center my-2">
                  Register <span className="title-2">Form</span>
                </h2>

                <Form onSubmit={handleRegister}>

                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    onChange={handleNameChange}
                      type="text"
                      placeholder="Enter Your Name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      onChange={handleEmailChange}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    {errors?.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={showPass ? "text" : "password"}
                      onChange={handlePasswordChange}
                      placeholder="Password"
                    />
                    <p
                      className="absolute top-3 right-5"
                      onClick={() => setShowPass(!showPass)}
                    >
                      🔥
                    </p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      onChange={handleConfirmPasswordChange}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    {errors?.password && (
                      <p className="error-text">{errors.password}</p>
                    )}
                  </Form.Group>

                  <Button type="submit" className="w-100 d-block login-btn">
                    REGISTER
                  </Button>

                  <div className="my-3 d-flex justify-content-center form-bottom-text">
                    <h6 className="text-dark ">
                      Already have an Account?{" "}
                      <Link to="/login"> Please Login!</Link>
                    </h6>
                  </div>
                </Form>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
