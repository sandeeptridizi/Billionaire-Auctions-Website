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

import heritage from '../../assets/heritage.jpg';
import apartment from '../../assets/apartment.jpg';
import villa from '../../assets/villa.jpg';
import car from '../../assets/car.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import auctionFurniture1 from '../../assets/auction-furniture1.jpg';
import auctionFurniture2 from '../../assets/auction-furniture2.jpg';
import auctionFurniture3 from '../../assets/auction-furniture3.jpg';
import watch from '../../assets/watch.jpg';
import necklace from '../../assets/necklace.jpg';
import watch2 from '../../assets/watch2.jpg';
import arts from '../../assets/arts.jpg';
import arts2 from '../../assets/arts2.jpg';
import arts3 from '../../assets/arts3.jpg';
import antiques from '../../assets/antiques.jpg';
import antiques2 from '../../assets/antiques2.jpg';
import collectables from '../../assets/collectables.jpg';
import collectables2 from '../../assets/collectables2.jpg';
import collectables3 from '../../assets/collectables3.jpg';
import others from '../../assets/others.jpg';
import aeroplane from '../../assets/aeroplane.jpg';
import ship from '../../assets/ship.jpg';
import AuctionCardComponent from '../../components/AuctionCardComponent/AuctionCardComponent';
import { getAuctionsProducts, mapProductToCard } from '../../lib/products';

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

const realEstateData = [
  {
    id: 1,
    title: 'Luxury Villas & Penthouses',
    image: apartment,
    cost: '500+ Crore',
    location: 'Mumbai, Maharashtra',
    date: 'February 15, 2026',
    lots: '25 Lots',
    registered: '156 Registered',
  },
  {
    id: 2,
    title: 'Premium Penthouses & Sky Villas',
    image: villa,
    cost: '350+ Crore',
    location: 'New Delhi, Delhi',
    date: 'February 20, 2026',
    lots: '18 Lots',
    registered: '142 Registered',
  },
  {
    id: 3,
    title: 'Heritage Mansions & Estates',
    image: heritage,
    cost: '300+ Crore',
    location: 'Gurugram, Haryana',
    date: 'February 28, 2026',
    lots: '15 Lots',
    registered: '128 Registered',
  },
];

const carsData = [
  {
    id: 1,
    title: 'Exotic Supercars Collection',
    image: car,
    cost: '200+ Crore',
    location: 'Bangalore, Karnataka',
    date: 'March 5, 2026',
    lots: '35 Lots',
    registered: '234 Registered',
  },
  {
    id: 2,
    title: 'Premium Sports Cars Auction',
    image: car2,
    cost: '150+ Crore',
    location: 'Chennai, Tamilnadu',
    date: 'March 10, 2026',
    lots: '28 Lots',
    registered: '198 Registered',
  },
  {
    id: 3,
    title: 'Vintage & Classic Automobiles',
    image: car3,
    cost: '180+ Crore',
    location: 'Hyderabad, Telangana',
    date: 'March 18, 2026',
    lots: '22 Lots',
    registered: '176 Registered',
  },
];

const furnitureData = [
  {
    id: 1,
    title: 'Modern Designer Furniture',
    image: auctionFurniture1,
    cost: '75+ Crore',
    location: 'New Delhi, Delhi',
    date: 'March 22, 2026',
    lots: '42 Lots',
    registered: '98 Registered',
  },
  {
    id: 2,
    title: 'Italian & European Luxury',
    image: auctionFurniture2,
    cost: '65+ Crore',
    location: 'New Delhi, Delhi',
    date: 'March 28, 2026',
    lots: '38 Lots',
    registered: '112 Registered',
  },
  {
    id: 3,
    title: 'Premium Home Decor Collection',
    image: auctionFurniture3,
    cost: '80+ Crore',
    location: 'Mumbai, Maharashtra',
    date: 'April 2, 2026',
    lots: '45 Lots',
    registered: '134 Registered',
  },
];

const jewelleryData = [
  {
    id: 1,
    title: 'Fine Diamond Jewellery',
    image: watch,
    cost: '300+ Crore',
    location: 'Chennai, Tamilnadu',
    date: 'April 8, 2026',
    lots: '58 Lots',
    registered: '312 Registered',
  },
  {
    id: 2,
    title: 'Heritage Jewellery Collection',
    image: necklace,
    cost: '220+ Crore',
    location: 'Udaipur, Rajasthan',
    date: 'April 12, 2026',
    lots: '44 Lots',
    registered: '267 Registered',
  },
  {
    id: 3,
    title: 'Luxury Swiss Timepieces',
    image: watch2,
    cost: '180+ Crore',
    location: 'Bangalore, Karnataka',
    date: 'April 18, 2026',
    lots: '36 Lots',
    registered: '289 Registered',
  },
];

const artsData = [
  {
    id: 1,
    title: 'Contemporary Indian Art',
    image: arts,
    cost: '150+ Crore',
    location: 'Kolkata, West Bengal',
    date: 'April 22, 2026',
    lots: '48 Lots',
    registered: '187 Registered',
  },
  {
    id: 2,
    title: 'Modern Art Masterpieces',
    image: arts2,
    cost: '200+ Crore',
    location: 'Mumbai, Maharashtra',
    date: 'April 26, 2026',
    lots: '42 Lots',
    registered: '213 Registered',
  },
  {
    id: 3,
    title: 'Vintage & Classic Paintings',
    image: arts3,
    cost: '120+ Crore',
    location: 'Mumbai, Maharashtra',
    date: 'May 2, 2026',
    lots: '36 Lots',
    registered: '164 Registered',
  },
];

const antiquesData = [
  {
    id: 1,
    title: 'Royal Heritage Artifacts',
    image: antiques,
    cost: '120+ Crore',
    location: 'Jaipur, Rajasthan',
    date: 'May 8, 2026',
    lots: '52 Lots',
    registered: '143 Registered',
  },
  {
    id: 2,
    title: 'Victorian Era Collection',
    image: antiques2,
    cost: '95+ Crore',
    location: 'Agra, Uttar Pradesh',
    date: 'May 12, 2026',
    lots: '46 Lots',
    registered: '128 Registered',
  },
  {
    id: 3,
    title: 'Colonial Furniture & Artifacts',
    image: antiques,
    cost: '85+ Crore',
    location: 'Kolkata, West Bengal',
    date: 'May 18, 2026',
    lots: '38 Lots',
    registered: '115 Registered',
  },
];

const collectablesData = [
  {
    id: 1,
    title: 'Rare Stamps & Coins',
    image: collectables,
    cost: '80+ Crore',
    location: 'Hyderabad, Telangana',
    date: 'May 22, 2026',
    lots: '38 Lots',
    registered: '165 Registered',
  },
  {
    id: 2,
    title: 'Vintage Memorabilia',
    image: collectables2,
    cost: '65+ Crore',
    location: 'Gurugram, Haryana',
    date: 'May 26, 2026',
    lots: '44 Lots',
    registered: '142 Registered',
  },
  {
    id: 3,
    title: 'Limited Edition Collectibles',
    image: collectables3,
    cost: '55+ Crore',
    location: 'Bangalore, Karnataka',
    date: 'June 2, 2026',
    lots: '32 Lots',
    registered: '128 Registered',
  },
];

const othersData = [
  {
    id: 1,
    title: 'Luxury Yachts & Marine',
    image: others,
    cost: '250+ Crore',
    location: 'Goa',
    date: 'June 8, 2026',
    lots: '28 Lots',
    registered: '198 Registered',
  },
  {
    id: 2,
    title: 'Private Jets & Aircraft',
    image: aeroplane,
    cost: '400+ Crore',
    location: 'Mumbai, Maharashtra',
    date: 'June 12, 2026',
    lots: '12 Lots',
    registered: '176 Registered',
  },
  {
    id: 3,
    title: 'Premium Lifestyle Items',
    image: ship,
    cost: '120+ Crore',
    location: 'Mumbai, Maharashtra',
    date: 'June 18, 2026',
    lots: '35 Lots',
    registered: '154 Registered',
  },
];

const Auctions = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const filteredProducts = useMemo(() => {
    if (!search) return products;
    return products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  return (
    <div className='buy-now-container'>
      <div className='auctions-background-container'>
        <h2 className='buy-now-heading'>Offline Auctions</h2>
        <p className='auction-text'>
          Exclusive Offline Auction Events Across India
        </p>
        <p className='auction-desc'>
          Participate in prestigious live auctions conducted at luxury venues
        </p>
        <div className='buy-now-grid-container'>
          {data.map((item) => {
            const { id, number, text } = item;
            return (
              <div className='auction-item-container' key={id}>
                <h3 className='auction-number'>{number}</h3>
                <p className='auction-text'>{text}</p>
              </div>
            );
          })}
        </div>
        <div className='buy-now-btns-container'>
          <div
            className={
              selectedBtn === 'All'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => setSelectedBtn('All')}
          >
            All
          </div>
          <div
            className={
              selectedBtn === 'Luxury'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => setSelectedBtn('Luxury')}
          >
            <LuCrown /> Luxury
          </div>
          <div
            className={
              selectedBtn === 'Classic'
                ? 'buy-now-btn-container active-btn'
                : 'buy-now-btn-container'
            }
            onClick={() => setSelectedBtn('Classic')}
          >
            <IoDiamondOutline /> Classic
          </div>
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
      <div className='auctions-flex-container'>
        {(loading && products.length === 0
          ? [
              { name: 'Real Estate', data: realEstateData },
              { name: 'Cars', data: carsData },
              { name: 'Furniture', data: furnitureData },
              { name: 'Jewellery & Watches', data: jewelleryData },
              { name: 'Arts & Paintings', data: artsData },
              { name: 'Antiques', data: antiquesData },
              { name: 'Collectables', data: collectablesData },
              { name: 'Others', data: othersData },
            ]
          : [{ name: 'Auctions', data: filteredProducts }]
        ).map((section) => (
          <AuctionCardComponent
            key={section.name}
            data={section.data}
            name={section.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Auctions;
