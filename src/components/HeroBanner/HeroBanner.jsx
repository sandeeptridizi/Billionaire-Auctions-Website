import './HeroBanner.css';

import { RiSearchLine } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa6';
import { BsPatchCheck } from 'react-icons/bs';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div className='search-icon-container'>
        <RiSearchLine className='search-icon' />
        <input
          type='text'
          placeholder='Search for luxury items...'
          className='search-input'
        />
      </div>
      <div className='hero-banner-content-container'>
        <h1 className='hero-banner-heading'>Where Luxury Meets Opportunity</h1>
        <p className='hero-banner-text'>
          India's premier platform for buying and selling luxury assets. From
          premium real estate to exclusive collectibles, discover authenticated
          luxury items trusted by discerning buyers nationwide.
        </p>
        <div className='hero-banner-grid-container'>
          <div className='hero-banner-grid-item-one-container'>
            <div className='hero-banner-item-one-content-container'>
              <div className='hero-banner-item-one-active-container'>
                <p className='hero-banner-item-title'>Active Listing</p>
                <h3 className='hero-banner-item-one-heading'>5,000+</h3>
              </div>
              <div className='hero-banner-item-one-verified-container'>
                <p className='hero-banner-item-title'>Verified Sellers</p>
                <h3 className='hero-banner-item-two-heading'>2,500+</h3>
              </div>
              <div className='hero-banner-item-one-categories-container'>
                <p className='hero-banner-item-title'>Categories</p>
                <h3 className='hero-banner-item-two-heading'>8</h3>
              </div>
            </div>
            <div className='hero-banner-item-one-btn-container'>
              <button className='explore-btn'>
                <FaArrowRight /> Explore Marketplace
              </button>
              <button className='item-btn'>
                <BsPatchCheck /> List Your Item
              </button>
            </div>
          </div>
          <div className='hero-banner-grid-item-two-container'>
            <div className='limited-offer-container'>🎉 LIMITED OFFER</div>
            <div className='special-offer-container'>
              <h3 className='special-offer-heading'>6 + 6 Months Special</h3>
              <p className='special-offer-text'>
                Purchase 6 months listing and get 6 months absolutely FREE!
              </p>
            </div>

            <div className='discount-container'>
              <p className='discount-text'>Save up to</p>
              <h3 className='discount-number'>50%</h3>
            </div>
            <button className='claim-offer-btn'>Claim Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
