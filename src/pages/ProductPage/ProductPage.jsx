import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductPage.css';

import { FaCrown } from 'react-icons/fa6';
import { IoDiamond } from 'react-icons/io5';
import { LuSquareArrowOutUpRight, LuSlidersHorizontal } from 'react-icons/lu';

import RealEstateComponentCard from '../../components/RealEstateComponentCard/RealEstateComponentCard';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import { getPublicProducts, formatCategoryLabel, mapProductToCard } from '../../lib/products';
import useProductFilters from '../../hooks/useProductFilters';
import useAppContext from '../../context/AppContext';

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
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const { selectedCountry } = useAppContext();

  const { page, category } = useParams();

  const listingType = page ? listingTypeMap[page.toLowerCase()] : undefined;
  const categoryKey =
    category && category.toLowerCase() !== 'all'
      ? category.toUpperCase().replace(/[- ]/g, '_').replace(/&/g, 'AND')
      : null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const params = { country: selectedCountry };
        if (listingType) params.listingType = listingType;
        if (categoryKey) params.category = categoryKey;
        const list = await getPublicProducts(params);
        setProducts(list);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category, selectedCountry, listingType, categoryKey]);

  const {
    filters,
    filteredProducts: metaFilteredProducts,
    setFilter,
    clearAllFilters,
    activeFilterCount,
    filterDefs,
  } = useProductFilters(products, categoryKey, listingType);

  const filteredProducts = metaFilteredProducts.filter((product) => {
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
  }).sort((a, b) => {
    if (listingType !== 'AUCTIONS') return 0;
    const aDate = a.meta?.auctionDate || a.meta?.date || '';
    const bDate = b.meta?.auctionDate || b.meta?.date || '';
    const aIsTBA = !aDate || aDate === 'TBA';
    const bIsTBA = !bDate || bDate === 'TBA';
    if (aIsTBA && bIsTBA) return 0;
    if (aIsTBA) return 1;
    if (bIsTBA) return -1;
    return new Date(aDate) - new Date(bDate);
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
          <button
            className='mobile-filter-toggle-btn'
            onClick={() => setFilterDrawerOpen(true)}
          >
            <LuSlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className='filter-count-badge'>{activeFilterCount}</span>
            )}
          </button>
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
              <FaCrown /> Luxury
            </div>
            <div
              className={
                selectedBtn === 'Classic'
                  ? 'buy-now-btn-container active-btn'
                  : 'buy-now-btn-container'
              }
              onClick={() => setSelectedBtn('Classic')}
            >
              <IoDiamond /> Classic
            </div>
          </div>
        </div>
      </div>

      <div className='product-page-content-layout'>
        <FilterSidebar
          filterDefs={filterDefs}
          products={products}
          filters={filters}
          onFilterChange={setFilter}
          onClearAll={clearAllFilters}
          activeFilterCount={activeFilterCount}
          isOpen={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(false)}
        />

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
                  <RealEstateComponentCard key={product.id} {...card} />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className='product-page-footer-container'>
        <h2 className='product-page-footer-heading'>
          <FaCrown className='product-footer-icon' /> Join Billionaire Auction
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
