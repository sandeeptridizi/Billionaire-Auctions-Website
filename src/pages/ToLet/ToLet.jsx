import './ToLet.css';

import { useEffect, useMemo, useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { GrFilter } from 'react-icons/gr';
import { BsGrid3X3, BsListNested } from 'react-icons/bs';
import { IoIosList } from 'react-icons/io';
import { BsPatchCheck } from 'react-icons/bs';
import { TbCurrencyRupee } from 'react-icons/tb';

import { LuBuilding } from 'react-icons/lu';
import { CiShop } from 'react-icons/ci';
import { BsBank } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { LuCrown } from 'react-icons/lu';

import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { getToLetProducts, mapProductToCard } from '../../lib/products';

const categoryData = [
  {
    id: 1,
    icon: <FiHome />,
    title: 'Residential',
    total: '2,450+',
  },
  {
    id: 2,
    icon: <LuBuilding />,
    title: 'Office Spaces',
    total: '680+',
  },
  {
    id: 3,
    icon: <CiShop />,
    title: 'Shops',
    total: '1,230+',
  },
  {
    id: 4,
    icon: <BsBank />,
    title: 'Godowns',
    total: '450+',
  },
  {
    id: 5,
    icon: <GrLocation />,
    title: 'Open Plotsw',
    total: '890+',
  },
  {
    id: 6,
    icon: <LuBuilding />,
    title: 'PGs & Hotels',
    total: '2,420+',
  },
  {
    id: 7,
    icon: <LuCrown />,
    title: 'Luxury Coliving',
    total: '185+',
  },
  {
    id: 8,
    icon: <FiHome />,
    title: 'Others',
    total: '780+',
  },
];

const categoryBtns = [
  {
    id: 1,
    text: '2 BHK',
  },
  {
    id: 2,
    text: '3 BHK',
  },
  {
    id: 3,
    text: '4 BHK',
  },
  {
    id: 4,
    text: '5+ BHK',
  },
  {
    id: 5,
    text: 'Fully Furnished',
  },
  {
    id: 6,
    text: 'Semi Furnished',
  },
  {
    id: 7,
    text: 'Pet Friendly',
  },
  {
    id: 8,
    text: 'With Parking',
  },
];

const propertiesData = [];

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const list = await getToLetProducts();
        const mapped = list.map((product) => {
          const card = mapProductToCard(product);
          return {
            id: card.id,
            image: card.image,
            cost:
              typeof product.value === 'number'
                ? `${product.value.toLocaleString('en-IN')} /month`
                : 'Price on request',
            location: product.meta?.city || product.meta?.location || 'Unspecified',
            bhk: product.meta?.bhk || '',
            tubs: product.meta?.baths || '',
            squareFeet: product.meta?.area || '',
            deposit: product.meta?.deposit || '',
            available: product.meta?.availableFrom || '',
            category: product.meta?.furnishing || '',
            views: '',
            title: card.title,
          };
        });
        setProperties(mapped);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to load to-let products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProperties = useMemo(() => {
    if (!search) return properties;
    return properties.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [properties, search]);

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
              placeholder='Search for luxury items...'
              className='buy-now-input'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className='buy-now-filter-container'>
            <button className='buy-now-filter-btn'>
              <GrFilter /> Filters
            </button>
            <div className='buy-now-icons-container'>
              <div className='buy-now-grid-icon-container'>
                <BsGrid3X3 />
              </div>
              <div className='buy-now-list-icon-container'>
                <IoIosList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='to-let-page-category-container'>
        <h2 className='to-let-page-category-heading'>Browse by Category</h2>
        <p className='to-let-page-category-text'>
          Find properties based on your requirement
        </p>
        <div className='to-let-page-category-grid-container'>
          {categoryData.map((item) => {
            const { id, icon, title, total } = item;
            return (
              <div className='to-let-grid-item-container' key={id}>
                <div className='to-let-grid-item'>{icon}</div>
                <p className='to-let-grid-item-title'>{title}</p>
                <p className='to-let-grid-item-total'>{total}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='to-let-quick-filters-container'>
        <h3 className='quick-filters-heading'>Quick Filters:</h3>
        {categoryBtns.map((item) => (
          <div className='quick-filters-btn' key={item.id}>
            {item.text}
          </div>
        ))}
      </div>
      <div className='to-let-properties-container'>
        <div className='property-header'>
          <h2 className='property-heading'>Available Properties</h2>
          <p className='property-text'>10 properties found</p>
        </div>
        <div className='property-grid-container'>
          {(loading && properties.length === 0 ? propertiesData : filteredProperties).map(
            (item) => (
              <PropertyCard key={item.id} {...item} />
            ),
          )}
        </div>
      </div>
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
