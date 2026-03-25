import './FeaturedListings.css';

import { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { IoMdTime } from 'react-icons/io';

import home from '../../assets/home.jpg';

import FeaturedListingsCard from '../FeaturedListingsCard/FeaturedListingsCard';
import CardMetaGrid from '../CardMetaGrid/CardMetaGrid';
import { formatCategoryLabel, getFeaturedProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';
import useAppContext from '../../context/AppContext';


const FeaturedListings = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedCountry } = useAppContext();
  const gridRef = useRef(null);
  const mobileGridRef = useRef(null);

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector(':scope > *');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(ref.current).gap) || 0;
    const scrollAmount = card.offsetWidth + gap;
    ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const list = await getFeaturedProducts({ country: selectedCountry });
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
          location: product.meta?.city || product.meta?.location || 'Location not specified',
          meta: product.meta || {},
          categoryKey: product.category || '',
        }));
        setFeatured(mapped);
      } catch {
        // ignore and fall back to static data
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, [selectedCountry]);

  const featuredData = featured;

  return (
    <>
      <div className='mobile-featured-listings-container'>
        <div className='mobile-featured-header-row'>
          <h3 className='mobile-featured-heading'>
            <FaCrown className='mobile-crown-icon' /> Featured Listings
          </h3>
          {featuredData.length > 3 && (
            <div className='mobile-scroll-btn-container'>
              <button className='mobile-scroll-btn' onClick={() => scroll(mobileGridRef, 'left')}>
                <FaAngleLeft />
              </button>
              <button className='mobile-scroll-btn' onClick={() => scroll(mobileGridRef, 'right')}>
                <FaAngleRight />
              </button>
            </div>
          )}
        </div>
        <div className='mobile-featured-listings-grid-container' ref={mobileGridRef}>
          {featuredData.map((item) => (
            <Link to={`/product/${item.id}`} className='mobile-featured-card-link' key={item.id}>
              <div className='featured-listings-card-container1'>
                <div className='featured-listings-card-image-container'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='mobile-apartment-img'
                  />
                  <div className='mobile-featured-grid-item-header'>
                    <div className='mobile-grid-item-check-icon-container'>
                      <MdVerified className='mobile-check-icon' />
                    </div>
                    <div className='mobile-item-luxury-container'>Luxury</div>
                  </div>
                  <div className='featured-listings-card-footer'>
                    <p className='mobile-item-cost'>₹{item.cost}</p>
                    <p className='mobile-item-location'>
                      <GrLocation /> {item.location}
                    </p>
                  </div>
                </div>
                <div className='featured-listings-content-container1'>
                  <p className='featured-listings-title card-title-single-line'>{item.title}</p>
                  <CardMetaGrid categoryKey={item.categoryKey} meta={item.meta} />
                  <div className='mobile-content-footer'>
                    <p className='mobile-time'>
                      <IoMdTime /> {item.time}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='featured-listings-container'>
        <div className='featured-listings-header'>
          <div className='featured-listings-heading-container'>
            <FaCrown className='crown-icon' />
            <h3 className='featured-listings-heading'>Featured Listings</h3>
          </div>
          {featuredData.length > 3 && (
            <div className='featured-listings-arrow-btn-container'>
              <button className='arrow-btn' onClick={() => scroll(gridRef, 'left')}>
                <FaAngleLeft />
              </button>
              <button className='arrow-btn' onClick={() => scroll(gridRef, 'right')}>
                <FaAngleRight />
              </button>
            </div>
          )}
        </div>
        <div className='featured-listings-grid-container' ref={gridRef}>
          {loading ? (
            <p>Loading featured listings...</p>
          ) : featuredData.length === 0 ? (
            <p>No featured listings available.</p>
          ) : (
            featuredData.map((item) => (
              <FeaturedListingsCard key={item.id} {...item} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedListings;
