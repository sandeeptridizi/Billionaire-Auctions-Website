import './BrowseByCategory.css';

import { LuHouse } from 'react-icons/lu';
import { LuCar } from 'react-icons/lu';
import { TbSofa } from 'react-icons/tb';
import { IoDiamondOutline } from 'react-icons/io5';
import { MdOutlinePalette } from 'react-icons/md';
import { LuCrown } from 'react-icons/lu';
import { BsBoxSeam } from 'react-icons/bs';
import { BsStars } from 'react-icons/bs';
import { useState } from 'react';

const btns = [
  {
    id: 1,
    icon: <LuHouse />,
    title: 'Real Estate',
    name: 'realEstate',
  },
  {
    id: 2,
    icon: <LuCar />,
    title: 'Cars',
    name: 'cars',
  },
  {
    id: 3,
    icon: <TbSofa />,
    title: 'Furniture',
    name: 'furniture',
  },
  {
    id: 4,
    icon: <IoDiamondOutline />,
    title: 'Jewellery & Watches',
    name: 'jewellery',
  },
  {
    id: 5,
    icon: <MdOutlinePalette />,
    title: 'Arts & Paintings',
    name: 'arts',
  },
  {
    id: 6,
    icon: <LuCrown />,
    title: 'Antiques',
    name: 'antiques',
  },
  {
    id: 7,
    icon: <BsBoxSeam />,
    title: 'Collectables',
    name: 'collectables',
  },
  {
    id: 8,
    icon: <BsStars />,
    title: 'Others',
    name: 'others',
  },
];

const BrowseByCategory = () => {
  const [category, setCategory] = useState(btns[0].name);

  return (
    <div className='browse-category-container'>
      <div className='browse-category-header'>
        <h2 className='browse-category-heading'>Browse by Category</h2>
        <p className='browse-category-text'>
          Click on a category icon to explore premium products
        </p>
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
    </div>
  );
};

export default BrowseByCategory;
