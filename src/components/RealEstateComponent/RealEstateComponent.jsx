import './RealEstateComponent.css';

import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

import RealEstateComponentCard from '../RealEstateComponentCard/RealEstateComponentCard';

const RealEstateComponent = ({ data, name, totalCount, showViewAll, viewAllLink, onViewAll }) => {
  return (
    <div className='real-estate-component-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <h3 className='featured-listings-heading'>{name}</h3>
        </div>
        {showViewAll && viewAllLink ? (
          <Link to={viewAllLink} className='real-estate-component-view-btn'>
            View All ({totalCount}) <HiOutlineArrowSmRight />
          </Link>
        ) : showViewAll && onViewAll ? (
          <div className='real-estate-component-view-btn' style={{ cursor: 'pointer' }} onClick={onViewAll}>
            View All ({totalCount}) <HiOutlineArrowSmRight />
          </div>
        ) : (
          <div className='real-estate-component-view-btn'>
            {totalCount} {totalCount === 1 ? 'Item' : 'Items'} <HiOutlineArrowSmRight />
          </div>
        )}
      </div>
      <div className='real-estate-component-grid-container'>
        {data.map((item) => (
          <RealEstateComponentCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RealEstateComponent;
