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
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { GoHomeFill } from 'react-icons/go';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiShoppingBag, FiTarget, FiMessageSquare } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import useAppContext, { COUNTRIES } from '../../context/AppContext';
import { getToken, getUser, logout as doLogout } from '../../lib/auth';

const USER_APP_URL = import.meta.env.VITE_USER_APP_URL || 'https://user.billionaireauction.com';

const mobileAvatarMenuItems = [
  { id: 1, icon: <LuLayoutDashboard />, title: 'Dashboard', path: '/' },
  { id: 2, icon: <FiShoppingBag />, title: 'Products', path: '/products' },
  { id: 3, icon: <FiTarget />, title: 'My Leads', path: '/myleads' },
  { id: 4, icon: <FiMessageSquare />, title: 'Enquiry', path: '/enquiry' },
  { id: 5, icon: <IoSettingsOutline />, title: 'Settings', path: '/settings' },
];

const getInitials = (name) => {
  if (!name || typeof name !== 'string') return 'U';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const MobileNavbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [mobileAvatarOpen, setMobileAvatarOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState('');
  const { wishlist, selectedCountry, setSelectedCountry, countryLabel } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const browseMenuRef = useRef(null);
  const countryMenuRef = useRef(null);
  const mobileAvatarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (browseMenuRef.current && !browseMenuRef.current.contains(e.target)) {
        setIsBrowseLinksOpen(false);
      }
      if (countryMenuRef.current && !countryMenuRef.current.contains(e.target)) {
        setIsCountryOpen(false);
      }
      if (mobileAvatarRef.current && !mobileAvatarRef.current.contains(e.target)) {
        setMobileAvatarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleMobileMenuClick = (path) => {
    const token = getToken();
    const url = `${USER_APP_URL}${path}?authtoken=${encodeURIComponent(token)}`;
    window.open(url, '_blank');
    setMobileAvatarOpen(false);
  };

  const handleMobileLogout = () => {
    doLogout();
    setMobileAvatarOpen(false);
    navigate('/');
  };
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
                <Link to='contact-us' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Contact Us</span>
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
                <GoHomeFill className="mobile-home-icon" /> Home
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
            <FaRegHeart className='mobile-wishlist-icon' />
            {wishlist.length > 0 && (
              <span className='mobile-wishlist-badge'>{wishlist.length}</span>
            )}
          </Link>
          {getToken() ? (
            <div className='mobile-avatar-wrapper' ref={mobileAvatarRef}>
              <div className='mobile-avatar' onClick={() => setMobileAvatarOpen(!mobileAvatarOpen)}>
                {getInitials(getUser()?.name)}
              </div>
              {mobileAvatarOpen && (
                <div className='mobile-avatar-dropdown'>
                  <div className='mobile-avatar-dropdown-header'>
                    <p className='mobile-avatar-dropdown-name'>{getUser()?.name || 'User'}</p>
                    <p className='mobile-avatar-dropdown-email'>{getUser()?.email || ''}</p>
                  </div>
                  <div className='mobile-avatar-dropdown-divider' />
                  {mobileAvatarMenuItems.map((item) => (
                    <div
                      key={item.id}
                      className='mobile-avatar-dropdown-item'
                      onClick={() => handleMobileMenuClick(item.path)}
                    >
                      {item.icon} {item.title}
                    </div>
                  ))}
                  <div className='mobile-avatar-dropdown-divider' />
                  <div className='mobile-avatar-dropdown-item mobile-avatar-logout' onClick={handleMobileLogout}>
                    <MdLogout /> Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to='/sign-in' className='mobile-login-btn'>
              <GoPerson /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
