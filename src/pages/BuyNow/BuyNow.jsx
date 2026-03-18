import './BuyNow.css';

import { TiFlashOutline } from 'react-icons/ti';
import { FiShield } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import { FiTruck } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

import { FaCrown } from 'react-icons/fa6';
import { IoDiamond } from 'react-icons/io5';

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import RealEstateComponent from '../../components/RealEstateComponent/RealEstateComponent';
import luxuryLoading from "../../assets/luxury web.mp4";
import classicLoading from "../../assets/classic web.mp4";
import {
  categoryOrder,
  formatCategoryLabel,
  getBuyNowProducts,
  mapProductToCard,
} from '../../lib/products';
import useAppContext from '../../context/AppContext';

const categoryToSlug = (catKey) => catKey.toLowerCase().replace(/_/g, '-');

const data = [
  {
    id: 1,
    icon: <TiFlashOutline />,
    title: 'Instant Purchase',
    text: 'Buy immediately',
  },
  {
    id: 2,
    icon: <FiShield />,
    title: 'Secure Payment',
    text: '100% protected',
  },
  {
    id: 3,
    icon: <MdVerified />,
    title: 'Verified Items',
    text: 'Authenticated',
  },
  {
    id: 4,
    icon: <FiTruck />,
    title: 'Fast Delivery',
    text: 'White glove service',
  },
];


const BuyNow = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextBtn, setNextBtn] = useState(null);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const list = await getBuyNowProducts({ country: selectedCountry });
        setProducts(list);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load buy now products', error);
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
      return byTier && bySearch;
    });
  }, [products, search, selectedBtn]);

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
        <h2 className='buy-now-heading'>Buy Now</h2>
        <p className='buy-now-text'>
          Purchase Luxury Items Instantly with Confidence - No Bidding & Waiting
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
                    <FaCrown /> Luxury
                  </div>

                  <div
                    className={
                      selectedBtn === 'Classic'
                        ? 'buy-now-btn-container active-btn'
                        : 'buy-now-btn-container'
                    }
                    onClick={() => handleSwitch('Classic')}
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
            <Link to='/products/buy-now/all' className='buy-now-filter-btn'>
              View All <HiOutlineArrowSmRight />
            </Link>
          </div>
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
            viewAllLink={`/products/buy-now/${categoryToSlug(catKey)}`}
          />
        ))
      )}
    </div>
  );
};

export default BuyNow;
