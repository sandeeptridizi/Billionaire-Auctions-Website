import React from "react";
import "./EnquiryModal.css";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const EnquiryModal = ({ onClose }) => {
  return (
    <div className="enquiry-overlay">
      <div className="enquiry-modal">

        {/* Header */}
        <div className="enquiry-header">
          <div>
            <h2>Enquire Now</h2>
            <p>Submit your enquiry and our team will contact you shortly</p>
          </div>

          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Form */}
        <form className="enquiry-form">

          <label>Full Name*</label>
          <div className="input-group">
            <FaUser />
            <input type="text" placeholder="Enter your full name" />
          </div>

          <label>Email Address*</label>
          <div className="input-group">
            <FaEnvelope />
            <input type="email" placeholder="your.email@example.com" />
          </div>

          <label>Phone Number*</label>
          <div className="input-group">
            <FaPhone />
            <input type="text" placeholder="+91 XXXXX XXXXX" />
          </div>

          <label>Message (Optional)</label>
          <textarea placeholder="Tell us more about your enquiry..."></textarea>

          <button type="submit" className="submit-btn">
            <FaPaperPlane /> Submit Enquiry
          </button>

          <p className="terms">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
            Your information will be kept confidential.
          </p>

        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
