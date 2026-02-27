import './Recommendations.css';

import { useEffect, useState } from 'react';

import { FaRegStar } from 'react-icons/fa6';

import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { BsPatchCheck } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { IoMdTime } from 'react-icons/io';

import table from '../../assets/table.jpg';
import watch from '../../assets/watch.jpg';
import home from '../../assets/home.jpg';
import RecommendationCard from '../RecommendationCard/RecommendationCard';
import { formatCategoryLabel, getRecommendedProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';

const staticRecommendationData = [
  {
    id: 1,
    title: 'Designer Dining Set',
    time: '2 days ago',
    image: table,
    cost: '18,50,000',
    category: 'Furniture',
    location: 'Jaipur',
    icon1: '',
    icon2: <FaArrowTrendUp />,
    isStatic: true,
  },
  {
    id: 2,
    title: 'Patek Philippe Watch',
    time: '1 day ago',
    image: watch,
    cost: '95,00,000',
    category: 'Jewellery & Watches',
    location: 'Mumbai',
    icon1: <BsPatchCheck />,
    icon2: '',
    isStatic: true,
  },
  {
    id: 3,
    title: 'Abstract Art Collection',
    time: '4 days ago',
    image: home,
    cost: '1,20,00,000',
    category: 'Arts & Paintings',
    location: 'Pune',
    icon1: <BsPatchCheck />,
    icon2: <FaArrowTrendUp />,
    isStatic: true,
  },
];

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

  const recommendationData =
    !loading && recommended.length > 0 ? recommended : staticRecommendationData;

  return (
    <>
      <div className='mobile-featured-listings-container'>
        <h3 className='mobile-featured-heading'>
          <FaRegStar className='mobile-crown-icon' /> Recommendations
        </h3>
        <div className='mobile-featured-listings-grid-container'>
          <div className='mobile-featured-grid-item-one-container'>
            <div className='mobile-featured-grid-item-image-container'>
              <img src={table} alt='table' className='mobile-apartment-img' />
              <div className='mobile-featured-grid-item-header'>
                <div className='mobile-item-recommendation-container'>
                  Luxury
                </div>
                <div className='mobile-grid-item-growth-icon-container'>
                  <FaArrowTrendUp />
                </div>
              </div>
              <div className='mobile-featured-item-footer'>
                <p className='mobile-item-recommendation-cost'>₹18,50,000</p>
                <p className='mobile-item-location'>
                  <GrLocation /> Jaipur
                </p>
              </div>
            </div>
            <div className='mobile-featured-item-content-container'>
              <p className='mobile-item-title'>Designer Dining Set</p>
              <div className='mobile-recommendation-footer-container'>
                <p className='mobile-time'>
                  <IoMdTime /> 2 days ago
                </p>
                <p className='mobile-category'>Furniture</p>
              </div>
            </div>
          </div>
          <div className='mobile-featured-grid-item-one-container'>
            <div className='mobile-featured-grid-item-image-container'>
              <img src={watch} alt='watch' className='mobile-apartment-img' />
              <div className='mobile-featured-grid-item-header'>
                <div className='mobile-grid-item-check-icon-container'>
                  <BsPatchCheck />
                </div>
                <div className='mobile-item-recommendation-container'>
                  Luxury
                </div>
              </div>
              <div className='mobile-featured-item-footer'>
                <p className='mobile-item-recommendation-cost'>₹95,00,000</p>
                <p className='mobile-item-location'>
                  <GrLocation /> Mumbai
                </p>
              </div>
            </div>
            <div className='mobile-featured-item-content-container'>
              <p className='mobile-item-title'>Patek Philippe Watch</p>
              <div className='mobile-recommendation-footer-container'>
                <p className='mobile-time'>
                  <IoMdTime /> 1 day ago
                </p>
                <p className='mobile-category'>Jewellery & Watches</p>
              </div>
            </div>
          </div>
          <div className='mobile-featured-grid-item-one-container'>
            <div className='mobile-featured-grid-item-image-container'>
              <img src={watch} alt='watch' className='mobile-apartment-img' />
              <div className='mobile-featured-grid-item-header'>
                <div className='mobile-grid-item-check-icon-container'>
                  <BsPatchCheck />
                </div>
                <div className='mobile-item-recommendation-container'>
                  Luxury
                </div>
              </div>
              <div className='mobile-featured-item-footer'>
                <p className='mobile-item-recommendation-cost'>₹95,00,000</p>
                <p className='mobile-item-location'>
                  <GrLocation /> Mumbai
                </p>
              </div>
            </div>
            <div className='mobile-featured-item-content-container'>
              <p className='mobile-item-title'>Patek Philippe Watch</p>
              <div className='mobile-recommendation-footer-container'>
                <p className='mobile-time'>
                  <IoMdTime /> 1 day ago
                </p>
                <p className='mobile-category'>Jewellery & Watches</p>
              </div>
            </div>
          </div>
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
          {recommendationData.map((item) => (
            <RecommendationCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
