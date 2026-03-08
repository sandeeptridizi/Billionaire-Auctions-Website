import './AuctionCard.css';

import { LuCalendar } from 'react-icons/lu';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBoxSeam } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { BsPatchCheck } from 'react-icons/bs';

const AuctionCard = ({
  title,
  image,
  cost,
  location,
  date,
  lots,
  registered,
}) => {
  return (
    <div className='featured-listings-card-container'>
      <div className='featured-listings-card-image-container'>
        <img src={image} alt={title} className='featured-img' />
        <div className='featured-listings-card-header'>
          <div className='auction-card-open-container'>
            <div className='auction-card-circle'></div> Open
          </div>
        </div>
        <div className='auction-card-footer'>
          <p className='auction-card-value'>Est. Value</p>
          <h3 className='auction-card-cost'>&#8377; {cost}</h3>
        </div>
      </div>
      <div className='featured-listings-content-container'>
        <h3 className='featured-listings-title'>{title}</h3>
        <div className='auction-card-info-container'>
          <div className='auction-card-info'>
            <LuCalendar className='auction-card-icon' /> {date}
          </div>
          <div className='auction-card-info'>
            <HiOutlineLocationMarker className='auction-card-icon' /> {location}
          </div>
          <div className='auction-card-info'>
            <BsBoxSeam className='auction-card-icon' /> {lots}
          </div>
          <div className='auction-card-info'>
            <GoPeople className='auction-card-icon' /> {registered}
          </div>
        </div>
      </div>
      <button className='register-now-btn'>
        <BsPatchCheck /> Register Now
      </button>
    </div>
  );
};

export default AuctionCard;
