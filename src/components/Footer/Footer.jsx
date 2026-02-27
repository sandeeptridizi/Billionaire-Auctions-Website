import './Footer.css';

import companyLogo from '../../assets/company-logo.png';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { LuLinkedin } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';

import { FiPhone } from 'react-icons/fi';
import { MdMailOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-info-links-container'>
        <div className='footer-info-container'>
          <Link to='/'>
            <img src={companyLogo} alt='Billionaire Auctions' className='company-logo' />
           </Link>
          <p className='footer-info-text'>
            The world's premier marketplace for luxury properties, rare
            collectibles, and exceptional assets.
          </p>
          <div className='footer-icons-container'>
            <div className='footer-icon-container'>
              <FiFacebook />
            </div>
            <div className='footer-icon-container'>
              <FaInstagram />
            </div>
            <div className='footer-icon-container'>
              <TbBrandTwitter />
            </div>
            <div className='footer-icon-container'>
              <LuLinkedin />
            </div>
          </div>
        </div>
        <div className='footer-section-grid-container'>
          <div className='footer-link-container'>
            <h3 className='footer-link-heading'>Quick Links</h3>
            <div className='footer-links'>
              <Link to='browse/about-us'>
                <span>About Us</span>
              </Link>
              <span>How It Works</span>
              <Link to='browse/our-services'>
                <span>Our Services</span>
              </Link>
              <Link to='browse/pricing-plans'>
                <span>Pricing Plans</span>
              </Link>
              <Link to='browse/advertise'>
                <span>Advertise</span>
              </Link>
              <Link to='contact-us'>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <div className='footer-link-container'>
            <h3 className='footer-link-heading'>Categories</h3>
            <div className='footer-links'>
              <span>Real Estate</span>
              <span>Cars</span>
              <span>Furniture</span>
              <span>Jewellery & Watches</span>
              <span>Arts & Paintings</span>
              <span>Collectables</span>
              <span>Others</span>
            </div>
          </div>
        </div>
        <div className='footer-link-container'>
          <h3 className='footer-link-heading'>Contact Us</h3>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <GrLocation className='footer-icons' /> Izzath Nagar, Kondapur, Hyderabad, Telangana 500084
            </div>
          </div>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <FiPhone className='footer-icons' /> +91 77310 01879
            </div>
          </div>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <MdMailOutline className='footer-icons' />{' '}
              Elite@billionaireauction.com
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copy-right-container'>
        <p className='footer-copy-right-text'>
          &copy; 2026 Billionaire Auction Pvt Ltd. All rights reserved.
        </p>
        <div className='footer-section-links-container'>
          <Link to='privacy-policy'>
            <span>Privacy Policy</span>
          </Link>
          <Link to='terms-conditions'>
            <span>Terms & Conditions</span>
          </Link>
          <Link to='refund-policy'>
            <span>Refund & Cancellation Policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
