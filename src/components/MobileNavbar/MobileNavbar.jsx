import './MobileNavbar.css';

import companyLogo from '../../assets/company-logo.png';
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';

import { AiFillHome } from 'react-icons/ai';
import { RiHandbagFill } from "react-icons/ri";
import { RiAuctionFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { VscGlobe } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';
import { GrLocation } from 'react-icons/gr';
import { GrFavorite } from 'react-icons/gr';
import { GoPerson } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';

const MobileNavbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);
  return (
    <div className='mobile-navbar-container'>
      <div className='mobile-nav-logo-links-container'>
        <Link to='/'>
          <img src={companyLogo} alt='company logo' className='mobile-logo' />
        </Link>
        <div className='mobile-nav-links-container'>
          
          <NavLink to='marketplace' className="mobile-nav-link-container">
            <FaStore className='mobile-nav-logo' />
            <span>Marketplace</span>
          </NavLink>

          <NavLink to='buy-now' className="mobile-nav-link-container">
            <RiHandbagFill className='mobile-nav-logo' />
            <span>Buy Now</span>
          </NavLink>

          <NavLink to='auctions' className="mobile-nav-link-container">
            <RiAuctionFill className='mobile-nav-logo' />
            <span>Auctions</span>
          </NavLink>

          <NavLink to='to-let' className="mobile-nav-link-container">
            <AiFillHome className='mobile-nav-logo' />
            <span>To-let</span>
          </NavLink>

        </div>
        <div className='mobile-nav-login-burger-container'>
          <button className='mobile-country-btn'>
            <VscGlobe className='mobile-globe-icon' /> India
          </button>
          <SlMenu className='mobile-menu-icon' onClick={() => setIsBrowseLinksOpen(!isBrowseLinksOpen)} />
            {isBrowseLinksOpen && (
              <div className='browse-links-container1'>
                <Link to='browse/our-partners'>
                  <span>Our Partners</span>
                </Link>
                <Link to='browse/our-services'>
                  <span>Services</span>
                </Link>
                <Link to='browse/about-us'>
                  <span>About Us</span>
                </Link>
                <Link to='browse/pricing-plans'>
                  <span>Pricing</span>
                </Link>
                <Link to='browse/buy-sell'>
                  <span>How to buy and sell</span>
                </Link>
                <Link to='browse/advertise'>
                  <span>Advertise</span>
                </Link>
              </div>
            )}
        </div>
      </div>
      <div className='mobile-nav-search-container'>
        <div className='mobile-search-container'>
          <FiSearch className='mobile-search-icon' />
          <input type='text' placeholder='Search...' className='mobile-input' />
        </div>
        <div className='mobile-icons-login-container'>
          <GrLocation className='mobile-location-icon' />
          <GrFavorite className='mobile-location-icon' />
          <button className='mobile-login-btn'>
            <GoPerson /> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
