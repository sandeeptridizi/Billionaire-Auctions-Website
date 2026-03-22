import './Footer.css';

import companyLogo from '../../assets/company-logo.png';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
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
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            <img src={companyLogo} alt='Billionaire Auctions' className='company-logo1' />
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
        <div className='footer-section-grid-container'>
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
              <span>Real Estate</span>
              <span>Cars & Bikes</span>
              <span>Furniture</span>
              <span>Jewellery & Watches</span>
              <span>Arts & Paintings</span>
              <span>Collectables</span>
              <span>Others</span>
            </div>
          </div>
        </div>
        <div className='footer-link-container'>
          <h3 className='footer-link-heading'>Customer Care</h3>
          <div className='footer-contact-info-container'>
            <a href="tel:+917842201879" className='footer-icon-info-container'>
              <FiPhone className='footer-icons' /> +91 78422 01879
            </a>
            <a href="tel:+917842501879" className='footer-icon-info-container'>
              <FiPhone className='footer-icons' /> +91 78425 01879
            </a>
          </div>
          <div className='footer-contact-info-container'>
            <div className='footer-icon-info-container'>
              <GrLocation className='footer-icons' /> Izzath Nagar, Kondapur, Hyderabad, Telangana 500084
            </div>
          </div>
          <div className='footer-contact-info-container'>
            <a href="mailto:Elite@billionaireauction.com" className='footer-icon-info-container'>
              <MdMailOutline className='footer-icons' />
              Elite@billionaireauction.com
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
