import './BillionaireAuction.css';
import { useNavigate } from "react-router-dom";

import { FaCrown } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi2';
import companyLogo from '../../assets/Billionaire auction.png';

const data = [
  {
    id: 1,
    icon: <MdVerified />,
    title: '100% Verified',
    text: 'All listings authenticated',
  },
  {
    id: 2,
    icon: <FaCrown />,
    title: 'Exclusive Access',
    text: 'Premium collections',
  },
  {
    id: 3,
    icon: <HiSparkles />,
    title: 'VIP Service',
    text: 'Dedicated support team',
  },
];

const BillionaireAuction = () => {
  const navigate = useNavigate();

  return (
    <div className='auction-container'>
      <img src={companyLogo} alt='Billionaire Auction' className='company-logo2' />
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
          <button className='start-buying-btn' onClick={() => navigate("/marketplace")}>
            <HiSparkles /> Start Buying Now
          </button>
          <button className='list-your-item-btn' onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
            <FaCrown /> List Your Item
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
