import './Wishlist.css';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import useAppContext from '../../context/AppContext';
import RealEstateComponentCard from '../../components/RealEstateComponentCard/RealEstateComponentCard';
import { mapProductToCard } from '../../lib/products';

const Wishlist = () => {
  const { products, wishlist } = useAppContext();
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
          {wishlisted.map((product) => {
            const card = mapProductToCard(product);
            return <RealEstateComponentCard key={card.id} {...card} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
