import "./Auctions.css";

import { IoDiamond } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuHouse, LuCar, LuSlidersHorizontal } from "react-icons/lu";

import { useEffect, useMemo, useState } from "react";

import { GoPeople } from "react-icons/go";
import { BsBoxSeam, BsStars } from "react-icons/bs";
import { TbHammer, TbSofa } from "react-icons/tb";
import { FaCrown } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";

import apartment from "../../assets/apartment.jpg";
import AuctionCardComponent from "../../components/AuctionCardComponent/AuctionCardComponent";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import luxuryLoading from "../../assets/luxury web.mp4";
import classicLoading from "../../assets/classic web.mp4";
import {
  getAuctionsProducts,
  mapProductToCard,
  categoryOrder,
  formatCategoryLabel,
} from "../../lib/products";
import useAppContext from "../../context/AppContext";
import useProductFilters from "../../hooks/useProductFilters";

const categoryToSlug = (catKey) => catKey.toLowerCase().replace(/_/g, "-");

const auctionCategoryBtns = [
  { icon: <LuHouse />, title: "Real Estate", key: "REAL_ESTATE" },
  { icon: <LuCar />, title: "Cars & Bikes", key: "CARS" },
  { icon: <TbSofa />, title: "Furniture", key: "FURNITURE" },
  { icon: <IoDiamond />, title: "Jewellery", key: "JEWELLERY_AND_WATCHES" },
  { icon: <MdOutlinePalette />, title: "Arts", key: "ARTS_AND_PAINTINGS" },
  { icon: <FaCrown />, title: "Antiques", key: "ANTIQUES" },
  { icon: <BsBoxSeam />, title: "Collectables", key: "COLLECTABLES" },
  { icon: <BsStars />, title: "Others", key: "OTHERS" },
];

const stepsData = [
  {
    id: 1,
    icon: <GoPeople />,
    title: "Register Online",
    text: "Sign up for the auction event and get verified",
  },
  {
    id: 2,
    icon: <BsBoxSeam />,
    title: "Preview Items",
    text: "Visit venue to inspect items before auction day",
  },
  {
    id: 3,
    icon: <TbHammer />,
    title: "Attend Auction",
    text: "Participate in live bidding at the venue",
  },
  {
    id: 4,
    icon: <FaCrown />,
    title: "Win & Collect",
    text: "Highest bidder wins and collects the item",
  },
];

const Auctions = () => {
  const [selectedBtn, setSelectedBtn] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [rawProducts, setRawProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextBtn, setNextBtn] = useState(null);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const list = await getAuctionsProducts({ country: selectedCountry });
        setRawProducts(list);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to load auction products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCountry]);

  const {
    filters,
    filteredProducts: metaFilteredProducts,
    setFilter,
    clearAllFilters,
    activeFilterCount,
    filterDefs,
  } = useProductFilters(rawProducts, selectedCategory, 'AUCTIONS');

  const products = useMemo(() => {
    return metaFilteredProducts.map((product) => {
      const card = mapProductToCard(product);
      return {
        id: card.id,
        title: card.title,
        image: card.image || apartment,
        cost:
          typeof product.value === "number"
            ? `${product.value.toLocaleString("en-IN")}+`
            : "Price on request",
        location:
          product.meta?.auctionVenue ||
          product.meta?.location ||
          "Unspecified",
        date: product.meta?.auctionDate || product.meta?.date || "",
        lots: product.meta?.lots || "",
        registered: product.meta?.registered || "",
        rawCategory: product.category,
      };
    });
  }, [metaFilteredProducts]);

  const handleSwitch = (type) => {
    if (type === selectedBtn) return;

    if (type === "Luxury" || type === "Classic") {
      setNextBtn(type);
      setLoading(true);
    } else {
      setSelectedBtn(type);
    }
  };

  const filteredProducts = useMemo(() => {
    const normalizedTier =
      selectedBtn === "Luxury"
        ? "LUXURY"
        : selectedBtn === "Classic"
          ? "CLASSIC"
          : null;

    const matchedCategory = search
      ? categoryOrder.find((cat) =>
          formatCategoryLabel(cat).toLowerCase().includes(search.toLowerCase()),
        )
      : null;

    return products.filter((item) => {
      const rawProduct = metaFilteredProducts.find((p) => p.id === item.id) || {};
      const byTier = normalizedTier ? rawProduct.tier === normalizedTier : true;
      const bySearch = search
        ? matchedCategory
          ? item.rawCategory === matchedCategory
          : item.title.toLowerCase().includes(search.toLowerCase())
        : true;
      const byCategory = selectedCategory
        ? selectedCategory === "OTHERS"
          ? !categoryOrder.includes(item.rawCategory)
          : selectedCategory === "CARS"
            ? item.rawCategory === "CARS" || item.rawCategory === "BIKES"
            : item.rawCategory === selectedCategory
        : true;
      return byTier && bySearch && byCategory;
    });
  }, [products, search, selectedBtn, selectedCategory, metaFilteredProducts]);

  const groupedCategories = useMemo(() => {
    const map = new Map();
    filteredProducts.forEach((product) => {
      const key = product.rawCategory || "OTHERS";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(product);
    });
    return Array.from(map.entries()).sort((a, b) => {
      const aIdx = categoryOrder.indexOf(a[0]);
      const bIdx = categoryOrder.indexOf(b[0]);
      return (
        (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) -
        (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx)
      );
    });
  }, [filteredProducts]);

  return (
    <div className="buy-now-container">
      <div className="market-place-background-container">
        <div>
          <h2 className="buy-now-heading">Auctions</h2>
          <p className="buy-now-text">
            List items for competitive offline bidding.
          </p>
        </div>
        <div className="buy-now-btns-container">
          <div
            className={
              selectedBtn === "All"
                ? "buy-now-btn-container active-btn"
                : "buy-now-btn-container"
            }
            onClick={() => handleSwitch("All")}
          >
            All
          </div>

          <div
            className={
              selectedBtn === "Luxury"
                ? "buy-now-btn-container active-btn"
                : "buy-now-btn-container"
            }
            onClick={() => handleSwitch("Luxury")}
          >
            <FaCrown /> Luxury
          </div>

          <div
            className={
              selectedBtn === "Classic"
                ? "buy-now-btn-container active-btn"
                : "buy-now-btn-container"
            }
            onClick={() => handleSwitch("Classic")}
          >
            <IoDiamond /> Classic
          </div>
          {loading && (
            <div className="tier-loader-overlay">
              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                className="tier-loader-video"
                onEnded={() => {
                  setSelectedBtn(nextBtn);
                  setLoading(false);
                }}
              >
                <source
                  src={nextBtn === "Luxury" ? luxuryLoading : classicLoading}
                  type="video/mp4"
                />
              </video>
            </div>
          )}
        </div>
      </div>
      <div className="buy-now-categories-container">
        <div className="buy-now-search-filter-container">
          <div className="buy-now-search-container">
            <IoSearch className="buy-now-search-icon" />
            <input
              type="text"
              placeholder="Search auction events..."
              className="buy-now-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="buy-now-filter-container">
            <button
              className="listing-filter-toggle-btn"
              onClick={() => setFilterDrawerOpen(true)}
            >
              <LuSlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className="filter-count-badge">{activeFilterCount}</span>
              )}
            </button>
            {selectedCategory && (
              <div
                className="buy-now-filter-btn"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedCategory(null)}
              >
                Clear Category
              </div>
            )}
          </div>
        </div>
        <div className="marketplace-category-icons-row">
          {auctionCategoryBtns.map((btn) => (
            <div
              className="marketplace-category-icon-item"
              key={btn.key}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === btn.key ? null : btn.key,
                )
              }
            >
              <div
                className={
                  selectedCategory === btn.key
                    ? "marketplace-category-icon-circle marketplace-category-active"
                    : "marketplace-category-icon-circle"
                }
              >
                {btn.icon}
              </div>
              <span className="marketplace-category-icon-label">
                {btn.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <FilterSidebar
        filterDefs={filterDefs}
        products={rawProducts}
        filters={filters}
        onFilterChange={setFilter}
        onClearAll={clearAllFilters}
        activeFilterCount={activeFilterCount}
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        drawerOnly
      />
      <div className="auctions-flex-container">
        {loading ? (
          <p style={{ padding: "40px", textAlign: "center" }}>
            Loading auctions...
          </p>
        ) : groupedCategories.length === 0 ? (
          <p style={{ padding: "40px", textAlign: "center" }}>
            No auction events available.
          </p>
        ) : (
          groupedCategories.map(([catKey, items]) => (
            <AuctionCardComponent
              key={catKey}
              data={selectedCategory ? items : items.slice(0, 3)}
              name={formatCategoryLabel(catKey)}
              totalCount={items.length}
              showViewAll={!selectedCategory && items.length > 3}
              viewAllLink={`/products/auctions/${categoryToSlug(catKey)}`}
              onViewAll={() => setSelectedCategory(catKey)}
            />
          ))
        )}
      </div>
      <div className="auctions-steps-main-container">
        <div className="auctions-steps-header">
          <h1 className="auctions-step-heading">
            How Our Offline Auctions Work
          </h1>
          <p className="auctions-step-text">
            Experience the thrill of live bidding at prestigious venues
          </p>
        </div>
        <div className="auctions-step-grid-container">
          {stepsData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className="auctions-step-item-container" key={id}>
                <div className="auctions-step-item-icon-container">{icon}</div>
                <h2 className="auctions-step-item-heading">Step {id}</h2>
                <h3 className="auctions-step-item-title">{title}</h3>
                <p className="auctions-step-item-text">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Auctions;
