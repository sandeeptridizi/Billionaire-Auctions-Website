import './BillionaireAuction.css';

import { LuCrown } from 'react-icons/lu';
import { BsPatchCheck } from 'react-icons/bs';
import { SlStar } from 'react-icons/sl';
import { BsStars } from 'react-icons/bs';

const data = [
  {
    id: 1,
    icon: <BsPatchCheck />,
    title: '100% Verified',
    text: 'All listings authenticated',
  },
  {
    id: 2,
    icon: <LuCrown />,
    title: 'Exclusive Access',
    text: 'Premium collections',
  },
  {
    id: 3,
    icon: <SlStar />,
    title: 'VIP Service',
    text: 'Dedicated support team',
  },
];

const BillionaireAuction = () => {
  return (
    <div className='auction-container'>
      <h1 className='auction-heading'>
        <LuCrown /> Billionaire Auction <LuCrown />
      </h1>
      <p className='auction-text'>
        Join India's Most Exclusive Luxury Marketplace
      </p>
      <div className='experience-container'>
        <h2 className='experience-heading'>Experience Ultimate Luxury</h2>
        <p className='experience-text'>
          Join thousands of discerning buyers and sellers on India's premier
          luxury marketplace
        </p>
        <div className='experience-icon-content-container'>
          {data.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='experience-content-container' key={id}>
                <span className='auction-icon'>{icon}</span>
                <h3 className='auction-title'>{title}</h3>
                <p className='auctions-desc'>{text}</p>
              </div>
            );
          })}
        </div>
        <div className='auction-btn-container'>
          <button className='start-buying-btn'>
            <SlStar /> Start Buying Now
          </button>
          <button className='list-your-item-btn'>
            <LuCrown /> List Your Item
          </button>
        </div>
        <p className='auction-footer'>
          ✨ Special Offer: First-time sellers get{' '}
          <span className='premium-text'>FREE premium listing</span> for 30
          days!
        </p>
      </div>
    </div>
  );
};

export default BillionaireAuction;
