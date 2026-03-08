import './HowToBuyAndSell.css';

import { GoPerson } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { LuCamera } from 'react-icons/lu';
import { LuCircleCheckBig } from 'react-icons/lu';

const buyData = [
  {
    id: 1,
    icon: <GoPerson />,
    title: 'Sign Up & Verify',
    text: 'Create your account and complete verification for secure transactions',
  },
  {
    id: 2,
    icon: <FiSearch />,
    title: 'Browse & Search',
    text: 'Explore our curated collection of luxury items across multiple categories',
  },
  {
    id: 3,
    icon: <LuShoppingCart />,
    title: 'Purchase',
    text: 'Buy instantly or participate in auctions. Secure payment & delivery guaranteed',
  },
];

const sellData = [
  {
    id: 1,
    icon: <GoPerson />,
    title: 'Register as Seller',
    text: 'Complete seller verification and choose your pricing plan',
  },
  {
    id: 2,
    icon: <LuCamera />,
    title: 'List Your Item',
    text: 'Add photos, description, and pricing. We offer professional photography services',
  },
  {
    id: 3,
    icon: <LuCircleCheckBig />,
    title: 'Sell & Ship',
    text: 'Receive inquiries, close deals, and ship with our white glove delivery service',
  },
];

const HowToBuyAndSell = () => {
  return (
    <div className='how-it-works-container'>
      <div className='how-it-works-background'>
        <h1 className='how-it-works-heading'>How to Buy & Sell</h1>
        <p className='how-it-works-text'>
          Your complete guide to luxury transactions
        </p>
      </div>
      <div className='how-to-buy-container'>
        <h2 className='how-to-buy-heading'>How to Buy</h2>
        <div className='how-to-buy-grid-container'>
          {buyData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='how-to-buy-item-container' key={id}>
                <div className='how-to-buy-item-icon-container'>{icon}</div>
                <h2 className='step'>Step {id}</h2>
                <h3 className='how-to-buy-item-title'>{title}</h3>
                <p className='how-to-buy-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='how-to-sell-container'>
        <h2 className='how-to-buy-heading'>How to Sell</h2>
        <div className='how-to-buy-grid-container'>
          {sellData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='how-to-sell-item-container' key={id}>
                <div className='how-to-sell-item-icon-container'>{icon}</div>
                <h2 className='sell-step'>Step {id}</h2>
                <h3 className='how-to-buy-item-title'>{title}</h3>
                <p className='how-to-buy-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='safety-tips-container'>
        <h2 className='safety-tips-heading'>Safety Tips</h2>
        <div className='safety-tips-list-container'>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Always verify
            seller credentials and ratings
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Use our secure
            payment system - never transfer money outside the platform
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Request
            certificate of authenticity for high-value items
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Meet in public
            places for local pickups
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Report suspicious
            activity immediately
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Read item
            descriptions and terms carefully before purchasing
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyAndSell;
