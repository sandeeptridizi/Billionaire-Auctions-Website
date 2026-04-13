import "./MobileFooter.css";
import { FaCrown } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { FaPlus, FaStore, FaTag, FaGavel, FaBuilding } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import luxuryLoading from "../../assets/luxury-loading.mp4";
import classicLoading from "../../assets/classic-loading.mp4";
import useAppContext from "../../context/AppContext";

const allowedPaths = ["/", "/marketplace", "/auctions", "/buy-now"];

const tierToMode = (tier) => (tier === "Luxury" ? "luxury" : tier === "Classic" ? "classic" : null);
const modeToTier = (mode) => (mode === "luxury" ? "Luxury" : "Classic");

const MobileFooter = () => {
  const { pathname } = useLocation();
  const isAllowed = allowedPaths.includes(pathname);
  const { selectedTier, setSelectedTier } = useAppContext();
  const [showLinks, setShowLinks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nextMode, setNextMode] = useState(null);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const active = tierToMode(selectedTier);

  const finishSwitch = (target) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (target) setSelectedTier(modeToTier(target));
    setLoading(false);
    setNextMode(null);
    setVideoReady(false);
  };

  useEffect(() => {
    if (!loading || !nextMode) return;
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => finishSwitch(nextMode));
      }
    }
    timeoutRef.current = setTimeout(() => finishSwitch(nextMode), 4000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [loading, nextMode]);

  if (!isAllowed) return null;

  const handleSwitch = (type) => {
    if (type === active || loading) return;
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
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="footer-loader-video"
              onLoadedData={() => setVideoReady(true)}
              onEnded={() => finishSwitch(nextMode)}
              onError={() => finishSwitch(nextMode)}
              onStalled={() => finishSwitch(nextMode)}
              style={{ visibility: videoReady ? "visible" : "hidden" }}
              key={nextMode}
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
