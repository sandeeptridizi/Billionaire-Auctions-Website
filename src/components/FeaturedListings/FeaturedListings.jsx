import './FeaturedListings.css';

import { useEffect, useState } from 'react';

import { LuCrown } from 'react-icons/lu';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { BsPatchCheck } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { LuBed } from 'react-icons/lu';
import { PiBathtub } from 'react-icons/pi';
import { BsFullscreen } from 'react-icons/bs';
import { IoMdTime } from 'react-icons/io';

import car from '../../assets/car.jpg';
import table from '../../assets/table.jpg';
import watch from '../../assets/watch.jpg';
import home from '../../assets/home.jpg';
import apartment from '../../assets/apartment.jpg';

import FeaturedListingsCard from '../FeaturedListingsCard/FeaturedListingsCard';
import { formatCategoryLabel, getFeaturedProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';

const staticFeaturedData = [
  {
    id: 1,
    title: 'Roll Royce Phantom Elite',
    year: '2024',
    time: '5 days ago',
    image: car,
    cost: '12,50,00,000',
    category: 'Cars',
    location: 'Banglore',
    isStatic: true,
  },
  {
    id: 2,
    title: 'Italian Leather Sofa Set',
    year: 'Limited Edition',
    time: '1 week ago',
    image: table,
    cost: '28,50,000',
    category: 'Furniture',
    location: 'New Delhi',
    isStatic: true,
  },
  {
    id: 3,
    title: 'Cartier Diamond Necklace',
    year: '2023 Collection',
    time: '3 days ago',
    image: watch,
    cost: '8,75,00,000',
    category: 'Jewellery & Watches',
    location: 'Hyderabad',
    isStatic: true,
  },
  {
    id: 4,
    title: 'Contemporary Art Masterpiece',
    year: 'Authenticated',
    time: '1 days ago',
    image: home,
    cost: '2,40,00,000',
    category: 'Arts & Paintings',
    location: 'Pune',
    isStatic: true,
  },
];

const FeaturedListings = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const list = await getFeaturedProducts();
        const mapped = list.map((product) => ({
          id: product.id,
          title: product.title,
          year: product.meta?.year || '—',
          time: new Date(product.createdAt).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
          image: product.media?.[0] ? getFile(product.media[0]) : home,
          cost:
            typeof product.value === 'number'
              ? product.value.toLocaleString('en-IN')
              : 'Price on request',
          category: formatCategoryLabel(product.category),
          location: product.meta?.location || 'Location not specified',
        }));
        setFeatured(mapped);
      } catch {
        // ignore and fall back to static data
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  const featuredData =
    !loading && featured.length > 0 ? featured : staticFeaturedData;

  return (
    <>
      <div className='mobile-featured-listings-container'>
        <h3 className='mobile-featured-heading'>
          <LuCrown className='mobile-crown-icon' /> Featured Listings
        </h3>
        <div className='mobile-featured-listings-grid-container'>
          <div className='mobile-featured-grid-item-one-container'>
            <div className='mobile-featured-grid-item-image-container'>
              <img
                src={apartment}
                alt='apartment'
                className='mobile-apartment-img'
              />
              <div className='mobile-featured-grid-item-header'>
                <div className='mobile-grid-item-check-icon-container'>
                  <BsPatchCheck className='mobile-check-icon' />
                </div>
                <div className='mobile-item-luxury-container'>Luxury</div>
              </div>
              <div className='mobile-featured-item-footer'>
                <p className='mobile-item-cost'>₹45,00,00,000</p>
                <p className='mobile-item-location'>
                  <GrLocation /> Mumbai, Maharashtra
                </p>
              </div>
            </div>
            <div className='mobile-featured-item-content-container'>
              <p className='mobile-item-title'>
                Luxury Penthouse with Sea View
              </p>
              <div className='mobile-content-footer-container'>
                <p className='mobile-text'>
                  <LuBed /> 8
                </p>
                <p className='mobile-text'>
                  <PiBathtub /> 10
                </p>
                <p className='mobile-text'>
                  <BsFullscreen /> 15,000 sqft
                </p>
                <p className='mobile-text'>
                  <IoMdTime /> 2 days ago
                </p>
              </div>
            </div>
          </div>
          <div className='mobile-featured-grid-item-one-container'>
            <div className='mobile-featured-grid-item-image-container'>
              <img src={car} alt='car' className='mobile-apartment-img' />
              <div className='mobile-featured-grid-item-header'>
                <div className='mobile-grid-item-check-icon-container'>
                  <BsPatchCheck className='mobile-check-icon' />
                </div>
                <div className='mobile-item-luxury-container'>Luxury</div>
              </div>
              <div className='mobile-featured-item-footer'>
                <p className='mobile-item-cost'>₹12,50,00,000</p>
                <p className='mobile-item-location'>
                  <GrLocation /> Bangalore, Karnataka
                </p>
              </div>
            </div>
            <div className='mobile-featured-item-content-container'>
              <p className='mobile-item-title'>Rolls Royce Phantom Elite</p>
              <div className='mobile-content-footer'>
                <p className='mobile-year'>
                  Year: <span className='mobile-year-number'>2024</span>
                </p>
                <p className='mobile-time'>
                  <IoMdTime /> 5 days ago
                </p>
              </div>
            </div>
          </div>
          <div className='mobile-featured-grid-item-one-container'>
            <div className='mobile-featured-grid-item-image-container'>
              <img src={car} alt='car' className='mobile-apartment-img' />
              <div className='mobile-featured-grid-item-header'>
                <div className='mobile-grid-item-check-icon-container'>
                  <BsPatchCheck className='mobile-check-icon' />
                </div>
                <div className='mobile-item-luxury-container'>Luxury</div>
              </div>
              <div className='mobile-featured-item-footer'>
                <p className='mobile-item-cost'>₹12,50,00,000</p>
                <p className='mobile-item-location'>
                  <GrLocation /> Bangalore, Karnataka
                </p>
              </div>
            </div>
            <div className='mobile-featured-item-content-container'>
              <p className='mobile-item-title'>Rolls Royce Phantom Elite</p>
              <div className='mobile-content-footer'>
                <p className='mobile-year'>
                  Year: <span className='mobile-year-number'>2024</span>
                </p>
                <p className='mobile-time'>
                  <IoMdTime /> 5 days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featured-listings-container'>
        <div className='featured-listings-header'>
          <div className='featured-listings-heading-container'>
            <LuCrown className='crown-icon' />
            <h3 className='featured-listings-heading'>Featured Listings</h3>
          </div>
          <div className='featured-listings-arrow-btn-container'>
            <button className='arrow-btn'>
              <FaAngleLeft />
            </button>
            <button className='arrow-btn'>
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className='featured-listings-grid-container'>
          {featuredData.map((item) => (
            <FeaturedListingsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedListings;
