import './Recommendations.css';

import { useEffect, useState } from 'react';

import { FaRegStar } from 'react-icons/fa6';

import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { BsPatchCheck } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { IoMdTime } from 'react-icons/io';

import home from '../../assets/home.jpg';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import { formatCategoryLabel, getRecommendedProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';


const Recommendations = () => {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const list = await getRecommendedProducts();
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
          location: product.meta?.location || 'Location not specified',
          icon1: product.isFeatured ? <BsPatchCheck /> : '',
          icon2: product.isRecommended ? <FaArrowTrendUp /> : '',
        }));
        setRecommended(mapped);
      } catch {
        // ignore and fall back to static data
      } finally {
        setLoading(false);
      }
    };

    fetchRecommended();
  }, []);

  const recommendationData = recommended;

  return (
    <>
      <div className='mobile-featured-listings-container'>
        <h3 className='mobile-featured-heading'>
          <FaRegStar className='mobile-crown-icon' /> Recommendations
        </h3>
        <div className='mobile-featured-listings-grid-container'>
          {recommendationData.slice(0, 3).map((item) => (
            <div className='mobile-featured-grid-item-one-container' key={item.id}>
              <div className='mobile-featured-grid-item-image-container'>
                <img src={item.image} alt={item.title} className='mobile-apartment-img' />
                <div className='mobile-featured-grid-item-header'>
                  {item.icon1 && (
                    <div className='mobile-grid-item-check-icon-container'>
                      {item.icon1}
                    </div>
                  )}
                  <div className='mobile-item-recommendation-container'>
                    Luxury
                  </div>
                  {item.icon2 && (
                    <div className='mobile-grid-item-growth-icon-container'>
                      {item.icon2}
                    </div>
                  )}
                </div>
                <div className='mobile-featured-item-footer'>
                  <p className='mobile-item-recommendation-cost'>₹{item.cost}</p>
                  <p className='mobile-item-location'>
                    <GrLocation /> {item.location}
                  </p>
                </div>
              </div>
              <div className='mobile-featured-item-content-container'>
                <p className='mobile-item-title'>{item.title}</p>
                <div className='mobile-recommendation-footer-container'>
                  <p className='mobile-time'>
                    <IoMdTime /> {item.time}
                  </p>
                  <p className='mobile-category'>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='recommendations-container'>
        <div className='featured-listings-header'>
          <div className='featured-listings-heading-container'>
            <FaRegStar className='star-icon' />
            <h3 className='featured-listings-heading'>Recommendations</h3>
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
