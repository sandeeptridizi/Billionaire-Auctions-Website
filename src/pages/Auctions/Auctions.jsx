import './Auctions.css';

import { IoIosList } from 'react-icons/io';

import { IoDiamondOutline } from 'react-icons/io5';

import { LuHouse } from 'react-icons/lu';
import { LuCar } from 'react-icons/lu';
import { TbSofa } from 'react-icons/tb';
import { MdOutlinePalette } from 'react-icons/md';
import { GoTrophy } from 'react-icons/go';
import { RiBankLine } from 'react-icons/ri';

import { useEffect, useMemo, useState } from 'react';

import { GoPeople } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';
import { TbHammer } from 'react-icons/tb';
import { LuCrown } from 'react-icons/lu';

import apartment from '../../assets/apartment.jpg';
import AuctionCardComponent from '../../components/AuctionCardComponent/AuctionCardComponent';
import luxuryLoading from "../../assets/luxury web.mp4";
import classicLoading from "../../assets/classic web.mp4";
import { getAuctionsProducts, mapProductToCard, categoryOrder, formatCategoryLabel } from '../../lib/products';

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

const data = [
  {
    id: 1,
    number: '24',
    text: 'Upcoming Auctions',
  },
  {
    id: 2,
    number: '4,159',
    text: 'Registered Bidders',
  },
  {
    id: 3,
    number: '3,775Cr+',
    text: 'Estimated Value',
  },
  {
    id: 4,
    number: '857',
    text: 'Total Lots',
  },
];

const stepsData = [
  {
    id: 1,
    icon: <GoPeople />,
    title: 'Register Online',
    text: 'Sign up for the auction event and get verified',
  },
  {
    id: 2,
    icon: <BsBoxSeam />,
    title: 'Preview Items',
    text: 'Visit venue to inspect items before auction day',
  },
  {
    id: 3,
    icon: <TbHammer />,
    title: 'Attend Auction',
    text: 'Participate in live bidding at the venue',
  },
  {
    id: 4,
    icon: <LuCrown />,
    title: 'Win & Collect',
    text: 'Highest bidder wins and collects the item',
  },
];


const Auctions = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextBtn, setNextBtn] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const list = await getAuctionsProducts();
        const mapped = list.map((product) => {
          const card = mapProductToCard(product);
          return {
            id: card.id,
            title: card.title,
            image: card.image || apartment,
            cost:
              typeof product.value === 'number'
                ? `${product.value.toLocaleString('en-IN')}+`
                : 'Price on request',
            location: product.meta?.auctionVenue || product.meta?.location || 'Unspecified',
            date: product.meta?.auctionDate || product.meta?.date || '',
            lots: product.meta?.lots || '',
            registered: product.meta?.registered || '',
            rawCategory: product.category,
          };
        });
        setProducts(mapped);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load auction products', error);
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
    if (!search) return products;
    const matchedCategory = categoryOrder.find((cat) =>
      formatCategoryLabel(cat).toLowerCase().includes(search.toLowerCase()),
    );
    if (matchedCategory) {
      return products.filter((item) => item.rawCategory === matchedCategory);
    }
    return products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const groupedCategories = useMemo(() => {
    const map = new Map();
    filteredProducts.forEach((product) => {
      const key = product.rawCategory || 'OTHERS';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(product);
    });
    const entries = Array.from(map.entries()).sort((a, b) => {
      const aIdx = categoryOrder.indexOf(a[0]);
      const bIdx = categoryOrder.indexOf(b[0]);
      return (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) - (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx);
    });
    if (selectedCategory !== 'all') {
      const selected = entries.find(([catKey]) => catKey === selectedCategory);
      return selected ? [selected] : [];
    }
    return entries;
  }, [filteredProducts, selectedCategory]);

  return (
    <div className='buy-now-container'>
      <div className='market-place-background-container'>
        <div>
        <h2 className='buy-now-heading'>Auctions</h2>
        <p className='buy-now-text'>
          Exclusive offline auctions accross indian cities. Register to participate
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
            <input
              type='text'
              placeholder='Search auction events...' 
              className='buy-now-input'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='auctions-flex-container'>
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center' }}>Loading auctions...</p>
        ) : groupedCategories.length === 0 ? (
          <p style={{ padding: '40px', textAlign: 'center' }}>No auction events available.</p>
        ) : (
          groupedCategories.map(([catKey, items]) => (
            <AuctionCardComponent
              key={catKey}
              data={selectedCategory === 'all' ? items.slice(0, 3) : items}
              name={formatCategoryLabel(catKey)}
              totalCount={items.length}
              showViewAll={selectedCategory === 'all'}
              onViewAll={() => setSelectedCategory(catKey)}
            />
          ))
        )}
      </div>
      <div className='auctions-steps-main-container'>
        <div className='auctions-steps-header'>
          <h1 className='auctions-step-heading'>
            How Our Offline Auctions Work
          </h1>
          <p className='auctions-step-text'>
            Experience the thrill of live bidding at prestigious venues
          </p>
        </div>
        <div className='auctions-step-grid-container'>
          {stepsData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='auctions-step-item-container' key={id}>
                <div className='auctions-step-item-icon-container'>{icon}</div>
                <h2 className='auctions-step-item-heading'>Step {id}</h2>
                <h3 className='auctions-step-item-title'>{title}</h3>
                <p className='auctions-step-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Auctions;
