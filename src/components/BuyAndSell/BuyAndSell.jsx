import './BuyAndSell.css';

import { FiShoppingBag } from 'react-icons/fi';
import { LuTag } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa6';

const BuyAndSell = () => {
  return (
    <div className='buy-sell-container'>
      <div
        className='buy-container'
        style={{ backgroundColor: 'rgba(212, 175, 55, 1' }}
      >
        <div className='buy-icon-content-container'>
          <div
            className='buy-icon-container'
            style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
          >
            <FiShoppingBag />
          </div>
          <h2 className='buy-heading'>Buy Now</h2>
        </div>
        <p className='buy-text'>
          Browse and purchase luxury items instantly. Explore our exclusive
          collection available for immediate sale from verified sellers.
        </p>
        <div className='buy-list-container'>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Verified Authenticity
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Secure Payment
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            White Glove Delivery
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Premium Insurance
          </div>
        </div>
        <button
          className='buy-btn'
          style={{ backgroundColor: '#fff', color: 'rgba(212, 175, 55, 1)' }}
        >
          Browse Buy Now items <FaArrowRight />
        </button>
      </div>
      <div
        className='buy-container'
        style={{
          background: 'linear-gradient(180deg, #2C2C2C 0%, #1A1A1A 100%)',
        }}
      >
        <div className='buy-icon-content-container'>
          <div
            className='buy-icon-container'
            style={{
              background: 'rgba(212, 175, 55, 0.2)',
              color: 'rgba(212, 175, 55, 1)',
            }}
          >
            <LuTag />
          </div>
          <h2 className='buy-heading'>Sell With Us</h2>
        </div>
        <p className='buy-text'>
          Join our elite network of sellers. List your luxury items and reach
          high-net-worth buyers worldwide.
        </p>
        <div className='buy-list-container'>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(212, 175, 55, 1)' }}
            ></span>{' '}
            Expert Valuation
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(212, 175, 55, 1)' }}
            ></span>{' '}
            Global Exposure
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(212, 175, 55, 1)' }}
            ></span>{' '}
            Professional Photography
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(212, 175, 55, 1)' }}
            ></span>{' '}
            Dedicated Support
          </div>
        </div>
        <button
          className='buy-btn'
          style={{ color: '#fff', backgroundColor: 'rgba(212, 175, 55, 1)' }}
        >
          Start Selling Today <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BuyAndSell;
