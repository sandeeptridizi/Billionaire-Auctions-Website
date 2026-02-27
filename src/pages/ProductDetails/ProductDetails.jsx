import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LuCrown } from "react-icons/lu";
import { BsPatchCheck } from "react-icons/bs";
import { getPublicProductById } from "../../lib/products";
import "./ProductDetails.css";
import { getFile } from "../../lib/s3";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { SlShare } from "react-icons/sl";
import { FiFlag } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { PiCarProfile } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { LuHouse } from 'react-icons/lu';
import { TbSofa } from 'react-icons/tb';
import { IoDiamondOutline } from 'react-icons/io5';
import { RiBankLine } from 'react-icons/ri';

import cityApartment from "../../assets/city-apartment.jpg";
import penthouse from "../../assets/penthouse.jpg";
import villa from "../../assets/villa2.jpg";
import exclusiveVilla from "../../assets/exclusive-villa.jpg";
import exclusivePenthouse from "../../assets/exclusive-penthouse.jpg";

const data = [
  {
    id: 1,
    image: cityApartment,
    cost: "₹2.85 Cr",
    location: "Bandra West, Mumbai",
    title: "Premium 3BHK Apartment with City View",
  },
  {
    id: 2,
    image: villa,
    cost: "₹12.5 Cr",
    location: "Jublee Hills, Hyderabad",
    title: "Luxury Villa with Private Pool",
  },
  {
    id: 3,
    image: penthouse,
    cost: "₹8.75 Cr",
    location: "Whitefield, Bangalore",
    title: "Premium Penthouse with Terrace",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <div className="product-page-search-btn-container">
          <div className="product-page-search-container">
            <FiSearch className="product-search-icon" />
            <input
              type="text"
              placeholder="Search luxury properties, cars, arts, jewelry, watches..."
              className="product-search"
            />
          </div>
          <button className="product-search-btn">
            <FiSearch /> Search
          </button>
        </div>
        <div className="product-page-breadcrums-category-btns-container">
          <div className="product-page-bread-crums">
            Home / <span className="product-category">{product.title}</span>
          </div>
          <div className="buy-now-btns-container">
            <div
              className={
                product.tier === "ALL"
                  ? "buy-now-btn-container active-btn"
                  : "buy-now-btn-container"
              }
            >
              All
            </div>
            <div
              className={
                product.tier === "LUXURY"
                  ? "buy-now-btn-container active-btn"
                  : "buy-now-btn-container"
              }
            >
              <LuCrown /> Luxury
            </div>
            <div
              className={
                product.tier === "CLASSIC"
                  ? "buy-now-btn-container active-btn"
                  : "buy-now-btn-container"
              }
            >
              <IoDiamondOutline /> Classic
            </div>
          </div>
        </div>
      </div>
      <div className="product-page-image-info-container">
        <div className="product-page-img-container">
          <img
            src={getFile(product.media[0])}
            alt="car"
            className="product-car"
          />
          <div className="product-page-img-grid-container">
            <img
              src={getFile(product.media[1])}
              alt="car"
              className="grid-img"
            />
            <img
              src={getFile(product.media[2])}
              alt="car"
              className="grid-img"
            />
            <img
              src={getFile(product.media[3])}
              alt="car"
              className="grid-img"
            />
            <img
              src={getFile(product.media[4])}
              alt="car"
              className="grid-img"
            />
          </div>
        </div>
        <div className="product-page-info-container">
          <div className="product-info-header">
            <div className="product-info-tags-container">
              <div className="product-verified-container">
                <BsPatchCheck className="product-check-icon" /> Verified
              </div>
              <div className="product-luxury-container">
                <LuCrown className="product-crown-icon" /> {product.tier}
              </div>
            </div>
            <h3 className="product-info-heading">{product.title}</h3>
            <div className="product-location">
              <GrLocation className="product-location-icon" />{" "}
              {product.location || "Unspecified"}
            </div>
            <div className="product-calender">
              <MdOutlineCalendarToday /> Posted on {product.createdAt}
            </div>
          </div>
          <div className="product-info-price-container">
            <p className="product-info-text">Asking Price</p>
            <h2 className="product-info-price">₹{product.value}</h2>
            <p className="product-info-text">
              {product.negotiable ? "Negotiable" : "Not Negotiable"}
            </p>
          </div>
          <div className="product-info-btns-container">
            <button className="product-info-enquire-btn">
              <LuPhone /> Enquire now
            </button>
            <button className="product-info-chat-btn">
              <FiMessageCircle /> Chat Now
            </button>
          </div>
          <div className="product-info-social-container">
            <div className="save-container">
              <MdFavoriteBorder /> Save
            </div>
            <div className="save-container">
              <SlShare /> Share
            </div>
            <div className="save-container">
              <FiFlag /> Report
            </div>
          </div>
        </div>
      </div>
      <div className="product-page-specifications-container">
        <div className="product-page-specifications">
          <div className="product-description-container">
            <h2 className="product-description">
              <CgFileDocument className="product-document-icon" /> Description
            </h2>
            <p className="product-text">{product.description}</p>
          </div>
          {product.category === "CARS" ? (
            <>
              <div className="product-description-container">
                <h2 className="product-description">
                  <PiCarProfile className="product-document-icon" /> Vehicle
                  Details
                </h2>
                <div className="product-grid-item-container">
                  <div className="product-grid-item">
                    <p className="product-brand">Brand</p>
                    <p className="brand-name">Rolls Royce</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Model</p>
                    <p className="brand-name">Phantom</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Year</p>
                    <p className="brand-name">1965</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Fuel Type</p>
                    <p className="brand-name">Petrol</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Transmission</p>
                    <p className="brand-name">Automatic</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Condition</p>
                    <p className="brand-name">Good</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">KM Driven</p>
                    <p className="brand-name">45,000 km</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Ownership</p>
                    <p className="brand-name">Second Owner</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Tyres</p>
                    <p className="brand-name">Brand New</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Color</p>
                    <p className="brand-name">Black</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Accident History</p>
                    <p className="brand-name">No</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Service History</p>
                    <p className="brand-name">Available</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Number of Keys</p>
                    <p className="brand-name">2 Keys</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Seller Type</p>
                    <p className="brand-name">Owner</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Registration State</p>
                    <p className="brand-name">Telangana</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Insurance</p>
                    <p className="brand-name">
                      Comprehensive (Valid till Dec 2026)
                    </p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">RC Available</p>
                    <p className="brand-name">Yes</p>
                  </div>
                </div>
              </div>
            </>
          ) : product.category === "REAL_ESTATE" ? (
            <>
            <div className="product-description-container">
                <h2 className="product-description">
                  <LuHouse className="product-document-icon" /> Property
                  Details
                </h2>
                <div className="product-grid-item-container">
                  <div className="product-grid-item">
                    <p className="product-brand">Property Type</p>
                    <p className="brand-name">Flat</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Area/Locality</p>
                    <p className="brand-name">Jubilee Hills</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Landmark</p>
                    <p className="brand-name">Near Jubilee Hills Metro Station</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Ownership Type</p>
                    <p className="brand-name">Freehold</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Approval Status</p>
                    <p className="brand-name">RERA Approved</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Availability</p>
                    <p className="brand-name">Immeidate</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Age of Property (Years)</p>
                    <p className="brand-name">5 Years</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Facing</p>
                    <p className="brand-name">East</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">No of Car Parking</p>
                    <p className="brand-name">2</p>
                  </div>
                </div>
              </div>
            </>
          ) : product.category === "FURNITURE" ? (
            <>
            <div className="product-description-container">
                <h2 className="product-description">
                  <TbSofa className="product-document-icon" /> Furniture
                  Details
                </h2>
                <div className="product-grid-item-container">
                  <div className="product-grid-item">
                    <p className="product-brand">Furniture Type</p>
                    <p className="brand-name">Sofa</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Material</p>
                    <p className="brand-name">Solid Wood</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Condition</p>
                    <p className="brand-name">Brand New</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Usage Condition</p>
                    <p className="brand-name">Never Used</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Brand</p>
                    <p className="brand-name">Custom</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Dimensions (L × W × H)</p>
                    <p className="brand-name">180 × 120 × 80 cm</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Color / Finish</p>
                    <p className="brand-name">Natural Wood</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Seating Capacity</p>
                    <p className="brand-name">4 Seater</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Age of Furniture</p>
                    <p className="brand-name">Less than 1 year</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Assembly Required</p>
                    <p className="brand-name">Yes</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Original Purchase Price</p>
                    <p className="brand-name">₹ 1,50,000</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Reason for Selling</p>
                    <p className="brand-name">Relocation</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Seller Type</p>
                    <p className="brand-name">Owner</p>
                  </div>
                </div>
              </div>
            </>
          ) : product.category === "JEWELLERY_AND_WATCHES" ? (
            <>
            <div className="product-description-container">
                <h2 className="product-description">
                  <IoDiamondOutline className="product-document-icon" /> Jewellery & Watches
                  Details
                </h2>
                <div className="product-grid-item-container">
                  <div className="product-grid-item">
                    <p className="product-brand">Item Type</p>
                    <p className="brand-name">Jewellery</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Condition</p>
                    <p className="brand-name">Brand New</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Gender</p>
                    <p className="brand-name">Unisex</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Invoice Available</p>
                    <p className="brand-name">Yes</p>
                  </div>
                </div>
              </div>
            </>
          ): product.category === "ANTIQUES" ? (
            <>
            <div className="product-description-container">
                <h2 className="product-description">
                  <RiBankLine className="product-document-icon" /> Antiques Details
                </h2>
                <div className="product-grid-item-container">
                  <div className="product-grid-item">
                    <p className="product-brand">Antique Type</p>
                    <p className="brand-name">Coins</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Approximate Age (years)</p>
                    <p className="brand-name">50 Years</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Origin</p>
                    <p className="brand-name">Indian</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Material</p>
                    <p className="brand-name">Bronze</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Condition</p>
                    <p className="brand-name">Excellent</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Restoration</p>
                    <p className="brand-name">Yes</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Documentation</p>
                    <p className="brand-name">Available</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Historical Period</p>
                    <p className="brand-name">Mughal</p>
                  </div>
                </div>
              </div>
            </>
          )
          : product.category === "ANTIQUES" ? (
            <>
            <div className="product-description-container">
                <h2 className="product-description">
                  <RiBankLine className="product-document-icon" /> Antiques Details
                </h2>
                <div className="product-grid-item-container">
                  <div className="product-grid-item">
                    <p className="product-brand">Antique Type</p>
                    <p className="brand-name">Coins</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Approximate Age (years)</p>
                    <p className="brand-name">50 Years</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Origin</p>
                    <p className="brand-name">Indian</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Material</p>
                    <p className="brand-name">Bronze</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Condition</p>
                    <p className="brand-name">Excellent</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Restoration</p>
                    <p className="brand-name">Yes</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Documentation</p>
                    <p className="brand-name">Available</p>
                  </div>
                  <div className="product-grid-item">
                    <p className="product-brand">Historical Period</p>
                    <p className="brand-name">Mughal</p>
                  </div>
                </div>
              </div>
            </>
          )
          : null}
        </div>
        <div className="product-page-quick-info-container">
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
                {new Date(product.createdAt).toLocaleDateString("en-US", {
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
          <h2 className="similar-luxury-items-heading">Similar Luxury Items</h2>
          <button className="view-all-btn">
            View All <LuSquareArrowOutUpRight />
          </button>
        </div>
        <div className="similar-luxury-items-grid-container">
          {data.map((item) => {
            const { id, image, cost, location, title } = item;
            return (
              <div className="similar-luxury-item-container" key={id}>
                <div className="luxury-item-img-container">
                  <img src={image} alt="image" className="luxury-item-img" />
                  <div className="luxury-item-header">
                    <div className="luxury-item-verified-container">
                      <BsPatchCheck className="verified-icon" /> Verified
                    </div>
                    <div className="luxury-item-luxury-container">
                      <LuCrown /> LUXURY
                    </div>
                  </div>
                  <div className="luxury-item-footer">
                    <p className="luxury-item-cost">{cost}</p>
                    <p className="luxury-item-location">
                      <GrLocation /> {location}
                    </p>
                  </div>
                </div>
                <div className="luxury-item-content-container">
                  <h3 className="luxury-item-title">{title}</h3>
                  <button className="luxury-item-btn">View Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="exclusive-collection-container">
        <div className="featured-container">
          <div className="featured-image-container">
            <img
              src={exclusiveVilla}
              alt="exclusive villa"
              className="featured-img"
            />
            <div className="featured-tag-container">FEATURED</div>
          </div>
          <div className="featured-content-container">
            <h2 className="featured-heading">Exclusive Luxury Collection</h2>
            <p className="featured-text">
              Discover handpicked premium items from India's most trusted luxury
              marketplace.
            </p>
            <div className="featured-footer-container">
              <p className="featured-footer-title">Starting from ₹50 Lac</p>
              <button className="featured-footer-btn">
                Explore Now <LuSquareArrowOutUpRight />
              </button>
            </div>
          </div>
        </div>
        <div className="featured-container">
          <div className="featured-image-container">
            <img
              src={exclusivePenthouse}
              alt="exclusive villa"
              className="featured-img"
            />
            <div className="special-tag-container">SPECIAL OFFER</div>
          </div>
          <div className="featured-content-container">
            <h2 className="featured-heading">List Your Item Free</h2>
            <p className="featured-text">
              Join thousands of sellers. Zero listing fees until Jan 2027!
            </p>
            <div className="featured-footer-container">
              <p className="featured-footer-desc">No Commission*</p>
              <button className="featured-footer-btn">
                List Now <LuSquareArrowOutUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-page-footer-container">
        <h2 className="product-page-footer-heading">
          <LuCrown className="product-footer-icon" /> Join Billionaire Auction
          Premium
        </h2>
        <p className="product-footer-text">
          Get exclusive access to luxury offline auctions, verified elite items,
          and personalized concierge services.
        </p>
        <div className="product-footer-btn-container">
          <button className="featured-footer-btn">
            Explore Now <LuSquareArrowOutUpRight />
          </button>
          <button className="product-footer-btn">
            View Premium Plans <LuSquareArrowOutUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
