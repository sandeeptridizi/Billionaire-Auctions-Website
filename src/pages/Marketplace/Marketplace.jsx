import "./Marketplace.css";

import { IoSearch } from "react-icons/io5";

import { LuHouse, LuCar, LuSlidersHorizontal } from "react-icons/lu";
import { FaCrown } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { TbSofa } from "react-icons/tb";
import { MdOutlinePalette } from "react-icons/md";
import { BsBoxSeam, BsStars } from "react-icons/bs";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import RealEstateComponent from "../../components/RealEstateComponent/RealEstateComponent";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import luxuryLoading from "../../assets/luxury web.mp4";
import classicLoading from "../../assets/classic web.mp4";

import {
  categoryOrder,
  formatCategoryLabel,
  getMarketplaceProducts,
  mapProductToCard,
} from "../../lib/products";
import useAppContext from "../../context/AppContext";
import useProductFilters from "../../hooks/useProductFilters";

const categoryBtns = [
  { icon: <LuHouse />, title: "Real Estate", key: "REAL_ESTATE" },
  { icon: <LuCar />, title: "Cars & Bikes", key: "CARS" },
  { icon: <TbSofa />, title: "Furniture", key: "FURNITURE" },
  { icon: <IoDiamond />, title: "Jewellery & Watches", key: "JEWELLERY_AND_WATCHES" },
  { icon: <MdOutlinePalette />, title: "Arts & Paintings", key: "ARTS_AND_PAINTINGS" },
  { icon: <FaCrown />, title: "Antiques", key: "ANTIQUES" },
  { icon: <BsBoxSeam />, title: "Collectables", key: "COLLECTABLES" },
  { icon: <BsStars />, title: "Others", key: "OTHERS" },
];

const Marketplace = () => {
  const [searchParams] = useSearchParams();
  const [showVideo, setShowVideo] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("All");
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextBtn, setNextBtn] = useState(null);
  const location = useLocation();
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsFetching(true);
        const list = await getMarketplaceProducts({ country: selectedCountry });
        setProducts(list);
      } catch (error) {
        console.error("Failed to load marketplace products", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, [selectedCountry]);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // or "smooth"
  });
  }, [searchParams]);

  useEffect(() => {
  setIsTransitioning(false);
  setNextBtn(null);
  setShowVideo(false); 
}, [location.pathname]);

  const handleSwitch = (type) => {
    if (type === selectedBtn) return;

    if (type === "Luxury" || type === "Classic") {
      setNextBtn(type);
      setIsTransitioning(true);
    setTimeout(() => {
      setShowVideo(true);
    }, 150); // 120–180ms sweet spot
  } else {
    setSelectedBtn(type);
  }
  };

  const {
    filters,
    filteredProducts: metaFilteredProducts,
    setFilter,
    clearAllFilters,
    activeFilterCount,
    filterDefs,
  } = useProductFilters(products, selectedCategory, 'MARKETPLACE');

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

    return metaFilteredProducts.filter((product) => {
      const byTier = normalizedTier ? product.tier === normalizedTier : true;
      const bySearch = search
        ? matchedCategory
          ? product.category === matchedCategory
          : product.title.toLowerCase().includes(search.toLowerCase())
        : true;
      const byCategory = selectedCategory
        ? selectedCategory === "OTHERS"
          ? !categoryOrder.includes(product.category)
          : selectedCategory === "CARS"
            ? product.category === "CARS" || product.category === "BIKES"
            : product.category === selectedCategory
        : true;
      return byTier && bySearch && byCategory;
    });
  }, [metaFilteredProducts, search, selectedBtn, selectedCategory]);

  const groupedCategories = useMemo(() => {
    const map = new Map();

    filteredProducts.forEach((product) => {
      const key = product.category;
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(mapProductToCard(product));
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
          <h2 className="buy-now-heading">Market Place</h2>
          <p className="buy-now-text">List and connect directly with buyers.</p>
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
          {isTransitioning && nextBtn && showVideo && selectedBtn !== nextBtn && (
            <div className="tier-loader-overlay">
              <video
                autoPlay
                muted
                playsInline
                preload="auto"
                className="tier-loader-video"
                onEnded={() => {
                  setSelectedBtn(nextBtn);
                  setIsTransitioning(false);
                  setNextBtn(null);
                  setShowVideo(false);
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
              placeholder="Search for luxury items..."
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
          {categoryBtns.map((btn) => (
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
        products={products}
        filters={filters}
        onFilterChange={setFilter}
        onClearAll={clearAllFilters}
        activeFilterCount={activeFilterCount}
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        drawerOnly
      />
      {loading ? (
        <p style={{ padding: "40px", textAlign: "center" }}>
          Loading products...
        </p>
      ) : groupedCategories.length === 0 ? (
        <p style={{ padding: "40px", textAlign: "center" }}>
          No products available.
        </p>
      ) : (
        groupedCategories.map(([catKey, items]) => (
          <RealEstateComponent
            key={catKey}
            data={selectedCategory ? items : items.slice(0, 3)}
            name={formatCategoryLabel(catKey)}
            totalCount={items.length}
            showViewAll={!selectedCategory && items.length > 3}
            viewAllLink={null}
            onViewAll={() => setSelectedCategory(catKey)}
          />
        ))
      )}
    </div>
  );
};

export default Marketplace;
