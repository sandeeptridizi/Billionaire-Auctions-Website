import './RealEstateCard.css';

import { MdVerified } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import CardMetaGrid from '../CardMetaGrid/CardMetaGrid';

const RealEstateCard = ({ title, image, cost, city, location, meta = {}, categoryKey = '' }) => {
  return (
    <div className='featured-listings-card-container'>
      <div className='featured-listings-card-image-container'>
        <img src={image} alt={title} className='featured-img' />
        <div className='featured-listings-card-header'>
          <div className='card-icon-container'>
            <MdVerified />
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
        <h3 className='realestate-title card-title-single-line'>{title}</h3>
        <CardMetaGrid categoryKey={categoryKey} meta={meta} />
        <p className='realestate-time'>{city}</p>
      </div>
    </div>
  );
};

export default RealEstateCard;
