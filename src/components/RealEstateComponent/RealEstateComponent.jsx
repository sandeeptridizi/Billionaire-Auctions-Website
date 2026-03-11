import './RealEstateComponent.css';

import { HiOutlineArrowSmRight } from 'react-icons/hi';

import RealEstateComponentCard from '../RealEstateComponentCard/RealEstateComponentCard';

const RealEstateComponent = ({ data, name, totalCount, showViewAll, onViewAll }) => {
  return (
    <div className='real-estate-component-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <h3 className='featured-listings-heading'>{name}</h3>
        </div>
        {showViewAll ? (
          <div className='real-estate-component-view-btn' onClick={onViewAll} style={{ cursor: 'pointer' }}>
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
