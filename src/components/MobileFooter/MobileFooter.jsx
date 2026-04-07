import "./MobileFooter.css";
import { FaCrown } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { FaPlus, FaStore, FaTag, FaGavel, FaBuilding } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import luxuryLoading from "../../assets/luxury-loading.mp4";
import classicLoading from "../../assets/classic-loading.mp4";

const allowedPaths = ["/", "/marketplace", "/auctions", "/buy-now", "/browse/about-us", "/browse/buy-sell", "/browse/our-services", "/browse/pricing-plans", "/browse/advertise", "/contact-us"];

const MobileFooter = () => {
  const { pathname } = useLocation();
  const isAllowed = allowedPaths.includes(pathname);
  const [showLinks, setShowLinks] = useState(false);
  const [active, setActive] = useState("luxury");
  const [loading, setLoading] = useState(false);
  const [nextMode, setNextMode] = useState(null);
  const [videoReady, setVideoReady] = useState(false);


  if (!isAllowed) return null;

  const handleSwitch = (type) => {
  if (type === active) return;

  setNextMode(type);
  setVideoReady(false);
  setLoading(true);
};

  return (
    <div className="footer-wrapper">
      <div className="footer-bar">

        {/* LEFT SIDE */}
        <div
          className={`footer-side luxury ${active === "luxury" ? "active" : ""}`}
          onClick={() => handleSwitch("luxury")}
        >
          <FaCrown />
          <span>LUXURY</span>
        </div>

        {/* CENTER BUTTON */}
        <div className="footer-center">
          <div
            className="plus-btn"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaPlus />
          </div>
          <span className="center-text">List / Sell</span>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`footer-side classic ${active === "classic" ? "active" : ""}`}
          onClick={() => handleSwitch("classic")}
        >
          <IoDiamond />
          <span>CLASSIC</span>
        </div>

        {/* FLOATING MENU */}
        {showLinks && (
          <div className="footer-links1">
            <div className="menu-item market" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <FaStore style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>Marketplace</span>
            </div>

            <div className="menu-item sell" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <FaTag style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>Sell Now</span>
            </div>

            <div className="menu-item hammer" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <FaGavel style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>Auctions</span>
            </div>

            <div className="menu-item tolet" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <FaBuilding style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>To-Let</span>
            </div>
          </div>
        )}

        {loading && (
  <div className="footer-loader-overlay">
    <video
      autoPlay
      muted
      playsInline
      preload="auto"
      className="footer-loader-video"
      onLoadedData={() => setVideoReady(true)}
      onEnded={() => {
        setActive(nextMode);
        setLoading(false);
      }}
      style={{ visibility: videoReady ? "visible" : "hidden" }}
    >
      <source
        src={nextMode === "luxury" ? luxuryLoading : classicLoading}
        type="video/mp4"
      />
    </video>
  </div>
)}


      </div>
    </div>
  );
};

export default MobileFooter;
