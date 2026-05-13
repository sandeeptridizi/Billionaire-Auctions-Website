import './ExclusiveUpdates.css';
import { useState } from 'react';
import api from '../../lib/api';

import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa6';

const ExclusiveUpdates = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) return;
    setLoading(true);
    setStatus(null);
    try {
      const res = await api.post('/api/newsletter/subscribe', { email: email.trim() });
      setStatus({ type: 'success', message: res.data?.message || 'Successfully subscribed!' });
      setEmail('');
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to subscribe. Please try again.';
      setStatus({ type: 'error', message: msg });
    } finally {
      setLoading(false);
    }
  };

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
                type='email'
                placeholder='Enter your email address'
                className='email-input'
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus(null); }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              />
            </div>
            <button className='exclusive-btn' onClick={handleSubscribe} disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe Now'} {!loading && <FaArrowRight />}
            </button>
          </div>
          {status && (
            <p className={status.type === 'success' ? 'subscribe-success-msg' : 'subscribe-error-msg'}>
              {status.message}
            </p>
          )}
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
