import './Marketplace.css';

import { IoSearch } from 'react-icons/io5';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { LuCrown, LuHouse, LuCar } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';
import { TbSofa } from 'react-icons/tb';
import { MdOutlinePalette } from 'react-icons/md';
import { BsBoxSeam, BsStars } from 'react-icons/bs';

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import RealEstateComponent from '../../components/RealEstateComponent/RealEstateComponent';
import luxuryLoading from "../../assets/luxury web.mp4";
import classicLoading from "../../assets/classic web.mp4";

import {
  categoryOrder,
  formatCategoryLabel,
  getMarketplaceProducts,
  mapProductToCard,
} from '../../lib/products';
import useAppContext from '../../context/AppContext';

const categoryToSlug = (catKey) => catKey.toLowerCase().replace(/_/g, '-');

const categoryBtns = [
  { icon: <LuHouse />, title: 'Real Estate', key: 'REAL_ESTATE' },
  { icon: <LuCar />, title: 'Cars', key: 'CARS' },
  { icon: <TbSofa />, title: 'Furniture', key: 'FURNITURE' },
  { icon: <IoDiamondOutline />, title: 'Jewellery', key: 'JEWELLERY_AND_WATCHES' },
  { icon: <MdOutlinePalette />, title: 'Arts', key: 'ARTS_AND_PAINTINGS' },
  { icon: <LuCrown />, title: 'Antiques', key: 'ANTIQUES' },
  { icon: <BsBoxSeam />, title: 'Collectables', key: 'COLLECTABLES' },
  { icon: <BsStars />, title: 'Others', key: 'OTHERS' },
];

const Marketplace = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextBtn, setNextBtn] = useState(null);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const list = await getMarketplaceProducts({ country: selectedCountry });
        setProducts(list);
      } catch (error) {
        console.error('Failed to load marketplace products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCountry]);

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
      selectedBtn === 'Luxury'
        ? 'LUXURY'
        : selectedBtn === 'Classic'
          ? 'CLASSIC'
          : null;

    const matchedCategory = search
      ? categoryOrder.find((cat) =>
          formatCategoryLabel(cat).toLowerCase().includes(search.toLowerCase()),
        )
      : null;

    return products.filter((product) => {
      const byTier = normalizedTier ? product.tier === normalizedTier : true;
      const bySearch = search
        ? matchedCategory
          ? product.category === matchedCategory
          : product.title.toLowerCase().includes(search.toLowerCase())
        : true;
      const byCategory = selectedCategory
        ? selectedCategory === 'OTHERS'
          ? !categoryOrder.includes(product.category)
          : product.category === selectedCategory
        : true;
      return byTier && bySearch && byCategory;
    });
  }, [products, search, selectedBtn, selectedCategory]);

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
      return (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) -
        (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx);
    });
  }, [filteredProducts]);

  return (
    <div className='buy-now-container'>
      <div className='market-place-background-container'>
        <div>
        <h2 className='buy-now-heading'>Market Place</h2>
        <p className='buy-now-text'>
          Discover exclusive premium items from verified sellers
        </p></div>
        <div className='buy-now-btns-container'>

          <div
            className={
              selectedBtn === 'All'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => handleSwitch('All')}
          >
            All
          </div>

          <div
            className={
              selectedBtn === 'Luxury'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => handleSwitch('Luxury')}
          >
            <LuCrown /> Luxury
          </div>

          <div
            className={
              selectedBtn === 'Classic'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => handleSwitch('Classic')}
          >
            <IoDiamondOutline /> Classic
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
      <div className='buy-now-categories-container'>
        <div className='buy-now-search-filter-container'>
          <div className='buy-now-search-container'>
            <IoSearch className='buy-now-search-icon' />
            <input
              type='text'
              placeholder='Search for luxury items...'
              className='buy-now-input'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='buy-now-filter-container'>
            <Link to='/products/marketplace/all' className='buy-now-filter-btn'>
              View All <HiOutlineArrowSmRight />
            </Link>
          </div>
        </div>
        <div className='marketplace-category-icons-row'>
          {categoryBtns.map((btn) => (
            <div
              className='marketplace-category-icon-item'
              key={btn.key}
              onClick={() => setSelectedCategory(selectedCategory === btn.key ? null : btn.key)}
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
              <span className='marketplace-category-icon-label'>{btn.title}</span>
            </div>
          ))}
        </div>
      </div>
      {loading ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>Loading products...</p>
      ) : groupedCategories.length === 0 ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>No products available.</p>
      ) : (
        groupedCategories.map(([catKey, items]) => (
          <RealEstateComponent
            key={catKey}
            data={items.slice(0, 3)}
            name={formatCategoryLabel(catKey)}
            totalCount={items.length}
            showViewAll={true}
            viewAllLink={`/products/marketplace/${categoryToSlug(catKey)}`}
          />
        ))
      )}
    </div>
  );
};

export default Marketplace;
