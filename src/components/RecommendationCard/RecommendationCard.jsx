import './RecommendationCard.css';

import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';
import CardMetaGrid from '../CardMetaGrid/CardMetaGrid';

const RecommendationCard = ({
  id,
  title,
  time,
  image,
  cost,
  category,
  location,
  icon1,
  icon2,
  isStatic,
  meta = {},
  categoryKey = '',
}) => {
  const content = (
    <div className='featured-listings-card-container'>
      <div className='featured-listings-card-image-container'>
        <img src={image} alt={title} className='featured-img' />
        <div className='featured-listings-card-header'>
          {icon1 && <div className='card-icon1-container'>{icon1}</div>}
          <div className='recommendation-luxury-container'>Luxury</div>
          {icon2 && <div className='card-icon2-container'>{icon2}</div>}
        </div>
        <div className='featured-listings-card-footer'>
          <h3 className='recommendation-cost'>&#8377; {cost}</h3>
          <p className='location'>
            <HiOutlineLocationMarker /> {location}
          </p>
        </div>
      </div>
      <div className='featured-listings-content-container'>
        <h3 className='featured-listings-title card-title-single-line'>{title}</h3>
        <CardMetaGrid categoryKey={categoryKey} meta={meta} />
        <div className='featured-listings-time-category-container'>
          <p className='featured-listings-time'>
            <MdAccessTime /> {time}
          </p>
          <p className='recommendation-category'>{category}</p>
        </div>
      </div>
    </div>
  );

  if (!isStatic && id) {
    return (
      <Link to={`/product/${id}`} className='recommendation-card-link'>
        {content}
      </Link>
    );
  }

  return content;
};

export default RecommendationCard;
