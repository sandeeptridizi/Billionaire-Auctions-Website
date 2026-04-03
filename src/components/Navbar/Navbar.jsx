import './Navbar.css';
import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobeBold } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import { FaRegHeart } from "react-icons/fa";
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiShoppingBag, FiTarget, FiMessageSquare } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';

import companyLogo from '../../assets/company-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useAppContext, { COUNTRIES } from '../../context/AppContext';
import { getToken, getUser, logout as doLogout } from '../../lib/auth';
import { getFile } from '../../lib/s3';

const USER_APP_URL = import.meta.env.VITE_USER_APP_URL || 'https://user.billionaireauction.com';

const avatarMenuItems = [
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

const Navbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
  const handleClick = (e) => {

    // ✅ Avatar dropdown close
    if (avatarRef.current && !avatarRef.current.contains(e.target)) {
      setAvatarOpen(false);
    }

    // ✅ Browse dropdown close
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsBrowseLinksOpen(false);
    }

  };

  document.addEventListener('mousedown', handleClick);
  return () => document.removeEventListener('mousedown', handleClick);
}, []);

  const [open, setOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const avatarRef = useRef(null);
  const navigate = useNavigate();
  const { wishlist, selectedCountry, setSelectedCountry, countryLabel } = useAppContext();

  useEffect(() => {
    const handleClick = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMenuClick = (path) => {
    const token = getToken();
    const url = `${USER_APP_URL}${path}?authtoken=${encodeURIComponent(token)}`;
    window.open(url, '_blank');
    setAvatarOpen(false);
  };

  const handleLogout = () => {
    doLogout();
    setAvatarOpen(false);
    navigate('/');
  };

  const handleSelect = (value) => {
    setSelectedCountry(value);
    setOpen(false);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-logo-links-container'>
        <Link to='/'>
          <img
            src={companyLogo}
            alt='Billionaire Auction Website'
            className='company-logo'
          />
        </Link>
        <ul className='nav-links-container'>
          <li>
            <Link to='marketplace'>Marketplace</Link>
          </li>
          <li>
            <Link to='buy-now'>Buy Now</Link>
          </li>
          <li>
            <Link to='auctions'>Auctions</Link>
          </li>
          <li>
            <Link to='to-let'>To-Let</Link>
          </li>
          <li className='browse-link' ref={dropdownRef}>
            <div onClick={() => setIsBrowseLinksOpen(prev => !prev)}> Browse <FaAngleDown /></div>
            {isBrowseLinksOpen && (
              <div className='browse-links-container'>
                <Link to='browse/about-us' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>About Us</span>
                </Link>
                <Link to='browse/pricing-plans' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Pricing</span>
                </Link>
                <Link to='browse/buy-sell' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>FAQ's</span>
                </Link>
                <Link to='browse/advertise' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Advertise</span>
                </Link>
                <Link to='browse/our-partners' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Our Partners</span>
                </Link>
                <Link to='browse/our-services' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Services</span>
                </Link>
                <Link to='/contact-us' onClick={() => setIsBrowseLinksOpen(false)}>
                  <span>Contact Us</span>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className='nav-btns-container'>
        <div className="country-selector"><button className="country-btn" onClick={() => setOpen(!open)} > <PiGlobeBold className="globe-icon" /> {countryLabel} </button>
        {open && (
          <div className="country-dropdown">
            {COUNTRIES.map((c) => (
              <div
                key={c.value}
                className={`country-option${c.value === selectedCountry ? ' selected' : ''}`}
                onClick={() => handleSelect(c.value)}
              >
                {c.label}
              </div>
            ))}
          </div>
        )}</div>
        <Link to='wishlist' className='nav-wishlist-btn'>
          <FaRegHeart className='nav-wishlist-icon' />
          {wishlist.length > 0 && (
            <span className='nav-wishlist-badge'>{wishlist.length}</span>
          )}
        </Link>
        {getToken() ? (
          <div className='nav-avatar-wrapper' ref={avatarRef}>
            <div className={`nav-avatar ${getUser()?.profilePicture ? 'nav-avatar-has-pic' : ''}`} onClick={() => setAvatarOpen(!avatarOpen)}>
              {getUser()?.profilePicture ? (
                <img src={getFile(getUser().profilePicture)} alt='Profile' className='nav-avatar-img' />
              ) : (
                getInitials(getUser()?.name)
              )}
            </div>
            {avatarOpen && (
              <div className='nav-avatar-dropdown'>
                <div className='nav-avatar-dropdown-header'>
                  <p className='nav-avatar-dropdown-name'>{getUser()?.name || 'User'}</p>
                  <p className='nav-avatar-dropdown-email'>{getUser()?.email || ''}</p>
                </div>
                <div className='nav-avatar-dropdown-divider' />
                {avatarMenuItems.map((item) => (
                  <div
                    key={item.id}
                    className='nav-avatar-dropdown-item'
                    onClick={() => handleMenuClick(item.path)}
                  >
                    {item.icon} {item.title}
                  </div>
                ))}
                <div className='nav-avatar-dropdown-divider' />
                <div className='nav-avatar-dropdown-item nav-avatar-logout' onClick={handleLogout}>
                  <MdLogout /> Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to='/sign-up' className='list-btn'>List/Sell Item</Link>
            <Link to='/sign-in' className='login-btn'>
              <RxPerson /> Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
