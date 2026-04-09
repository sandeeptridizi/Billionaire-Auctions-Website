import './Footer.css';

import { getFile } from '../../lib/s3';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { LuLinkedin } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';

import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAppContext from '../../context/AppContext';

const Footer = () => {
  const { platform } = useAppContext();
  const platformEmail = platform?.email?.[0] || 'Elite@billionaireauction.com';
  const platformPhone = platform?.phone?.[0] || '+91 78422 01879';
  const platformAddress = platform?.address || 'Izzath Nagar, Kondapur, Hyderabad, Telangana 500084';
  return (
    <div className='footer-container'>
      <div className='footer-info-links-container'>
        <div className='footer-info-container'>
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            <img src={getFile("static/logo.png")} alt='Billionaire Auction' className='company-logo1' />
           </Link>
          <p className='footer-info-text'>
            The world's premier marketplace for luxury properties, rare
            collectibles, and exceptional assets.
          </p>
          <div className='footer-icons-container'>
            <div className='footer-icon-container'>
            <a
              href="https://www.facebook.com/share/17UNQ8YEaK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook />
            </a>
          </div>

          <div className='footer-icon-container'>
            <a
              href="https://www.instagram.com/billionaireauction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <div className='footer-icon-container'>
            <a
              href="https://youtube.com/@billionaireauction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>

          <div className='footer-icon-container'>
            <a
              href="https://www.linkedin.com/company/billionaireauction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuLinkedin />
            </a>
          </div>

          </div>
        </div>
          <div className='footer-link-container'>
            <h3 className='footer-link-heading'>Quick Links</h3>
            <div className='footer-links'>
              <Link to='browse/about-us' onClick={() => window.scrollTo(0, 0)}>
                <span>About Us</span>
              </Link>
              <Link to='browse/buy-sell' onClick={() => window.scrollTo(0, 0)}>
                <span>How to buy and Sell</span>
              </Link>
              <Link to='browse/our-services' onClick={() => window.scrollTo(0, 0)}>
                <span>Our Services</span>
              </Link>
              <Link to='browse/pricing-plans' onClick={() => window.scrollTo(0, 0)}>
                <span>Pricing Plans</span>
              </Link>
              <Link to='browse/advertise' onClick={() => window.scrollTo(0, 0)}>
                <span>Advertise</span>
              </Link>
              <Link to='contact-us' onClick={() => window.scrollTo(0, 0)}>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <div className='footer-link-container'>
            <h3 className='footer-link-heading'>Categories</h3>
            <div className='footer-links'>
              <Link to='/marketplace?category=REAL_ESTATE' onClick={() => window.scrollTo(0, 0)}>
                <span>Real Estate</span>
              </Link>
              <Link to='/marketplace?category=CARS' onClick={() => window.scrollTo(0, 0)}>
                <span>Cars & Bikes</span>
              </Link>
              <Link to='/marketplace?category=FURNITURE' onClick={() => window.scrollTo(0, 0)}>
                <span>Furniture</span>
              </Link>
              <Link to='/marketplace?category=JEWELLERY_AND_WATCHES' onClick={() => window.scrollTo(0, 0)}>
                <span>Jewellery & Watches</span>
              </Link>
              <Link to='/marketplace?category=ARTS_AND_PAINTINGS' onClick={() => window.scrollTo(0, 0)}>
                <span>Arts & Paintings</span>
              </Link>
              <Link to='/marketplace?category=COLLECTABLES' onClick={() => window.scrollTo(0, 0)}>
                <span>Collectables</span>
              </Link>
              <Link to='/marketplace?category=OTHERS' onClick={() => window.scrollTo(0, 0)}>
                <span>Others</span>
              </Link>
            </div>
          </div>
        <div className='footer-link-container'>
          <h3 className='footer-link-heading'>Customer Care</h3>
          <div className='footer-contact-info-container'>
            <a href={`tel:${platformPhone.replace(/\s/g, '')}`} className='footer-icon-info-container'>
              <FiPhone className='footer-icons' /> {platformPhone}
            </a>
          </div>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <GrLocation className='footer-icons' /> {platformAddress}
            </div>
          </div>
          <div className='footer-contact-info-container'>
            <a href={`mailto:${platformEmail}`} className='footer-icon-info-container'>
              <MdMailOutline className='footer-icons' />
              {platformEmail}
            </a>
          </div>
        </div>
      </div>
      <div className='footer-copy-right-container'>
        <p className='footer-copy-right-text'>
          &copy; 2026 Billionaire Auction Pvt Ltd. All rights reserved.
        </p>
        <div className='footer-section-links-container'>
          <Link to='privacy-policy' onClick={() => window.scrollTo(0, 0)}>
            <span>Privacy Policy</span>
          </Link>
          <Link to='terms-conditions' onClick={() => window.scrollTo(0, 0)}>
            <span>Terms & Conditions</span>
          </Link>
          <Link to='refund-policy' onClick={() => window.scrollTo(0, 0)}>
            <span>Refund & Cancellation Policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
