import './ToLet.css';

import { useEffect, useMemo, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { MdVerified, MdApartment } from 'react-icons/md';
import { TbCurrencyRupee } from 'react-icons/tb';
import { FaCrown } from 'react-icons/fa6';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { LuSlidersHorizontal, LuBuilding2, LuWarehouse } from 'react-icons/lu';
import { BsShop, BsStars } from 'react-icons/bs';
import { PiMapPinArea } from 'react-icons/pi';
import { RiHotelLine } from 'react-icons/ri';

import RealEstateComponentCard from '../../components/RealEstateComponentCard/RealEstateComponentCard';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import { getToLetProducts, mapProductToCard } from '../../lib/products';
import useAppContext from '../../context/AppContext';
import useProductFilters from '../../hooks/useProductFilters';

const toletCategoryBtns = [
  { icon: <FiHome />, title: "Residential", key: "residential" },
  { icon: <LuBuilding2 />, title: "Office Space", key: "office" },
  { icon: <BsShop />, title: "Shops", key: "shops" },
  { icon: <LuWarehouse />, title: "Warehouses", key: "warehouses" },
  { icon: <PiMapPinArea />, title: "Open Plots", key: "plots" },
  { icon: <RiHotelLine />, title: "PG & Hostels", key: "hostels" },
  { icon: <MdApartment />, title: "Luxury Coliving", key: "coliving" },
  { icon: <BsStars />, title: "Others", key: "others" },
];

const rentsData = [
  {
    id: 1,
    icon: <MdVerified />,
    title: 'Verified Properties',
    text: 'All properties are verified and authentic',
  },
  {
    id: 2,
    icon: <FaCrown />,
    title: 'Luxury Collection',
    text: 'Exclusive premium properties only',
  },
  {
    id: 3,
    icon: <FiHome />,
    title: 'Quick Processing',
    text: 'Fast approval and move-in process',
  },
  {
    id: 4,
    icon: <TbCurrencyRupee />,
    title: 'Transparent Pricing',
    text: 'No hidden charges or fees',
  },
];

const ToLet = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [rawProducts, setRawProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const list = await getToLetProducts({ country: selectedCountry });
        setRawProducts(list);
      } catch (error) {
        console.error('Failed to load to-let products', error);
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
  } = useProductFilters(rawProducts, null, 'TO_LET');

  const properties = useMemo(() => {
    return metaFilteredProducts.map((product) => ({
      ...mapProductToCard(product),
      rawCategory: product.category,
      toletCategory: product.meta?.toletCategory || 'others',
    }));
  }, [metaFilteredProducts]);

  const filteredProperties = useMemo(() => {
    let result = properties;

    if (selectedCategory) {
      result = result.filter((item) => {
        if (selectedCategory === 'others') {
          const knownKeys = toletCategoryBtns.filter(b => b.key !== 'others').map(b => b.key);
          return !knownKeys.includes(item.toletCategory);
        }
        return item.toletCategory === selectedCategory;
      });
    }

    if (search) {
      const lowerSearch = search.toLowerCase();
      const matchedToletCat = toletCategoryBtns.find((btn) =>
        btn.title.toLowerCase().includes(lowerSearch),
      );
      if (matchedToletCat) {
        result = result.filter((item) => item.toletCategory === matchedToletCat.key);
      } else {
        result = result.filter((item) =>
          item.title.toLowerCase().includes(lowerSearch),
        );
      }
    }

    return result;
  }, [properties, search, selectedCategory]);

  const toletCategoryOrder = toletCategoryBtns.map(b => b.key);

  const groupedCategories = useMemo(() => {
    const map = new Map();
    filteredProperties.forEach((item) => {
      const key = item.toletCategory || 'others';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return Array.from(map.entries()).sort((a, b) => {
      const aIdx = toletCategoryOrder.indexOf(a[0]);
      const bIdx = toletCategoryOrder.indexOf(b[0]);
      return (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) - (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx);
    });
  }, [filteredProperties]);

  return (
    <div className='to-let-page-container'>
      <div className='to-let-page-background'>
        <h1 className='to-let-heading'>
          <FiHome className='to-let-home-icon' /> To-Let
        </h1>
        <p className='to-let-text'>
          List your property and find tenants easily
        </p>
      </div>
      <div className='buy-now-categories-container'>
        <div className='buy-now-search-filter-container'>
          <div className='buy-now-search-container'>
            <IoSearch className='buy-now-search-icon' />
            <input
              type='text'
              placeholder='Search for rental properties...'
              className='buy-now-input'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='buy-now-filter-container'>
            <button
              className='listing-filter-toggle-btn'
              onClick={() => setFilterDrawerOpen(true)}
            >
              <LuSlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className='filter-count-badge'>{activeFilterCount}</span>
              )}
            </button>
            {selectedCategory && (
              <div
                className='buy-now-filter-btn'
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedCategory(null)}
              >
                Clear Category
              </div>
            )}
          </div>
        </div>
        <div className='marketplace-category-icons-row'>
          {toletCategoryBtns.map((btn) => (
            <div
              className='marketplace-category-icon-item'
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
                    ? 'marketplace-category-icon-circle marketplace-category-active'
                    : 'marketplace-category-icon-circle'
                }
              >
                {btn.icon}
              </div>
              <span className='marketplace-category-icon-label'>
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
      {loading ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>Loading properties...</p>
      ) : groupedCategories.length === 0 ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>No properties found.</p>
      ) : (
        groupedCategories.map(([catKey, items]) => {
          const catLabel = toletCategoryBtns.find(b => b.key === catKey)?.title || catKey;
          return (
            <div className='to-let-properties-container' key={catKey}>
              <div className='property-header'>
                <h2 className='property-heading'>{catLabel}</h2>
                {!selectedCategory && items.length > 3 && (
                  <div
                    className='real-estate-component-view-btn'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedCategory(catKey)}
                  >
                    View All ({items.length}) <HiOutlineArrowSmRight />
                  </div>
                )}
              </div>
              <div className='real-estate-component-grid-container'>
                {(selectedCategory ? items : items.slice(0, 3)).map((item) => (
                  <RealEstateComponentCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          );
        })
      )}
      <div className='to-let-rent-us-container'>
        <h2 className='rent-us-heading'>Why Rent With Us?</h2>
        <p className='rent-us-text'>
          Premium rental experience for luxury properties
        </p>
        <div className='rent-us-grid-container'>
          {rentsData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='rent-us-grid-item-container' key={id}>
                <div className='rent-us-item-icon-container'>{icon}</div>
                <h3 className='rent-us-item-title'>{title}</h3>
                <p className='rent-us-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToLet;
