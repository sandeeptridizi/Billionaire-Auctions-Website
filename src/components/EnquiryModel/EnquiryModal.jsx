import React, { useState } from "react";
import "./EnquiryModal.css";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { submitEnquiry } from "../../lib/products";

const EnquiryModal = ({ onClose, productId, source }) => {
  const [form, setForm] = useState({ visitorName: "", visitorEmail: "", visitorPhone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.visitorName || !form.visitorEmail || !form.message) {
      setError("Please fill in all required fields");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await submitEnquiry({ ...form, productId, source });
      setSuccess(true);
      setForm({ visitorName: "", visitorEmail: "", visitorPhone: "", message: "" });
      setTimeout(() => { onClose(); }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit enquiry");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="enquiry-overlay">
      <div className="enquiry-modal">

        <div className="enquiry-header">
          <div>
            <h2>Enquire Now</h2>
            <p>Submit your enquiry and our team will contact you shortly</p>
          </div>

          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {success ? (
          <div className="enquiry-form" style={{ textAlign: "center", padding: "2rem" }}>
            <h2 style={{ color: "green", fontSize: "1.1rem", fontWeight: 600 }}>Enquiry submitted Successfully!</h2>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={handleSubmit}>

            <label>Full Name*</label>
            <div className="input-group">
              <FaUser />
              <input type="text" name="visitorName" value={form.visitorName} onChange={handleChange} placeholder="Enter your full name" required />
            </div>

            <label>Email Address*</label>
            <div className="input-group">
              <FaEnvelope />
              <input type="email" name="visitorEmail" value={form.visitorEmail} onChange={handleChange} placeholder="your.email@example.com" required />
            </div>

            <label>Phone Number</label>
            <div className="input-group">
              <FaPhone />
              <input type="text" name="visitorPhone" value={form.visitorPhone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
            </div>

            <label>Message*</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us more about your enquiry..." required></textarea>

            {error && <p style={{ color: "red", fontSize: "0.9rem", margin: "0.5rem 0" }}>{error}</p>}

            <button type="submit" className="submit-btn" disabled={submitting}>
              <FaPaperPlane /> {submitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            <p className="terms">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
              Your information will be kept confidential.
            </p>

          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
