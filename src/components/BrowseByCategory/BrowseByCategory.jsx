import './BrowseByCategory.css';

import { LuHouse } from 'react-icons/lu';
import { LuCar } from 'react-icons/lu';
import { TbSofa } from 'react-icons/tb';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlinePalette } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa6';
import { BsBoxSeam } from 'react-icons/bs';
import { BsStars } from 'react-icons/bs';
import { useState } from 'react';
import useAppContext from '../../context/AppContext';
import RealEstateComponentCard from '../RealEstateComponentCard/RealEstateComponentCard';
import { mapProductToCard } from '../../lib/products';

const KNOWN_CATEGORIES = [
  'REAL_ESTATE', 'CARS', 'BIKES', 'FURNITURE',
  'JEWELLERY_AND_WATCHES', 'ARTS_AND_PAINTINGS', 'ANTIQUES', 'COLLECTABLES',
];

const CATEGORY_MAP = {
  realEstate: 'REAL_ESTATE',
  cars: ['CARS', 'BIKES'],
  furniture: 'FURNITURE',
  jewellery: 'JEWELLERY_AND_WATCHES',
  arts: 'ARTS_AND_PAINTINGS',
  antiques: 'ANTIQUES',
  collectables: 'COLLECTABLES',
  others: null, // special: everything not in known categories
};

const btns = [
  { id: 1, icon: <LuHouse />, title: 'Real Estate', name: 'realEstate' },
  { id: 2, icon: <LuCar />, title: 'Cars & Bikes', name: 'cars' },
  { id: 3, icon: <TbSofa />, title: 'Furniture', name: 'furniture' },
  { id: 4, icon: <IoDiamond />, title: 'Jewellery & Watches', name: 'jewellery' },
  { id: 5, icon: <MdOutlinePalette />, title: 'Arts & Paintings', name: 'arts' },
  { id: 6, icon: <FaCrown />, title: 'Antiques', name: 'antiques' },
  { id: 7, icon: <BsBoxSeam />, title: 'Collectables', name: 'collectables' },
  { id: 8, icon: <BsStars />, title: 'Others', name: 'others' },
];

const BrowseByCategory = () => {
  const [category, setCategory] = useState(btns[0].name);
  const { products } = useAppContext();

  const apiCategory = CATEGORY_MAP[category];
  const filtered = products.filter((p) => {
    if (apiCategory === null) {
      return !KNOWN_CATEGORIES.includes(p.category);
    }
    if (Array.isArray(apiCategory)) {
      return apiCategory.includes(p.category);
    }
    return p.category === apiCategory;
  });

  return (
    <div className='browse-category-container'>
      <div className='browse-category-header'>
        <h2 className='browse-category-heading'>Browse by Category</h2>
      </div>
      <div className='browse-category-btns-container'>
        {btns.map((btn) => {
          const { id, icon, title, name } = btn;
          return (
            <div className='browse-category-btn-container' key={id}>
              <div
                className={
                  category === name
                    ? 'browse-category-icon-container category-active-btn'
                    : 'browse-category-icon-container'
                }
                onClick={() => setCategory(name)}
              >
                {icon}
              </div>
              <p className='browse-category-title'>{title}</p>
            </div>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className='browse-category-products-grid'>
          {filtered.slice(0, 3).map((product) => {
            const card = mapProductToCard(product);
            return <RealEstateComponentCard key={card.id} {...card} />;
          })}
        </div>
      ) : (
        <p className='browse-category-empty'>No products found in this category.</p>
      )}
    </div>
  );
};

export default BrowseByCategory;
