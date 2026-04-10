import './Recommendations.css';

import { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { FaStar, FaCrown } from 'react-icons/fa6';

import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { IoMdTime } from 'react-icons/io';

import home from '../../assets/home.jpg';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import CardMetaGrid from '../CardMetaGrid/CardMetaGrid';
import { formatCategoryLabel, getRecommendedProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';
import useAppContext from '../../context/AppContext';


const Recommendations = () => {
  const [recommended, setRecommended] = useState([]);
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
    const fetchRecommended = async () => {
      try {
        const list = await getRecommendedProducts({ country: selectedCountry });
        const mapped = list.map((product) => ({
          id: product.id,
          title: product.title,
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
          isVerified: !!product.isVerified,
          icon1: product.isVerified ? <MdVerified /> : '',
          meta: product.meta || {},
          categoryKey: product.category || '',
          tier: product.tier,
        }));
        for (let i = mapped.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
        }
        setRecommended(mapped);
      } catch {
        // ignore and fall back to static data
      } finally {
        setLoading(false);
      }
    };

    fetchRecommended();
  }, [selectedCountry]);

  const recommendationData = recommended;

  return (
    <>
      <div className='mobile-featured-listings-container'>
        <div className='mobile-featured-header-row'>
          <h3 className='mobile-featured-heading'>
            <FaStar className='crown-icon' /> Recommendations
          </h3>
          {recommendationData.length > 3 && (
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
          {recommendationData.slice(0, 6).map((item) => (
            <Link to={`/product/${item.id}`} className='mobile-recommendation-card-link' key={item.id}>
              <div className='featured-listings-card-container1'>
                <div className='featured-listings-card-image-container'>
                  <img src={item.image} alt={item.title} className='mobile-apartment-img' />
                  <div className='mobile-featured-grid-item-header'>
                    {item.isVerified && (
                      <div className='mobile-grid-item-check-icon-container'>
                        <MdVerified />
                      </div>
                    )}
                    <div className='mobile-item-luxury-container'>
                      <FaCrown />
                      {item.tier ? item.tier.charAt(0) + item.tier.slice(1).toLowerCase() : 'General'}
                    </div>

                  </div>
                  <div className='featured-listings-card-footer'>
                    <p className='mobile-item-recommendation-cost'>₹{item.cost}</p>
                    <p className='mobile-item-cost'>
                      <GrLocation /> {item.location}
                    </p>
                  </div>
                </div>
                <div className='featured-listings-content-container1'>
                  <p className='featured-listings-title card-title-single-line'>{item.title}</p>
                  <CardMetaGrid categoryKey={item.categoryKey} meta={item.meta} />
                  <div className='mobile-recommendation-footer-container'>
                    <p className='mobile-time'>
                      <IoMdTime /> {item.time}
                    </p>
                    <p className='mobile-category'>{item.category}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='recommendations-container'>
        <div className='featured-listings-header'>
          <div className='featured-listings-heading-container'>
            <FaStar className='crown-icon' />
            <h3 className='featured-listings-heading'>Recommendations</h3>
          </div>
          {recommendationData.length > 3 && (
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
            <p>Loading recommendations...</p>
          ) : recommendationData.length === 0 ? (
            <p>No recommendations available.</p>
          ) : (
            recommendationData.map((item) => (
              <RecommendationCard key={item.id} {...item} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
