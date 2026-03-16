import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="hero-banner-container">

      <div
        className="hero-banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <div className="hero-slide hero-slide1"></div>
        <div className="hero-slide hero-slide2"></div>
      </div>

      <button className="banner-arrow left-arrow" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="banner-arrow right-arrow" onClick={nextSlide}>
        <FaChevronRight />
      </button>

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
