import './RealEstateCard.css';

import { BsPatchCheck } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const RealEstateCard = ({ title, image, cost, city, location }) => {
  return (
    <div className='featured-listings-card-container'>
      <div className='featured-listings-card-image-container'>
        <img src={image} alt={title} className='featured-img' />
        <div className='featured-listings-card-header'>
          <div className='card-icon-container'>
            <BsPatchCheck />
          </div>
          <div className='luxury-container'>Luxury</div>
        </div>
        <div className='featured-listings-card-footer'>
          <h3 className='cost'>&#8377; {cost}</h3>
          <p className='location'>
            <HiOutlineLocationMarker /> {location}
          </p>
        </div>
      </div>
      <div className='featured-listings-content-container'>
        <h3 className='realestate-title'>{title}</h3>
        <p className='realestate-time'>{city}</p>
      </div>
    </div>
  );
};

export default RealEstateCard;
