import './Marketplace.css';

import { IoSearch } from 'react-icons/io5';
import { GrFilter } from 'react-icons/gr';
import { BsGrid3X3 } from 'react-icons/bs';
import { IoIosList } from 'react-icons/io';

import { LuCrown } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';

import { LuHouse } from 'react-icons/lu';
import { LuCar } from 'react-icons/lu';
import { TbSofa } from 'react-icons/tb';
import { MdOutlinePalette } from 'react-icons/md';
import { GoTrophy } from 'react-icons/go';
import { RiBankLine } from 'react-icons/ri';
import { BsBoxSeam } from 'react-icons/bs';

import { useEffect, useMemo, useState } from 'react';
import RealEstateComponent from '../../components/RealEstateComponent/RealEstateComponent';
import luxuryLoading from "../../assets/luxury web.mp4";
import classicLoading from "../../assets/classic web.mp4";

import {
  categoryOrder,
  formatCategoryLabel,
  getMarketplaceProducts,
  mapProductToCard,
} from '../../lib/products';

const categoryKeyToBtnName = {
  REAL_ESTATE: 'realEstate',
  CARS: 'cars',
  BIKES: 'bikes',
  FURNITURE: 'furniture',
  JEWELLERY_AND_WATCHES: 'jewellery',
  ARTS_AND_PAINTINGS: 'arts',
  ANTIQUES: 'antiques',
  COLLECTABLES: 'collectables',
};

const btns = [
  {
    id: 0,
    icon: <BsBoxSeam />,
    title: 'All',
    name: 'all',
  },
  {
    id: 1,
    icon: <LuHouse />,
    title: 'Real Estate',
    name: 'realEstate',
  },
  {
    id: 2,
    icon: <LuCar />,
    title: 'Cars',
    name: 'cars',
  },
  {
    id: 3,
    icon: <TbSofa />,
    title: 'Furniture',
    name: 'furniture',
  },
  {
    id: 4,
    icon: <IoDiamondOutline />,
    title: 'Jewellery & Watches',
    name: 'jewellery',
  },
  {
    id: 5,
    icon: <MdOutlinePalette />,
    title: 'Arts & Paintings',
    name: 'arts',
  },
  {
    id: 6,
    icon: <RiBankLine />,
    title: 'Antiques',
    name: 'antiques',
  },
  {
    id: 7,
    icon: <GoTrophy />,
    title: 'Collectables',
    name: 'collectables',
  },
  {
    id: 8,
    icon: <IoIosList />,
    title: 'Others',
    name: 'others',
  },
];

const Marketplace = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextBtn, setNextBtn] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const list = await getMarketplaceProducts();
        setProducts(list);
      } catch (error) {
        console.error('Failed to load marketplace products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

    const entries = Array.from(map.entries()).sort((a, b) => {
      const aIdx = categoryOrder.indexOf(a[0]);
      const bIdx = categoryOrder.indexOf(b[0]);
      return (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) -
        (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx);
    });

    if (selectedCategory !== 'all') {
      const selected = entries.find((entry) => {
        const label = formatCategoryLabel(entry[0]).toLowerCase();
        return label.replace(/[^a-z]/g, '').includes(selectedCategory.toLowerCase());
      });
      return selected ? [selected] : [];
    }

    return entries;
  }, [filteredProducts, selectedCategory]);

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
            <button className='buy-now-filter-btn'>
              <GrFilter /> Filters
            </button>
            <div className='buy-now-icons-container'>
              <div className='buy-now-grid-icon-container'>
                <BsGrid3X3 />
              </div>
            </div>
          </div>
        </div>
        <div className='buy-now-category-btn-container'>
          {btns.map((item) => {
            const { id, icon, title, name } = item;
            return (
              <div className='buy-now-category-item-container' key={id}>
                <div
                  className={
                    selectedCategory === name
                      ? 'buy-now-category-item-icon-container active-category-btn'
                      : 'buy-now-category-item-icon-container'
                  }
                  onClick={() => setSelectedCategory(name)}
                >
                  {icon}
                </div>
                <p className='buy-now-category-item-title'>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {!loading &&
        groupedCategories.map(([catKey, items]) => (
          <RealEstateComponent
            key={catKey}
            data={selectedCategory === 'all' ? items.slice(0, 3) : items}
            name={formatCategoryLabel(catKey)}
            totalCount={items.length}
            showViewAll={selectedCategory === 'all'}
            onViewAll={() => setSelectedCategory(categoryKeyToBtnName[catKey] || 'others')}
          />
        ))}
    </div>
  );
};

export default Marketplace;
