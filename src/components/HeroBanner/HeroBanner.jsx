import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="hero-banner-container">

      <div
        className="hero-banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <div className="hero-slide hero-slide1"></div>
        <div className="hero-slide hero-slide2"></div>
      </div>

      <div className="search-icon-container">
        <RiSearchLine className="search-icon" />
        <input
          type="text"
          placeholder="Search for luxury items..."
          className="search-input"
        />
      </div>

    </div>
  );
};

export default HeroBanner;