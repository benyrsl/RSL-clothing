import React from "react";
import "./contactus.styles.css";
import ContactusEmail from "../../components/contactus-email/contactus-email.component";

const Contactus = () => {
  return (
    <div className="container">
      <h1 className="brand">
        <span>RSL</span> Clothing
      </h1>
      <div className="wrapper">
        <div className="company-info">
          <h3>RSL Clothing LTD</h3>
          <ul>
            <li>
              <i className="fa fa-envelope"></i> brasouly@uoguelph.ca
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Email Us</h3>
          <div className="alert">Your message has been sent</div>
          <ContactusEmail />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
