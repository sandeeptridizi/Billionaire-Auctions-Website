import "./MobileFooter.css";
import { FaCrown } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { FaPlus, FaStore, FaTag, FaGavel, FaBuilding } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import luxuryLoading from "../../assets/luxury-loading.mp4";
import classicLoading from "../../assets/classic-loading.mp4";
import useAppContext from "../../context/AppContext";
import { getToken } from "../../lib/auth";

const USER_APP_URL = import.meta.env.VITE_USER_APP_URL || "https://user.billionaireauction.com";

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

  const LISTING_ROUTES = {
    marketplace: "/productcreation/marketplace",
    sell:        "/productcreation/buynow",
    auction:     "/productcreation/auction",
    tolet:       "/productcreation/tolet",
  };

  const handleListingNav = (type) => {
    setShowLinks(false);
    const token = getToken();
    const path = LISTING_ROUTES[type] || "/productcreation";
    const query = token ? `?authtoken=${encodeURIComponent(token)}` : "";
    window.open(`${USER_APP_URL}${path}${query}`, "_blank");
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-bar">

        <div
          className={`footer-side luxury ${active === "luxury" ? "active" : ""}`}
          onClick={() => handleSwitch("luxury")}
        >
          <FaCrown />
          <span>LUXURY</span>
        </div>

        <div className="footer-center">
          <div
            className="plus-btn"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaPlus />
          </div>
          <span className="center-text">List / Sell</span>
        </div>

        <div
          className={`footer-side classic ${active === "classic" ? "active" : ""}`}
          onClick={() => handleSwitch("classic")}
        >
          <IoDiamond />
          <span>CLASSIC</span>
        </div>

        {showLinks && (
          <div className="footer-links1">
            <div className="menu-item market" onClick={() => handleListingNav("marketplace")}>
              <FaStore style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>Marketplace</span>
            </div>

            <div className="menu-item sell" onClick={() => handleListingNav("sell")}>
              <FaTag style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>Sell Now</span>
            </div>

            <div className="menu-item hammer" onClick={() => handleListingNav("auction")}>
              <FaGavel style={{ color: "#FFD700", fontSize: "24px" }} />
              <span>Auctions</span>
            </div>

            <div className="menu-item tolet" onClick={() => handleListingNav("tolet")}>
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
