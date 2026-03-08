import './ExclusiveUpdates.css';

import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';

const ExclusiveUpdates = () => {
  return (
    <div className='exclusive-updates-background'>
      <div className='exclusive-updates-content-container'>
        <div className='exclusive-updates-tag'>
          <IoNotificationsOutline className='notification-icon' /> Exclusive
          Updates
        </div>
        <h1 className='exclusive-updates-heading'>
          Never Miss a{' '}
          <span className='exclusive-updates-sub-heading'>Luxury Deal</span>
        </h1>
        <p className='exclusive-updates-text'>
          Subscribe to our newsletter and get early access to exclusive
          listings, private sales, and premium items.
        </p>
        <div className='exclusive-email-subscribe-btn-container'>
          <div className='exclusive-email-btn-container'>
            <div className='exclusive-email-icon-container'>
              <MdOutlineMailOutline className='email-icon' />
              <input
                type='text'
                placeholder='Enter your email address'
                className='email-input'
              />
            </div>
            <button className='exclusive-btn'>
              Subscribe Now <FaArrowRight />
            </button>
          </div>
          <div className='exclusive-updates-highlights-container'>
            <div className='exclusive-hightlight-container'>
              <div className='yellow-circle'></div> Weekly Highlights
            </div>
            <div className='exclusive-hightlight-container'>
              <div className='yellow-circle'></div> Exclusive Previews
            </div>
            <div className='exclusive-hightlight-container'>
              <div className='yellow-circle'></div> VIP Events
            </div>
          </div>
        </div>
        <p className='exclusive-updates-footer-text'>
          Join <span className='exclusive-number'>50,000+</span> luxury
          collectors. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default ExclusiveUpdates;
