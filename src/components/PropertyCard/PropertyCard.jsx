import './PropertyCard.css';

import { BsPatchCheck } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';

import { LuBed } from 'react-icons/lu';
import { PiBathtub } from 'react-icons/pi';
import { BsFullscreen } from 'react-icons/bs';

const PropertyCard = ({
  image,
  cost,
  location,
  bhk,
  tubs,
  squareFeet,
  deposit,
  available,
  category,
  views,
  title,
}) => {
  return (
    <div className='featured-listings-card-container'>
      <div className='featured-listings-card-image-container'>
        <img src={image} alt={title} className='featured-img' />
        <div className='property-card-header'>
          <div className='property-available-container'>AVAILABLE</div>
          <div className='real-estate-card-icon-container'>
            <BsPatchCheck className='real-estate-component-icon' /> Verified
          </div>
        </div>
        <div className='property-card-footer'>
          <div className='property-card-footer-header'>
            <p className='property-rent'>Monthly Rent</p>
            <h3 className='property-card-cost'>&#8377; {cost}</h3>
          </div>
          <p className='location'>
            <HiOutlineLocationMarker /> {location}
          </p>
        </div>
      </div>
      <div className='featured-listings-content-container'>
        <h3 className='featured-listings-title'>{title}</h3>
        <div className='property-card-square-container'>
          <div className='property-card-icon-container'>
            <LuBed className='property-icon' /> {bhk}
          </div>
          <div className='property-card-icon-container'>
            <PiBathtub className='property-icon' /> {tubs}
          </div>
          <div className='property-card-icon-container'>
            <BsFullscreen className='property-icon' /> {squareFeet}
          </div>
        </div>
        <div className='real-estate-component-justify-container'>
          <div className='property-deposit-container'>
            <p className='deposit-heading'>Deposit</p>
            <h3 className='deposit'>{deposit}</h3>
          </div>
          <div className='property-deposit-container'>
            <p className='deposit-heading'>Available</p>
            <h3 className='deposit'>{available}</h3>
          </div>
        </div>
        <div className='property-furnished-views-container'>
          <div className='property-furnished-container'>{category}</div>
          <div className='property-views-container'>
            <MdOutlineRemoveRedEye /> {views}
          </div>
        </div>
        <div className='real-estate-component-btn-container'>
          <div className='real-estate-component-enquire-btn'>View Details</div>
          <div className='real-estate-component-favorite-btn'>
            <GrFavorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
