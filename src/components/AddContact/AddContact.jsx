import React from "react";
import { useState } from "react";
import "./AddContact.css";
const AddContact = () => {
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    country: "",
    tag: "",
    dateOfBilling: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let submitButton = document.querySelector(".add-contact-button");
    submitButton.innerText = "Please Wait...";
    try {
      const data = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/add-contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const res = await data.json();
    } catch (error) {
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 3000);
    } finally {
      submitButton.innerText = "Submit";
    }
  };

  return (
    <div className="add-contact-form-wrapper">
      {submitError ? (
        <h4 style={{ color: "red", width: "100vw", textAlign: "center" }}>
          Something Went Wrong.Try Later.
        </h4>
      ) : null}
      <div className="add-contact-form">
        <h2>Add Contact Details</h2>
        <div>
          <input
            type="text"
            name="name"
            className="add-contact-input-form"
            value={formData.name}
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="contactNumber"
            className="add-contact-input-form"
            placeholder="Enter Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Enter Country"
            className="add-contact-input-form"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="tag"
            placeholder="Enter Tag"
            className="add-contact-input-form"
            value={formData.tag}
            onChange={handleChange}
          />
        </div>
        <div className="date-of-billing-group">
          <label htmlFor="dateOfBilling">Date of Billing</label>
          <input
            type="date"
            name="dateOfBilling"
            className="add-contact-input-form date-of-billing-input"
            value={formData.dateOfBilling}
            onChange={handleChange}
          />
        </div>
        <button className="add-contact-button" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddContact;
