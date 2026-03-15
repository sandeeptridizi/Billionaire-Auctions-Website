import './Navbar.css';
import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobeBold } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import { MdFavorite } from 'react-icons/md';

import companyLogo from '../../assets/company-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAppContext from '../../context/AppContext';

const Navbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);
  const { wishlist } = useAppContext();

  const countries = ["India", "United States", "United Kingdom", "Canada", "Australia", "Singapore", "Dubai", "Malaysia", "Qatar", "Saudi Arabia", "Switzerland", "Kuwait"];

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [open, setOpen] = useState(false);

  const handleSelect = (country) => {
    setSelectedCountry(country);
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
        <div className="country-selector"><button className="country-btn" onClick={() => setOpen(!open)} > <PiGlobeBold className="globe-icon" /> {selectedCountry} </button>
        {open && (
          <div className="country-dropdown">
            {countries.map((country, index) => (
              <div
                key={index}
                className="country-option"
                onClick={() => handleSelect(country)}
              >
                {country}
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
