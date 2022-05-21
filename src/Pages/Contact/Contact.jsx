import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  const handleContactForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log(name, email, message);
  };

  return (
    <div className="contact-form">
      <div className="wrapper p-5">
        <div className="inner">
          <form onSubmit={handleContactForm}>
            <h3>Contact Us</h3>
            <p>24/7 at your services. Contact Us here.</p>
            <label className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
              <span>Your Name</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
              <span>Your Mail</span>
              <span className="border"></span>
            </label>
            <label className="form-group">
              <textarea
                rows="6"
                cols="50"
                id="message"
                name="message"
                className="form-control"
                required
              ></textarea>
              <span>Your Message</span>
              <span className="border"></span>
            </label>
            <button type="submit" className="contact-submit-btn">
              CONTACT
              <AiOutlineArrowRight className="submit-arrow-icon" />
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
