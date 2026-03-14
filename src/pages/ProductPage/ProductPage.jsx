import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductPage.css';

import { LuCrown } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';
import { BsPatchCheck } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

import exclusiveVilla from '../../assets/exclusive-villa.jpg';
import exclusivePenthouse from '../../assets/exclusive-penthouse.jpg';

import RealEstateComponentCard from '../../components/RealEstateComponentCard/RealEstateComponentCard';
import { getPublicProducts, formatCategoryLabel, mapProductToCard } from '../../lib/products';
import { getFile } from '../../lib/s3';

const listingTypeMap = {
  marketplace: 'MARKETPLACE',
  'buy-now': 'BUY_NOW',
  auctions: 'AUCTIONS',
  'to-let': 'TO_LET',
};

const ProductPage = () => {
  const [selectedBtn, setSelectedBtn] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const { page, category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {};
        if (page && listingTypeMap[page.toLowerCase()]) {
          params.listingType = listingTypeMap[page.toLowerCase()];
        }
        if (category && category.toLowerCase() !== 'all') {
          const catKey = category.toUpperCase().replace(/[- ]/g, '_').replace(/&/g, 'AND');
          params.category = catKey;
        }
        const list = await getPublicProducts(params);
        setProducts(list);
      } catch {
        // silent fail
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category]);

  const filteredProducts = products.filter((product) => {
    const byTier =
      selectedBtn === 'Luxury'
        ? product.tier === 'LUXURY'
        : selectedBtn === 'Classic'
          ? product.tier === 'CLASSIC'
          : true;
    const bySearch = search
      ? product.title.toLowerCase().includes(search.toLowerCase())
      : true;
    return byTier && bySearch;
  });

  return (
    <div className='product-page-container'>
      <div className='product-page-search-category-container'>
        <div className='product-page-search-btn-container'>
          <div className='product-page-search-container'>
            <input
              type='text'
              placeholder='Search luxury properties, cars, arts, jewelry, watches...'
              className='product-search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className='product-page-breadcrums-category-btns-container'>
          <div className='product-page-bread-crums'>
            <Link to='/'>Home</Link> / {page} / <span className='product-category'>{category}</span>
          </div>
          <div className='buy-now-btns-container'>
            <div
              className={
                selectedBtn === 'All'
                  ? 'buy-now-btn-container active-btn'
                  : 'buy-now-btn-container'
              }
              onClick={() => setSelectedBtn('All')}
            >
              All
            </div>
            <div
              className={
                selectedBtn === 'Luxury'
                  ? 'buy-now-btn-container active-btn'
                  : 'buy-now-btn-container'
              }
              onClick={() => setSelectedBtn('Luxury')}
            >
              <LuCrown /> Luxury
            </div>
            <div
              className={
                selectedBtn === 'Classic'
                  ? 'buy-now-btn-container active-btn'
                  : 'buy-now-btn-container'
              }
              onClick={() => setSelectedBtn('Classic')}
            >
              <IoDiamondOutline /> Classic
            </div>
          </div>
        </div>
      </div>
      <div className='similar-luxury-items-container'>
        <div className='similar-luxury-items-header'>
          <h2 className='similar-luxury-items-heading'>
            {category || 'Products'} ({filteredProducts.length})
          </h2>
        </div>
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center' }}>Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p style={{ padding: '40px', textAlign: 'center' }}>No products found.</p>
        ) : (
          <div className='similar-luxury-items-grid-container'>
            {filteredProducts.map((product) => {
              const card = mapProductToCard(product);
              return (
                <div className='similar-luxury-item-container' key={product.id}>
                  <div className='luxury-item-img-container'>
                    <img
                      src={product.media?.[0] ? getFile(product.media[0]) : ''}
                      alt={product.title}
                      className='luxury-item-img'
                    />
                    <div className='luxury-item-header'>
                      <div className='luxury-item-verified-container'>
                        <BsPatchCheck className='verified-icon' /> Verified
                      </div>
                      <div className='luxury-item-luxury-container'>
                        <LuCrown /> {product.tier || 'GENERAL'}
                      </div>
                    </div>
                    <div className='luxury-item-footer'>
                      <p className='luxury-item-cost'>
                        {typeof product.value === 'number'
                          ? `₹${product.value.toLocaleString('en-IN')}`
                          : 'Price on request'}
                      </p>
                      <p className='luxury-item-location'>
                        <GrLocation /> {product.meta?.city || product.meta?.location || 'Location not specified'}
                      </p>
                    </div>
                  </div>
                  <div className='luxury-item-content-container'>
                    <h3 className='luxury-item-title'>{product.title}</h3>
                    <Link to={`/product/${product.id}`} className='luxury-item-btn'>
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className='exclusive-collection-container'>
        <div className='featured-container'>
          <div className='featured-image-container'>
            <img
              src={exclusiveVilla}
              alt='exclusive villa'
              className='featured-img'
            />
            <div className='featured-tag-container'>FEATURED</div>
          </div>
          <div className='featured-content-container'>
            <h2 className='featured-heading'>Exclusive Luxury Collection</h2>
            <p className='featured-text'>
              Discover handpicked premium items from India's most trusted luxury
              marketplace.
            </p>
            <div className='featured-footer-container'>
              <p className='featured-footer-title'>Starting from ₹50 Lac</p>
              <button className='featured-footer-btn'>
                Explore Now <LuSquareArrowOutUpRight />
              </button>
            </div>
          </div>
        </div>
        <div className='featured-container'>
          <div className='featured-image-container'>
            <img
              src={exclusivePenthouse}
              alt='exclusive villa'
              className='featured-img'
            />
            <div className='special-tag-container'>SPECIAL OFFER</div>
          </div>
          <div className='featured-content-container'>
            <h2 className='featured-heading'>List Your Item Free</h2>
            <p className='featured-text'>
              Join thousands of sellers. Zero listing fees until Jan 2027!
            </p>
            <div className='featured-footer-container'>
              <p className='featured-footer-desc'>No Commission*</p>
              <button className='featured-footer-btn'>
                List Now <LuSquareArrowOutUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='product-page-footer-container'>
        <h2 className='product-page-footer-heading'>
          <LuCrown className='product-footer-icon' /> Join Billionaire Auction
          Premium
        </h2>
        <p className='product-footer-text'>
          Get exclusive access to luxury offline auctions, verified elite items,
          and personalized concierge services.
        </p>
        <div className='product-footer-btn-container'>
          <button className='featured-footer-btn'>
            Explore Now <LuSquareArrowOutUpRight />
          </button>
          <button className='product-footer-btn'>
            View Premium Plans <LuSquareArrowOutUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
