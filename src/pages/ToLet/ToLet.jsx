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

import RealEstateComponentCard from '../../components/RealEstateComponentCard/RealEstateComponentCard';
import { getToLetProducts, mapProductToCard, categoryOrder, formatCategoryLabel } from '../../lib/products';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

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
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const list = await getToLetProducts();
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
  }, []);

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
    const entries = Array.from(map.entries()).sort((a, b) => {
      const aIdx = categoryOrder.indexOf(a[0]);
      const bIdx = categoryOrder.indexOf(b[0]);
      return (aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx) - (bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx);
    });
    if (selectedCategory !== 'all') {
      const selected = entries.find(([catKey]) => catKey === selectedCategory);
      return selected ? [selected] : [];
    }
    return entries;
  }, [filteredProperties, selectedCategory]);

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
      {loading ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>Loading properties...</p>
      ) : groupedCategories.length === 0 ? (
        <p style={{ padding: '40px', textAlign: 'center' }}>No properties found.</p>
      ) : (
        groupedCategories.map(([catKey, items]) => (
          <div className='to-let-properties-container' key={catKey}>
            <div className='property-header'>
              <h2 className='property-heading'>{formatCategoryLabel(catKey)}</h2>
              {selectedCategory === 'all' ? (
                <div className='real-estate-component-view-btn' onClick={() => setSelectedCategory(catKey)} style={{ cursor: 'pointer' }}>
                  View All ({items.length}) <HiOutlineArrowSmRight />
                </div>
              ) : (
                <div className='real-estate-component-view-btn'>
                  {items.length} {items.length === 1 ? 'Property' : 'Properties'} <HiOutlineArrowSmRight />
                </div>
              )}
            </div>
            <div className='real-estate-component-grid-container'>
              {(selectedCategory === 'all' ? items.slice(0, 3) : items).map((item) => (
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
