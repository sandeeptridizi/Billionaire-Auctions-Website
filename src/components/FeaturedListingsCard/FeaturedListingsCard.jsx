import './FeaturedListingsCard.css';

import { Link } from 'react-router-dom';
import { BsPatchCheck } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';

const FeaturedListingsCard = ({
  id,
  title,
  year,
  time,
  image,
  cost,
  category,
  location,
  isStatic,
}) => {
  const content = (
    <div className='featured-listings-card-container'>
      <div className='featured-listings-card-image-container'>
        <img src={image} alt={title} className='featured-img' />
        <div className='featured-listings-card-header'>
          <div className='card-icon-container'>
            <BsPatchCheck className='check-icon' />
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
        <h3 className='featured-listings-title'>{title}</h3>
        <p className='featured-listings-year'>
          Year: <span className='year'>{year}</span>
        </p>
        <div className='featured-listings-time-category-container'>
          <p className='featured-listings-time'>
            <MdAccessTime /> {time}
          </p>
          <p className='featured-listings-category'>{category}</p>
        </div>
      </div>
    </div>
  );

  if (!isStatic && id) {
    return (
      <Link to={`/product/${id}`} className='featured-listings-card-link'>
        {content}
      </Link>
    );
  }

  return content;
};

export default FeaturedListingsCard;
