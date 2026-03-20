import './MobileNavbar.css';

import companyLogo from '../../assets/company-logo.png';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

import { AiFillHome } from 'react-icons/ai';
import { RiHandbagFill } from "react-icons/ri";
import { RiAuctionFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { VscGlobe } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';
import { GrLocation } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { GoHomeFill } from 'react-icons/go';
import useAppContext, { COUNTRIES } from '../../context/AppContext';

const MobileNavbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState('');
  const { wishlist, selectedCountry, setSelectedCountry, countryLabel } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const browseMenuRef = useRef(null);
  const countryMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (browseMenuRef.current && !browseMenuRef.current.contains(e.target)) {
        setIsBrowseLinksOpen(false);
      }
      if (countryMenuRef.current && !countryMenuRef.current.contains(e.target)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);
  const hasPageSearch = ['/marketplace', '/buy-now', '/auctions', '/to-let'].some(
    (path) => location.pathname.startsWith(path)
  );
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
          <div className="mobile-country-selector" ref={countryMenuRef}>
            <button className='mobile-country-btn' onClick={() => setIsCountryOpen(!isCountryOpen)}>
              <VscGlobe className='mobile-globe-icon' /> {countryLabel}
            </button>
            {isCountryOpen && (
              <div className="country-dropdown">
                {COUNTRIES.map((c) => (
                  <div
                    key={c.value}
                    className={`country-option${c.value === selectedCountry ? ' selected' : ''}`}
                    onClick={() => { setSelectedCountry(c.value); setIsCountryOpen(false); }}
                  >
                    {c.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div ref={browseMenuRef}>
            <SlMenu className='mobile-menu-icon' onClick={() => setIsBrowseLinksOpen(!isBrowseLinksOpen)} />
            {isBrowseLinksOpen && (
              <div className='browse-links-container1'>
                <Link to='browse/our-partners' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Our Partners</span>
                </Link>
                <Link to='browse/our-services' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Services</span>
                </Link>
                <Link to='browse/about-us' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>About Us</span>
                </Link>
                <Link to='browse/pricing-plans' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Pricing</span>
                </Link>
                <Link to='browse/buy-sell' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>How to buy and sell</span>
                </Link>
                <Link to='browse/advertise' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Advertise</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='mobile-nav-search-container'>
        {!hasPageSearch && (
          <div className='mobile-search-row'>
            {location.pathname === '/' && (
              <Link to="/" className="mobile-home-link">
                <GoHomeFill className="mobile-home-icon" />
              </Link>
            )}
            <div className='mobile-search-container'>
              <FiSearch className='mobile-search-icon' />
              <input
                type='text'
                placeholder='Search...'
                className='mobile-input'
                value={mobileSearch}
                onChange={(e) => setMobileSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && mobileSearch.trim()) {
                    navigate(`/marketplace?q=${encodeURIComponent(mobileSearch.trim())}`);
                  }
                }}
              />
            </div>
          </div>
        )}
        <div className='mobile-icons-login-container'>
          {/* <GrLocation className='mobile-location-icon' /> */}
          <Link to='wishlist' className='mobile-wishlist-link'>
            <MdFavorite className='mobile-wishlist-icon' />
            {wishlist.length > 0 && (
              <span className='mobile-wishlist-badge'>{wishlist.length}</span>
            )}
          </Link>
          <Link to='https://user.billionaireauction.com' className='mobile-login-btn'>
            <GoPerson /> Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
