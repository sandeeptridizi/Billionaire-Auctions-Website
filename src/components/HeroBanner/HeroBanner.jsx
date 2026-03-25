import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import api from "../../lib/api";
import { getFile } from "../../lib/s3";
import "./HeroBanner.css";

const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const [heroSearch, setHeroSearch] = useState('');
  const [bannerAds, setBannerAds] = useState([]);
  const navigate = useNavigate();

  // Fetch homepage banner advertisements
  useEffect(() => {
    api.get("/api/advertisement/public", { params: { placement: "homepage_banner" } })
      .then((res) => {
        const ads = res.data?.data || [];
        // Only use ads that have a media image
        const validAds = ads.filter((ad) => ad.media);
        if (validAds.length > 0) {
          setBannerAds(validAds);
        }
      })
      .catch(() => {
        // Silently fall back to static banners
      });
  }, []);

  // 2 fixed static banners + any API banners appended after
  const totalSlides = 2 + bannerAds.length;

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 20000);

    return () => clearInterval(slider);
  }, [totalSlides]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleBannerClick = (ctaUrl) => {
    if (!ctaUrl) return;
    // Open external links in new tab, internal links via navigate
    if (ctaUrl.startsWith("http://") || ctaUrl.startsWith("https://")) {
      window.open(ctaUrl, "_blank", "noopener,noreferrer");
    } else {
      navigate(ctaUrl);
    }
  };

  return (
    <div className="hero-banner-container">

      <div
        className="hero-banner-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* Fixed static banners (always shown as slide 1 & 2) */}
        <div className="hero-slide hero-slide1"></div>
        <div className="hero-slide hero-slide2"></div>

        {/* Dynamic API banners (slide 3 onwards) */}
        {bannerAds.map((ad) => (
          <div
            key={ad.id}
            className={`hero-slide hero-slide-dynamic${ad.ctaUrl ? " hero-slide-clickable" : ""}`}
            style={{ backgroundImage: `url(${getFile(ad.media)})` }}
            onClick={() => handleBannerClick(ad.ctaUrl)}
            role={ad.ctaUrl ? "link" : undefined}
            title={ad.title || ""}
          />
        ))}
      </div>

      <button className="banner-arrow left-arrow" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <button className="banner-arrow right-arrow" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      <div className="search-row">
        <Link to="/" className="search-home-link">
          <GoHomeFill className="search-home-icon" />
        </Link>
        <div className="search-icon-container">
          <RiSearchLine className="search-icon" />
          <input
            type="text"
            placeholder="Search for luxury items..."
            className="search-input"
            value={heroSearch}
            onChange={(e) => setHeroSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && heroSearch.trim()) {
                navigate(`/marketplace?q=${encodeURIComponent(heroSearch.trim())}`);
              }
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default HeroBanner;
