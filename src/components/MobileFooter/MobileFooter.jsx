import './MobileFooter.css';

import { LuCrown } from 'react-icons/lu';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';

import marketPlace from '../../assets/marketplace.png';
import sellNow from '../../assets/sell-now.png';
import hammer from '../../assets/hammer.png';
import tolet from '../../assets/to-let.png';
import { useState } from 'react';

const MobileFooter = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='mobile-footer-container'>
      <div className='mobile-footer-luxury-container'>
        <LuCrown /> Luxury
      </div>
      <div className='mobile-footer-list-item-container'>List Item</div>
      <div className='mobile-footer-luxury-container'>
        <IoDiamondOutline /> Classic
      </div>
      <div
        className='mobile-footer-plus-container'
        onClick={() => setShowLinks(!showLinks)}
      >
        <FaPlus />
      </div>
      {showLinks && (
        <div className='mobile-footer-links-container'>
          <div className='market-container'>
            <img src={marketPlace} alt='market place' className='market-img' />
            Marketplace
          </div>
          <div className='sell-container'>
            <img src={sellNow} alt='market place' className='market-img' />
            Sell Now
          </div>
          <div className='hammer-container'>
            <img src={hammer} alt='market place' className='market-img' />
            Auctions
          </div>
          <div className='tolet-container'>
            <img src={tolet} alt='market place' className='market-img' />
            To Let
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFooter;
