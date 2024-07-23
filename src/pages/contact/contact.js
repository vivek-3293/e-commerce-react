import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <div className="container mt-5 mb-4">
      <div className="contact-head text-center">
        <h1 className="mb-4">
          Contact <span>Us</span>
        </h1>
      </div>
      <div className="cont-main d-flex align-items-center justify-content-between py-4">
        <form className="contact-form w-100" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary px-4 py-2">
            Submit
          </button>
        </form>

        <div className="contact-map w-100">
         <div>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59554.31432934542!2d72.67984495187544!3d21.106798698635306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be052cf509c4d89%3A0x8566aec424773fe3!2sDumas%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721725029826!5m2!1sen!2sin"
            className="w-100"
            height="430"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
