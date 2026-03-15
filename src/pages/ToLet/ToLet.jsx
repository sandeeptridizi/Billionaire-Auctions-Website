import './ToLet.css';

import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { BsPatchCheck } from 'react-icons/bs';
import { TbCurrencyRupee } from 'react-icons/tb';
import { LuCrown } from 'react-icons/lu';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

import RealEstateComponentCard from '../../components/RealEstateComponentCard/RealEstateComponentCard';
import { getToLetProducts, mapProductToCard, categoryOrder, formatCategoryLabel } from '../../lib/products';
import useAppContext from '../../context/AppContext';

const categoryToSlug = (catKey) => catKey.toLowerCase().replace(/_/g, '-');

const rentsData = [
  {
    id: 1,
    icon: <BsPatchCheck />,
    title: 'Verified Properties',
    text: 'All properties are verified and authentic',
  },
  {
    id: 2,
    icon: <LuCrown />,
    title: 'Luxury Collection',
    text: 'Exclusive premium properties only',
  },
  {
    id: 3,
    icon: <FiHome />,
    title: 'Quick Processing',
    text: 'Fast approval and move-in process',
  },
  {
    id: 4,
    icon: <TbCurrencyRupee />,
    title: 'Transparent Pricing',
    text: 'No hidden charges or fees',
  },
];

const ToLet = () => {
  const [search, setSearch] = useState('');
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedCountry } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const list = await getToLetProducts({ country: selectedCountry });
        const mapped = list.map((product) => ({
          ...mapProductToCard(product),
          rawCategory: product.category,
        }));
        setProperties(mapped);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load to-let products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCountry]);

  const filteredProperties = useMemo(() => {
    if (!search) return properties;
    const matchedCategory = categoryOrder.find((cat) =>
      formatCategoryLabel(cat).toLowerCase().includes(search.toLowerCase()),
    );
    if (matchedCategory) {
      return properties.filter((item) => item.rawCategory === matchedCategory);
    }
    return properties.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [properties, search]);

  const groupedCategories = useMemo(() => {
    const map = new Map();
    filteredProperties.forEach((item) => {
      const key = item.rawCategory || 'OTHERS';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return Array.from(map.entries()).sort((a, b) => {
      const aIdx = categoryOrder.indexOf(a[0]);
      const bIdx = categoryOrder.indexOf(b[0]);
      return (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) - (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx);
    });
  }, [filteredProperties]);

  return (
    <div className='to-let-page-container'>
      <div className='to-let-page-background'>
        <h1 className='to-let-heading'>
          <FiHome className='to-let-home-icon' /> Premium Properties To-Let
        </h1>
        <p className='to-let-text'>
          Find your perfect luxury rental property in India's top cities
        </p>
      </div>
      <div className='buy-now-categories-container'>
        <div className='buy-now-search-filter-container'>
          <div className='buy-now-search-container'>
            <IoSearch className='buy-now-search-icon' />
            <input
              type='text'
              placeholder='Search for rental properties...'
              className='buy-now-input'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='buy-now-filter-container'>
            <Link to='/products/to-let/all' className='buy-now-filter-btn'>
              View All <HiOutlineArrowSmRight />
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>Loading properties...</p>
      ) : groupedCategories.length === 0 ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>No properties found.</p>
      ) : (
        groupedCategories.map(([catKey, items]) => (
          <div className='to-let-properties-container' key={catKey}>
            <div className='property-header'>
              <h2 className='property-heading'>{formatCategoryLabel(catKey)}</h2>
              <Link to={`/products/to-let/${categoryToSlug(catKey)}`} className='real-estate-component-view-btn'>
                View All ({items.length}) <HiOutlineArrowSmRight />
              </Link>
            </div>
            <div className='real-estate-component-grid-container'>
              {items.slice(0, 3).map((item) => (
                <RealEstateComponentCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))
      )}
      <div className='to-let-rent-us-container'>
        <h2 className='rent-us-heading'>Why Rent With Us?</h2>
        <p className='rent-us-text'>
          Premium rental experience for luxury properties
        </p>
        <div className='rent-us-grid-container'>
          {rentsData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='rent-us-grid-item-container' key={id}>
                <div className='rent-us-item-icon-container'>{icon}</div>
                <h3 className='rent-us-item-title'>{title}</h3>
                <p className='rent-us-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToLet;
