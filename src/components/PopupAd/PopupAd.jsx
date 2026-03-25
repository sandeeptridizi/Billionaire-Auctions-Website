import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import api from "../../lib/api";
import { getFile } from "../../lib/s3";
import "./PopupAd.css";

const STORAGE_KEY = "popup_dismissed";

const PopupAd = () => {
  const [ad, setAd] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    api
      .get("/api/advertisement/public", { params: { placement: "popup_ad" } })
      .then((res) => {
        const ads = (res.data?.data || []).filter((a) => a.media);
        if (ads.length > 0) {
          setAd(ads[0]);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!ad) return;
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, [ad]);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleClick = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    if (ad.ctaUrl) {
      if (ad.ctaUrl.startsWith("http://") || ad.ctaUrl.startsWith("https://")) {
        window.open(ad.ctaUrl, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = ad.ctaUrl;
      }
    }
    setVisible(false);
  };

  if (!visible || !ad) return null;

  return (
    <div className="popup-ad-overlay" onClick={dismiss}>
      <div className="popup-ad-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-ad-close" onClick={dismiss}>
          <IoClose />
        </button>
        <div className="popup-ad-image-wrap" onClick={handleClick}>
          <img
            src={getFile(ad.media)}
            alt={ad.title || "Advertisement"}
            className="popup-ad-image"
          />
        </div>
        {(ad.title || ad.ctaText) && (
          <div className="popup-ad-footer">
            {ad.title && <h4 className="popup-ad-title">{ad.title}</h4>}
            {ad.ctaText && (
              <button className="popup-ad-cta" onClick={handleClick}>
                {ad.ctaText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupAd;
