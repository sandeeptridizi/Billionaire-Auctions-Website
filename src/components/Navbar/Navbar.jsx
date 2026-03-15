import './Navbar.css';
import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobeBold } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import { MdFavorite } from 'react-icons/md';

import companyLogo from '../../assets/company-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAppContext, { COUNTRIES } from '../../context/AppContext';

const Navbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { wishlist, selectedCountry, setSelectedCountry, countryLabel } = useAppContext();

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
            alt='Billionaire Auctions Website'
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
          <li
            className='browse-link'
            onClick={() => setIsBrowseLinksOpen(!isBrowseLinksOpen)}
          >
            Browse <FaAngleDown />
            {isBrowseLinksOpen && (
              <div className='browse-links-container'>
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
          <MdFavorite className='nav-wishlist-icon' />
          {wishlist.length > 0 && (
            <span className='nav-wishlist-badge'>{wishlist.length}</span>
          )}
        </Link>
        <button className='list-btn' onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>List/Sell Item</button>
        <button className='login-btn' onClick={() => window.open("https://user.billionaireauction.com/", "_blank")}>
          <RxPerson /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
