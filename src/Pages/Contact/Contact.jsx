import React, { useState } from "react";
import "../Contact/Contact.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="Parent-container" id="contact">
        <div className="contact-padding">
          <div className="Contact-container">
            <div className="circle"></div>
            <div className="circle-cont">Contact Me</div>
          </div>
          <p className="Contact-quote">Need help? Get in touch now!</p>
          <div className="phone-container">
            <div className="icon-phone">
              <BiSolidPhoneCall className="Phone-icon" />
            </div>
            <div className="Phone">
              <p className="first-para">Phone</p>
              <p className="second-para">+123 456 7890</p>
            </div>
          </div>
          <div className="phone-container">
            <div>
              <MdEmail className="Phone-icon" />
            </div>
            <div className="email">
              <p className="first-para">Email</p>
              <a href="mailto:ramyaezhil6phase@gmail.com">
                <p className="second-para">example@email.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-flex">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-box"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-box"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-flex">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-box"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-box"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              rows={4}
              cols={50}
              name="message"
              placeholder="Message"
              className="form-box"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              value="Send Me Message"
              className="Submit-button"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
