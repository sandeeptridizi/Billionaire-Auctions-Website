import './FeaturedListings.css';

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { LuCrown } from 'react-icons/lu';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { BsPatchCheck } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { IoMdTime } from 'react-icons/io';

import home from '../../assets/home.jpg';

import FeaturedListingsCard from '../FeaturedListingsCard/FeaturedListingsCard';
import { formatCategoryLabel, getFeaturedProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';
import useAppContext from '../../context/AppContext';


const FeaturedListings = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedCountry } = useAppContext();

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
        <h3 className='mobile-featured-heading'>
          <LuCrown className='mobile-crown-icon' /> Featured Listings
        </h3>
        <div className='mobile-featured-listings-grid-container'>
          {featuredData.slice(0, 3).map((item) => (
            <Link to={`/product/${item.id}`} className='mobile-featured-card-link' key={item.id}>
              <div className='mobile-featured-grid-item-one-container'>
                <div className='mobile-featured-grid-item-image-container'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='mobile-apartment-img'
                  />
                  <div className='mobile-featured-grid-item-header'>
                    <div className='mobile-grid-item-check-icon-container'>
                      <BsPatchCheck className='mobile-check-icon' />
                    </div>
                    <div className='mobile-item-luxury-container'>Luxury</div>
                  </div>
                  <div className='mobile-featured-item-footer'>
                    <p className='mobile-item-cost'>₹{item.cost}</p>
                    <p className='mobile-item-location'>
                      <GrLocation /> {item.location}
                    </p>
                  </div>
                </div>
                <div className='mobile-featured-item-content-container'>
                  <p className='mobile-item-title'>{item.title}</p>
                  <div className='mobile-content-footer'>
                    <p className='mobile-year'>
                      Year: <span className='mobile-year-number'>{item.year}</span>
                    </p>
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
