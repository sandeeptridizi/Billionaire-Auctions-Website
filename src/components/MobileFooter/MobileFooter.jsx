import "./MobileFooter.css";
import { LuCrown } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

import marketPlace from "../../assets/marketplace.png";
import sellNow from "../../assets/sell-now.png";
import hammer from "../../assets/hammer.png";
import tolet from "../../assets/to-let.png";

import luxuryLoading from "../../assets/luxury-loading.mp4";
import classicLoading from "../../assets/classic-loading.mp4";

const MobileFooter = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [active, setActive] = useState("luxury");
  const [loading, setLoading] = useState(false);
  const [nextMode, setNextMode] = useState(null);
  const [videoReady, setVideoReady] = useState(false);


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
          <LuCrown />
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
          <IoDiamondOutline />
          <span>CLASSIC</span>
        </div>

        {/* FLOATING MENU */}
        {showLinks && (
          <div className="footer-links1">
            <div className="menu-item market" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <img src={marketPlace} alt="" />
              <span>Marketplace</span>
            </div>

            <div className="menu-item sell" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <img src={sellNow} alt="" />
              <span>Sell Now</span>
            </div>

            <div className="menu-item hammer" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <img src={hammer} alt="" />
              <span>Auctions</span>
            </div>

            <div className="menu-item tolet" onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
              <img src={tolet} alt="" />
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
