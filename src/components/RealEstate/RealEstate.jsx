import { useState, useEffect } from 'react';
import './RealEstate.css';

import { LuHouse } from 'react-icons/lu';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

import RealEstateCard from '../RealEstateCard/RealEstateCard';
import { getPublicProducts } from '../../lib/products';
import { getFile } from '../../lib/s3';
import useAppContext from '../../context/AppContext';

const RealEstate = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchRealEstate = async () => {
      try {
        const list = await getPublicProducts({ category: 'REAL_ESTATE', country: selectedCountry });
        const mapped = list.slice(0, 4).map((product) => ({
          id: product.id,
          title: product.title,
          image: product.media?.[0] ? getFile(product.media[0]) : '',
          cost: typeof product.value === 'number'
            ? product.value.toLocaleString('en-IN')
            : 'Price on request',
          city: product.meta?.city || product.meta?.location || 'Location not specified',
          location: product.meta?.city || product.meta?.location || 'Location not specified',
        }));
        setProperties(mapped);
      } catch {
        // silent fail
      } finally {
        setLoading(false);
      }
    };

    fetchRealEstate();
  }, [selectedCountry]);

  if (!loading && properties.length === 0) return null;

  return (
    <div className='real-estate-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <div className='real-estate-icon-container'>
            <LuHouse />
          </div>
          <div className='real-estate-content-container'>
            <h3 className='featured-listings-heading'>Real Estate</h3>
            <p className='real-estate-text'>{properties.length} Products Available</p>
          </div>
        </div>
        <div className='real-estate-arrow-btn-container'>
          <button className='arrow-btn'>
            <FaAngleLeft />
          </button>
          <button className='arrow-btn'>
            <FaAngleRight />
          </button>
          <button className='real-estate-btn'>
            <RxCross2 />
          </button>
        </div>
      </div>
      <div className='real-estate-grid-container'>
        {loading
          ? <p>Loading...</p>
          : properties.map((item) => (
              <RealEstateCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  );
};

export default RealEstate;
