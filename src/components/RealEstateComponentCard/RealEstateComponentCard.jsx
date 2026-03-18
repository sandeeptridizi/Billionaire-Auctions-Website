import './RealEstateComponentCard.css';

import { MdVerified } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { getFile } from '../../lib/s3';
import useAppContext from '../../context/AppContext';

const RealEstateComponentCard = ({
  id,
  title,
  image,
  cost,
  location,
  views,
  category,
  tier,
}) => {
  const { toggleWishlist, isWishlisted } = useAppContext();
  const wishlisted = isWishlisted(id);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id);
  };

  return (
    <Link to={`/product/${id}`} className='productviewlink' >
    <div className="featured-listings-card-container">
      <div className="featured-listings-card-image-container">
        <img src={getFile(image)} alt={title} className="featured-img" />
        <div className="featured-listings-card-header">
          <div className="real-estate-card-icon-container">
            <MdVerified className="real-estate-component-icon" /> Verified
          </div>
          <div className="real-estate-luxury-container">
            <FaCrown /> {tier ? tier.charAt(0) + tier.slice(1).toLowerCase() : 'General'}
          </div>
        </div>
        <button
          className={`card-wishlist-btn${wishlisted ? ' card-wishlist-btn--active' : ''}`}
          onClick={handleWishlist}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {wishlisted ? <MdFavorite /> : <MdFavoriteBorder />}
        </button>
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
      </div>
    </div>
    </Link>
  );
};

export default RealEstateComponentCard;
