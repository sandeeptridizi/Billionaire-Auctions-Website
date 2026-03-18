import './Wishlist.css';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaCrown } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import useAppContext from '../../context/AppContext';
import { getFile } from '../../lib/s3';
import CardMetaGrid from '../../components/CardMetaGrid/CardMetaGrid';

const Wishlist = () => {
  const { products, wishlist, toggleWishlist } = useAppContext();
  const wishlisted = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1 className="wishlist-heading">
          <MdFavorite className="wishlist-heart-icon" /> My Wishlist
        </h1>
        <p className="wishlist-count">{wishlisted.length} saved item{wishlisted.length !== 1 ? 's' : ''}</p>
      </div>

      {wishlisted.length === 0 ? (
        <div className="wishlist-empty">
          <MdFavorite className="wishlist-empty-icon" />
          <h2>Your wishlist is empty</h2>
          <p>Heart any product to save it here.</p>
          <Link to="/marketplace" className="wishlist-browse-btn">Browse Marketplace</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlisted.map((product) => (
            <div key={product.id} className="wishlist-card">
              <Link to={`/product/${product.id}`} className="wishlist-card-link">
                <div className="wishlist-card-image-container">
                  <img
                    src={product.media?.[0] ? getFile(product.media[0]) : ''}
                    alt={product.title}
                    className="wishlist-card-img"
                  />
                  <div className="wishlist-card-badges">
                    <div className="wishlist-verified-badge">
                      <MdVerified /> Verified
                    </div>
                    <div className="wishlist-luxury-badge">
                      <FaCrown /> {product.tier || 'Luxury'}
                    </div>
                  </div>
                  <div className="wishlist-card-price-bar">
                    <span className="wishlist-price">
                      {typeof product.value === 'number'
                        ? `₹${product.value.toLocaleString('en-IN')}`
                        : 'Price on request'}
                    </span>
                    <span className="wishlist-location">
                      <HiOutlineLocationMarker /> {product.meta?.city || product.meta?.location || 'N/A'}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="wishlist-card-body">
                <h3 className="wishlist-card-title card-title-single-line">{product.title}</h3>
                <CardMetaGrid categoryKey={product.category} meta={product.meta || {}} />
                <div className="wishlist-card-footer">
                  <Link to={`/product/${product.id}`} className="wishlist-view-btn">
                    View Details
                  </Link>
                  <button
                    className="wishlist-remove-btn"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Remove from wishlist"
                  >
                    <MdFavorite /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
