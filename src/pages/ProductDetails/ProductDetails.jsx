import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  LuPhone, LuSquareArrowOutUpRight, LuHouse, LuChevronRight,
  LuBedDouble, LuRuler, LuCalendar, LuArmchair, LuCompass,
  LuCar, LuGauge, LuFuel, LuSettings2, LuUser, LuShieldCheck,
  LuLayers, LuStar, LuUsers, LuClock, LuGem, LuWeight,
  LuBadgeCheck, LuAward, LuWrench, LuBox, LuPuzzle,
  LuPaintbrush, LuPalette, LuPenTool, LuGlobe, LuFileText,
  LuHash, LuChartColumnIncreasing, LuIndianRupee, LuWallet, LuCalendarCheck,
  LuSmartphone, LuTag, LuInfo, LuLandmark, LuWatch,
  LuMapPin, LuBuilding, LuKeyRound, LuCircleCheckBig, LuSquareParking, LuMapPinned, LuHourglass,
  LuCircleDot, LuKey, LuFileCheck, LuHandshake, LuUserCheck, LuScrollText, LuCarFront, LuShieldAlert, LuHistory, LuThumbsUp, LuMapPinHouse,
  LuStore, LuPackageCheck, LuHammer, LuMessageSquareText, LuReceipt, LuSparkles, LuScroll
} from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { GoHomeFill } from 'react-icons/go';
import { formatCategoryLabel, getPublicProducts, getPublicProductById, submitEnquiry } from "../../lib/products";
import "./ProductDetails.css";
import EMICalculator from "../../components/EMICalculator/EMICalculator";
import { getFile } from "../../lib/s3";
import api from "../../lib/api";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import useAppContext from "../../context/AppContext";
import { SlShare } from "react-icons/sl";
import { FiFlag } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { getUser, getToken } from "../../lib/auth";
import { PiCarProfile } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { TbSofa } from 'react-icons/tb';
import { IoDiamond } from 'react-icons/io5';
import { RiBankLine } from 'react-icons/ri';
import { FaPlayCircle } from "react-icons/fa";
import CardMetaGrid from "../../components/CardMetaGrid/CardMetaGrid";

// Icon mapping for product meta field tiles
const metaFieldIconMap = {
  // Real Estate (Sale) & Rentals
  bhk: LuBedDouble,
  builtUpArea: LuRuler,
  carpetArea: LuRuler,
  propertyAge: LuCalendar,
  furnishing: LuArmchair,
  furnishingStatus: LuArmchair,
  facing: LuCompass,
  parking: LuCar,
  monthlyRent: LuIndianRupee,
  rentPerMonth: LuIndianRupee,
  securityDeposit: LuWallet,
  availableFrom: LuCalendarCheck,
  city: LuMapPin,
  landmark: LuMapPinned,
  areaLocality: LuBuilding,
  availability: LuCalendarCheck,
  propertyType: LuHouse,
  ownershipType: LuKeyRound,
  approvalStatus: LuCircleCheckBig,
  noOfCarParking: LuSquareParking,
  ageOfPropertyYears: LuHourglass,
  ageOfProperty: LuHourglass,
  plotArea: LuRuler,
  plotDimensions: LuRuler,
  plotAreaInSqYards: LuRuler,
  builtUpAreaInSqYards: LuRuler,
  cornerPlot: LuMapPin,
  approvalType: LuShieldCheck,
  roadWidth: LuRuler,
  boundaryWall: LuLayers,
  electricityAvailable: LuSettings2,
  waterConnection: LuFuel,

  // Cars & Bikes
  brand: LuTag,
  model: LuCarFront,
  year: LuCalendar,
  yearOfManufacture: LuCalendar,
  kmDriven: LuGauge,
  fuelType: LuFuel,
  transmission: LuSettings2,
  ownership: LuUser,
  insuranceStatus: LuShieldCheck,
  color: LuPalette,
  tyres: LuCircleDot,
  negotiable: LuHandshake,
  noOfOwners: LuUserCheck,
  rcAvailable: LuFileCheck,
  numberOfKeys: LuKey,
  serviceHistory: LuHistory,
  accidentHistory: LuShieldAlert,
  registrationState: LuMapPinHouse,

  // Furniture
  furnitureType: LuArmchair,
  material: LuLayers,
  condition: LuThumbsUp,
  dimensions: LuRuler,
  dimensionsLWH: LuRuler,
  seatingCapacity: LuUsers,
  seatingCapacityIfApplicable: LuUsers,
  ageOfFurniture: LuClock,
  sellerType: LuStore,
  colorFinish: LuPalette,
  usageCondition: LuSparkles,
  assemblyRequired: LuHammer,
  reasonForSelling: LuMessageSquareText,
  originalPurchasePriceOptional: LuReceipt,

  // Jewellery
  type: LuGem,
  weight: LuWeight,
  purity: LuBadgeCheck,
  certification: LuAward,

  // Watches
  yearOfPurchase: LuCalendar,
  workingCondition: LuWrench,
  boxAndPapers: LuBox,
  boxPappers: LuBox,
  boxPapers: LuBox,
  originalParts: LuPuzzle,

  // Art & Paintings
  artistName: LuPaintbrush,
  medium: LuPalette,
  size: LuRuler,
  yearCreated: LuCalendar,
  signed: LuPenTool,
  certificate: LuAward,

  // Antiques
  antiqueType: LuLandmark,
  approximateAge: LuClock,
  approximateAgeYears: LuHourglass,
  origin: LuGlobe,
  documentation: LuFileText,
  restoration: LuWrench,
  historicalPeriod: LuScroll,

  // Collectibles
  itemType: LuBox,
  rarityLevel: LuStar,
  raretyLevel: LuStar,
  limitedEdition: LuHash,
  serialNumber: LuHash,
  authentication: LuShieldCheck,
  conditionGrade: LuChartColumnIncreasing,

  // Electronics
  purchaseYear: LuCalendar,
  warranty: LuShieldCheck,
  usageType: LuSmartphone,

  // Others
  category: LuTag,
};

const getMetaFieldIcon = (key) => metaFieldIconMap[key] || LuInfo;

import cityApartment from "../../assets/city-apartment.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const { toggleWishlist, isWishlisted, selectedCountry } = useAppContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState([]);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({ visitorName: "", visitorEmail: "", visitorPhone: "", message: "" });
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryError, setEnquiryError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [thumbStart, setThumbStart] = useState(0);
  const THUMB_VISIBLE = 4;

  const prevThumbs = () => setThumbStart((s) => Math.max(0, s - 1));
  const nextThumbs = (total) => setThumbStart((s) => Math.min(total - THUMB_VISIBLE, s + 1));
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportForm, setReportForm] = useState({ visitorName: "", visitorEmail: "", visitorPhone: "", reason: "", details: "" });
  const [reportSubmitting, setReportSubmitting] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportError, setReportError] = useState("");

  const [productAds, setProductAds] = useState([]);
  const images = product?.media || [];
  useEffect(() => { setActiveIndex(0); setThumbStart(0); }, [id]);

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquirySubmitting(true);
    setEnquiryError("");
    try {
      await submitEnquiry({ productId: id, ...enquiryForm });
      setEnquirySuccess(true);
      setEnquiryForm({ visitorName: "", visitorEmail: "", visitorPhone: "", message: "" });
      setTimeout(() => { setShowEnquiryForm(false); setEnquirySuccess(false); }, 2000);
    } catch (err) {
      setEnquiryError(err.response?.data?.message || "Failed to submit enquiry");
    } finally {
      setEnquirySubmitting(false);
    }
  };
  
  const handleReportSubmit = async (e) => {
    e.preventDefault();
    setReportSubmitting(true);
    setReportError("");
    try {
      const message = `[REPORT] Reason: ${reportForm.reason}${reportForm.details ? `. Details: ${reportForm.details}` : ""}`;
      await submitEnquiry({ productId: id, visitorName: reportForm.visitorName, visitorEmail: reportForm.visitorEmail, visitorPhone: reportForm.visitorPhone, message });
      setReportSuccess(true);
      setReportForm({ visitorName: "", visitorEmail: "", visitorPhone: "", reason: "", details: "" });
      setTimeout(() => { setShowReportForm(false); setReportSuccess(false); }, 2000);
    } catch (err) {
      setReportError(err.response?.data?.message || "Failed to submit report");
    } finally {
      setReportSubmitting(false);
    }
  };

  // Fetch product page advertisements
  useEffect(() => {
    api.get("/api/advertisement/public", { params: { placement: "product_listing" } })
      .then((res) => {
        const ads = (res.data?.data || []).filter((ad) => ad.media);
        setProductAds(ads);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const response = await getPublicProductById(id);
        setProduct(response || null);
      } catch (error) {
        console.error("Failed to load product details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product?.category) return;
    const fetchFeatured = async () => {
      try {
        const list = await getPublicProducts({ category: product.category, country: selectedCountry });
        setFeatured(list.filter((item) => item.id !== id && item.category === product.category));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to load featured products", error);
      }
    };

    fetchFeatured();
  }, [id, product?.category, selectedCountry]);

  if (loading) {
    return (
      <div className="product-details-page">Loading product details...</div>
    );
  }

  if (!product) {
    return (
      <div className="product-details-page">
        <p>Product not found.</p>
        <Link to="/marketplace" className="product-details-back">
          Back to marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <div className="product-page-search-category-container">
        <div className="product-page-breadcrums-category-btns-container">
          <div className="product-page-bread-crums">
            <Link to="/" className="breadcrumb-link"><LuHouse className="breadcrumb-icon" /> Home</Link>
            <LuChevronRight className="breadcrumb-separator" />
            <Link to="/marketplace" className="breadcrumb-link">Marketplace</Link>
            <LuChevronRight className="breadcrumb-separator" />
            <span className="product-category">{product.title}</span>
          </div>
        </div>
      </div>
      <div className="product-page-image-info-container">
        <div className="product-gallery">

          {/* Main Image */}
          <div
            className="product-main-image-container"
          >
            <img
              src={images[activeIndex] ? getFile(images[activeIndex]) : ""}
              className="product-main-image"
              alt="product"
            />
            <div className="image-counter">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="product-thumbnails-wrapper">
            <button
              className="thumb-nav"
              onClick={prevThumbs}
              disabled={thumbStart === 0}
            >&#8249;</button>
            <div className="product-thumbnails">
              {images.slice(thumbStart, thumbStart + THUMB_VISIBLE).map((img, i) => {
                const index = thumbStart + i;
                return (
                  <img
                    key={index}
                    src={getFile(img)}
                    className={`thumbnail ${index === activeIndex ? "active-thumb" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    alt="thumb"
                  />
                );
              })}
            </div>
            <button
              className="thumb-nav"
              onClick={() => nextThumbs(images.length)}
              disabled={thumbStart >= images.length - THUMB_VISIBLE}
            >&#8250;</button>
          </div>

        </div>
        <div className="product-page-info-container">
          <div className="product-info-header">
            <div className="product-info-tags-container">
              <div className="product-verified-container">
                <MdVerified className="product-check-icon" /> Verified
              </div>
              <div className="product-luxury-container">
                <FaCrown className="product-crown-icon" /> {product.tier}
              </div>
            </div>
            <h3 className="product-info-heading">{product.title}</h3>
            <div className="product-location">
              <GrLocation className="product-location-icon" />{" "}
              {product.meta?.city || product.meta?.location || "Unspecified"}
            </div>
            <div className="product-calender">
              <MdOutlineCalendarToday /> Posted on{" "}
              {new Date(product.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
          <div className="product-info-price-container">
            <p className="product-info-text">Price</p>
            <h2 className="product-info-price">₹{product.value.toLocaleString("en-IN")}</h2>
          </div>
          <div className="product-info-btns-container">
            <button className="product-info-enquire-btn" style={!product.meta?.socialMediaLink ? { width: '100%' } : {}} onClick={() => {
              if (getToken()) {
                const user = getUser();
                if (user) {
                  setEnquiryForm((prev) => ({
                    ...prev,
                    visitorName: user.name || prev.visitorName,
                    visitorEmail: user.email || prev.visitorEmail,
                    visitorPhone: user.phone || prev.visitorPhone,
                  }));
                }
              }
              setShowEnquiryForm(true);
            }}>
              <LuPhone /> Contact Seller
            </button>
            {product.meta?.socialMediaLink && (
              <a href={product.meta.socialMediaLink} target="_blank" rel="noopener noreferrer" className="product-info-chat-btn">
                <FaPlayCircle  /> Watch Video
              </a>
            )}
          </div>
          {showEnquiryForm && (
            <div className="enquiry-modal-overlay" onClick={() => setShowEnquiryForm(false)}>
              <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
                <h3>Enquire About This Product</h3>
                {enquirySuccess ? (
                  <p className="enquiry-success-msg">Enquiry submitted successfully!</p>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="enquiry-form">
                    <input type="text" placeholder="Your Name *" required value={enquiryForm.visitorName} onChange={(e) => setEnquiryForm({ ...enquiryForm, visitorName: e.target.value })} />
                    <input type="email" placeholder="Your Email *" required value={enquiryForm.visitorEmail} onChange={(e) => setEnquiryForm({ ...enquiryForm, visitorEmail: e.target.value })} />
                    <input type="tel" placeholder="Your Phone (optional)" value={enquiryForm.visitorPhone} onChange={(e) => setEnquiryForm({ ...enquiryForm, visitorPhone: e.target.value })} />
                    <textarea placeholder="Your Message *" required rows={4} value={enquiryForm.message} onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })} />
                    {enquiryError && <p className="enquiry-error-msg">{enquiryError}</p>}
                    <div className="enquiry-form-btns">
                      <button type="button" onClick={() => setShowEnquiryForm(false)} className="enquiry-cancel-btn">Cancel</button>
                      <button type="submit" disabled={enquirySubmitting} className="enquiry-submit-btn">{enquirySubmitting ? "Submitting..." : "Submit Enquiry"}</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
          <div className="product-info-social-container">
            <div
              className={`save-container${isWishlisted(id) ? ' save-container--active' : ''}`}
              onClick={() => toggleWishlist(id)}
              style={{ cursor: 'pointer' }}
            >
              {isWishlisted(id) ? <MdFavorite style={{ color: '#e53935' }} /> : <MdFavoriteBorder />}
              {isWishlisted(id) ? 'Saved' : 'Save'}
            </div>
            <div className="save-container" onClick={() => setShowShare(true)}>
              <SlShare /> Share
            </div>
            {showShare && (
              <div className="share-popup-overlay">
                <div className="share-popup">

                  <h3>Share</h3>

                  <div className="share-options">

                    <a
                      href={`https://wa.me/?text=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>

                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied!");
                      }}
                    >
                      Copy Link
                    </button>

                  </div>

                  <button
                    className="close-share"
                    onClick={() => setShowShare(false)}
                  >
                    Close
                  </button>

                </div>
              </div>
            )}
            <div className="save-container" onClick={() => {
              if (getToken()) {
                const user = getUser();
                if (user) {
                  setReportForm((prev) => ({
                    ...prev,
                    visitorName: user.name || prev.visitorName,
                    visitorEmail: user.email || prev.visitorEmail,
                    visitorPhone: user.phone || prev.visitorPhone,
                  }));
                }
              }
              setShowReportForm(true);
            }} style={{ cursor: "pointer" }}>
              <FiFlag /> Report
            </div>
            {showReportForm && (
              <div className="enquiry-modal-overlay" onClick={() => setShowReportForm(false)}>
                <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
                  <h3>Report This Listing</h3>
                  {reportSuccess ? (
                    <p className="enquiry-success-msg">Thank you. Your report has been submitted.</p>
                  ) : (
                    <form onSubmit={handleReportSubmit} className="enquiry-form">
                      <input type="text" placeholder="Your Name *" required value={reportForm.visitorName} onChange={(e) => setReportForm({ ...reportForm, visitorName: e.target.value })} />
                      <input type="email" placeholder="Your Email *" required value={reportForm.visitorEmail} onChange={(e) => setReportForm({ ...reportForm, visitorEmail: e.target.value })} />
                      <input type="tel" placeholder="Your Phone (optional)" value={reportForm.visitorPhone} onChange={(e) => setReportForm({ ...reportForm, visitorPhone: e.target.value })} />
                      <select required value={reportForm.reason} onChange={(e) => setReportForm({ ...reportForm, reason: e.target.value })} className="report-reason-select">
                        <option value="" disabled>Select a reason *</option>
                        <option value="Fraudulent listing">Fraudulent listing</option>
                        <option value="Misleading information">Misleading information</option>
                        <option value="Prohibited item">Prohibited item</option>
                        <option value="Duplicate listing">Duplicate listing</option>
                        <option value="Spam">Spam</option>
                        <option value="Other">Other</option>
                      </select>
                      <textarea placeholder="Additional details (optional)" rows={3} value={reportForm.details} onChange={(e) => setReportForm({ ...reportForm, details: e.target.value })} />
                      {reportError && <p className="enquiry-error-msg">{reportError}</p>}
                      <div className="enquiry-form-btns">
                        <button type="button" onClick={() => setShowReportForm(false)} className="enquiry-cancel-btn">Cancel</button>
                        <button type="submit" disabled={reportSubmitting} className="enquiry-submit-btn">{reportSubmitting ? "Submitting..." : "Submit Report"}</button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="product-page-specifications-container">
        <div className="product-page-specifications">
          {product.meta && typeof product.meta === 'object' && Object.keys(product.meta).filter(k => k !== 'location' && k !== 'views' && k !== 'socialMediaLink').length > 0 && (
            <div className="product-description-container">
              <h2 className="product-description">
                {product.category === "CARS" || product.category === "BIKES" ? (
                  <><PiCarProfile className="product-document-icon" /> Vehicle Details</>
                ) : product.category === "REAL_ESTATE" ? (
                  <><LuHouse className="product-document-icon" /> Property Details</>
                ) : product.category === "FURNITURE" ? (
                  <><TbSofa className="product-document-icon" /> Furniture Details</>
                ) : product.category === "JEWELLERY_AND_WATCHES" ? (
                  <><IoDiamond className="product-document-icon" /> Jewellery &amp; Watches Details</>
                ) : product.category === "ANTIQUES" ? (
                  <><RiBankLine className="product-document-icon" /> Antiques Details</>
                ) : (
                  <><CgFileDocument className="product-document-icon" /> Details</>
                )}
              </h2>
              <div className="product-grid-item-container">
                {Object.entries(product.meta)
                  .filter(([key]) => key !== 'location' && key !== 'city' && key !== 'views' && key !== 'socialMediaLink')
                  .map(([key, value]) => (
                    <div className="product-grid-item" key={key}>
                      <p className="product-brand">
                        {(() => { const Icon = getMetaFieldIcon(key); return <Icon className="meta-field-icon" />; })()}
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                      </p>
                      <p className="brand-name">{String(value)}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
          {product.video && (
            <div className="product-description-container">
              <h2 className="product-description">
                <FaPlayCircle className="product-document-icon" /> Product Video
              </h2>
              <div className="product-video-wrapper">
                <video
                  src={getFile(product.video)}
                  controls
                  className="product-video-player"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
          <div className="product-description-container">
            <h2 className="product-description">
              <CgFileDocument className="product-document-icon" /> Description
            </h2>
            <p className="product-text">{product.description}</p>
          </div>
        </div>
        <div className="product-page-quick-info-container">
          <EMICalculator price={Number(product.value)} />
          <div className="product-page-safety-tips-container">
            <h3 className="tips-heading">
              <RiErrorWarningLine className="error-icon" /> Safety Tips
            </h3>
            <div className="product-page-points-container">
              <div className="product-page-point-container">
                <FiCheckCircle className="point-circle-icon" /> Always meet
                seller in person at a safe public location
              </div>
              <div className="product-page-point-container">
                <FiCheckCircle className="point-circle-icon" /> Verify product
                authenticity before payment
              </div>
              <div className="product-page-point-container">
                <FiCheckCircle className="point-circle-icon" /> Never pay in
                advance or transfer money online
              </div>
              <div className="product-page-point-container">
                <FiCheckCircle className="point-circle-icon" /> Get proper
                documentation and receipts
              </div>
              <div className="product-page-point-container">
                <FiCheckCircle className="point-circle-icon" /> Report
                suspicious activity immediately
              </div>
            </div>
          </div>
          {productAds.length > 0 && (
            <div className="product-page-ad-container">
              {productAds.map((ad) => (
                <a
                  key={ad.id}
                  href={ad.ctaUrl || undefined}
                  target={ad.ctaUrl ? "_blank" : undefined}
                  rel={ad.ctaUrl ? "noopener noreferrer" : undefined}
                  className={`product-page-ad${ad.ctaUrl ? " product-page-ad-clickable" : ""}`}
                >
                  <img src={getFile(ad.media)} alt={ad.title || "Advertisement"} className="product-page-ad-image" />
                  <div className="product-page-ad-overlay">
                    {ad.title && <h4 className="product-page-ad-title">{ad.title}</h4>}
                    {ad.ctaText && (
                      <span className="product-page-ad-cta">{ad.ctaText}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
          <div className="product-quick-information-container">
            <h3 className="quick-info-heading">Quick Information</h3>
            <div className="quick-info-justify-container">
              <span className="quick-category">Category</span>
              <span className="category-name">
                {product.category
                  .toLowerCase()
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </span>
            </div>
            <div className="quick-info-justify-container">
              <span className="quick-category">Listing Type</span>
              <span className="category-name">
                {product.listingType
                  ? product.listingType
                      .toLowerCase()
                      .split("_")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")
                  : ""}
              </span>
            </div>
            <div className="quick-info-justify-container">
              <span className="quick-category">Posted On</span>
              <span className="category-name">
                {new Date(product.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-luxury-items-container">
        <div className="similar-luxury-items-header">
          <h2 className="similar-luxury-items-heading">Similar {formatCategoryLabel(product.category)} Items</h2>
        </div>
        <div className="similar-luxury-items-grid-container">
          {featured.slice(0, 3).map((item) => (
            <Link to={`/product/${item.id}`} className="similarproduct">
            <div className="featured-listings-card-container2" key={item.id}>
              <div className="featured-listings-card-image-container">
                <img
                  src={item.media?.[0] ? getFile(item.media[0]) : cityApartment}
                  alt={item.title}
                  className="featured-img"
                />
                <div className="luxury-item-header">
                  <div className="luxury-container">
                    <FaCrown /> {item.tier || "LUXURY"}
                  </div>
                </div>
                <div className="featured-listings-card-footer">
                  <p className="mobile-item-cost">
                    {typeof item.value === "number"
                      ? `₹${item.value.toLocaleString("en-IN")}`
                      : "Price on request"}
                  </p>
                  <p className="mobile-item-location">
                    <GrLocation />{" "}
                    {item.meta?.city || item.meta?.location || item.location || "Location not specified"}
                  </p>
                </div>
              </div>
              <div className="featured-listings-content-container1">
                <h3 className="featured-listings-title card-title-single-line">{item.title}</h3>
                <CardMetaGrid categoryKey={item.category} meta={item.meta || {}} />
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="product-page-footer-container">
        <h2 className="product-page-footer-heading">
          <FaCrown className="product-footer-icon" /> Join Billionaire Auction Platform
        </h2>
        <p className="product-footer-text">
          Get exclusive access to luxury offline auctions, verified elite items,
          and personalized concierge services.
        </p>
        <div className="product-footer-btn-container">
          <Link to="/" className="no-underline-link">
            <button className="featured-footer-btn">
              Explore Now <LuSquareArrowOutUpRight />
            </button>
          </Link>
          <Link to="/browse/pricing-plans" className="no-underline-link">
            <button className="product-footer-btn">
              View Premium Plans <LuSquareArrowOutUpRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
