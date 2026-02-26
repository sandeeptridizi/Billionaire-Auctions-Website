import './RealEstateComponentCard.css';

import { BsPatchCheck } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { LuCrown } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { getFile } from '../../lib/s3';

const RealEstateComponentCard = ({
  id,
  title,
  image,
  cost,
  location,
  views,
  category,
}) => {
  return (
    <div className="featured-listings-card-container">
      <div className="featured-listings-card-image-container">
        <img src={getFile(image)} alt={title} className="featured-img" />
        <div className="featured-listings-card-header">
          <div className="real-estate-card-icon-container">
            <BsPatchCheck className="real-estate-component-icon" /> Verified
          </div>
          <div className="real-estate-luxury-container">
            <LuCrown /> Luxury
          </div>
        </div>
        <div className="featured-listings-card-footer">
          <h3 className="real-estate-component-cost">&#8377; {cost}</h3>
          <p className="location">
            <HiOutlineLocationMarker /> {location}
          </p>
        </div>
      </div>
      <div className="featured-listings-content-container">
        <h3 className="featured-listings-title">{title}</h3>
        <div className="real-estate-component-justify-container">
          <p className="featured-listings-time">
            <MdOutlineRemoveRedEye />
            {views}
          </p>
          <p className="real-estate-component-name">{category}</p>
        </div>
        <div className="real-estate-component-btn-container">
          <Link
            to={`/product/${id}`}
            className="real-estate-component-enquire-btn"
          >
            View Details
          </Link>
          <div className="real-estate-component-favorite-btn">
            <GrFavorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateComponentCard;
