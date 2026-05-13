import React, { useState, useEffect } from "react";
import "./EMICalculator.css";

const EMICalculator = ({ price = 50000 }) => {
  const [loanAmount, setLoanAmount] = useState(price);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(1); // ✅ now in YEARS
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const calculateEMI = () => {
    const principal = Number(loanAmount);
    const monthlyRate = interestRate / 12 / 100;

    const months = tenure * 12;

    const emiValue =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(emiValue || 0);
  };

  return (
    <div className="emi-container">
      <h3>EMI Calculator</h3>

      <div className="emi-field">
        <label>Loan Amount (₹)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>

      <div className="emi-field">
        <label>Interest Rate (%)</label>
        <input
          type="range"
          min="1"
          max="20"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <span>{interestRate}%</span>
      </div>

      <div className="emi-field">

        <label>Tenure (Years)</label>
        <input
          type="range"
          min="1"
          max="30" // adjust if needed
          value={tenure}
          onChange={(e) => setTenure(Number(e.target.value))}
        />

        <span>{tenure} years</span>
      </div>

      <div className="emi-result">

        <h2>₹ {emi.toFixed(0)} / month</h2>
      </div>
    </div>
  );
};

export default EMICalculator;
