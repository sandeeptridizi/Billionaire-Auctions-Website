import './BuyAndSell.css';
import { useNavigate } from "react-router-dom";

import { FiShoppingBag } from 'react-icons/fi';
import { LuTag } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa6';

const BuyAndSell = () => {
  const navigate = useNavigate();

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
          Browse luxury and classic items available for immediate purchase from verified sellers. Our team manages enquiries, verification, site visits, and documentation to ensure a secure transaction.
        </p>
        <div className='buy-list-container'>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Verified Listings
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Site Viewing Support
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Documentation Assistance
          </div>
          <div className='buy-list-item-container'>
            <span
              className='dot'
              style={{ background: 'rgba(255, 255, 255, 1)' }}
            ></span>{' '}
            Secure Transaction Process
          </div>
        </div>
        <button
          className='buy-btn'
          style={{ backgroundColor: '#fff', color: 'rgba(212, 175, 55, 1)' }} onClick={() => navigate("/buy-now")}

        >
          Browse Buy Now items <FaArrowRight />
        </button>
      </div>
      <div
        className='buy-container'
        style={{
          background: 'linear-gradient(180deg, #999999 0%, #8a8a8a 100%)',
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
          Join our elite network of sellers. <br></br>List your luxury items and reach
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
          style={{ color: '#fff', backgroundColor: 'rgba(212, 175, 55, 1)' }} onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}
        >
          Start Selling Today <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BuyAndSell;
