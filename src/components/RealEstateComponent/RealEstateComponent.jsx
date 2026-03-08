import './RealEstateComponent.css';

import { HiOutlineArrowSmRight } from 'react-icons/hi';

import RealEstateComponentCard from '../RealEstateComponentCard/RealEstateComponentCard';

const RealEstateComponent = ({ data, name }) => {
  return (
    <div className='real-estate-component-container'>
      <div className='featured-listings-header'>
        <div className='featured-listings-heading-container'>
          <h3 className='featured-listings-heading'>{name}</h3>
        </div>
        <div className='real-estate-component-view-btn'>
          View All (6) <HiOutlineArrowSmRight />
        </div>
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
