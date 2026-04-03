import './AuctionCard.css';

import { getFile } from '../../lib/s3';
import { LuCalendar } from 'react-icons/lu';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBoxSeam } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { MdVerified } from 'react-icons/md';

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
    <div className='featured-listings-card-container2'>
      <div className='featured-listings-card-image-container'>
        <img src={getFile(image)} alt={title} className='featured-img' />
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
        <h3 className='featured-listings-title card-title-single-line'>{title}</h3>
        <div className='card-meta-grid'>
          <div className='card-meta-item'>
            <LuCalendar className='auction-card-icon' /> {date}
          </div>
          <div className='card-meta-item'>
            <HiOutlineLocationMarker className='auction-card-icon' /> {location}
          </div>
          <div className='card-meta-item'>
            <BsBoxSeam className='auction-card-icon' /> {lots}
          </div>
          <div className='card-meta-item'>
            <GoPeople className='auction-card-icon' /> {registered}
          </div>
        </div>
      </div>
      <button className='register-now-btn'>
        <MdVerified /> Register Now
      </button>
    </div>
  );
};

export default AuctionCard;
