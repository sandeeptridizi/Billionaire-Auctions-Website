import './Navbar.css';

import { FaAngleDown } from 'react-icons/fa6';
import { PiGlobeBold } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import { CiMenuBurger } from 'react-icons/ci';

import companyLogo from '../../assets/company-logo.png';
import marketplace from '../../assets/marketplace.png';
import hammer from '../../assets/hammer.png';
import sellNow from '../../assets/sell-now.png';
import toLet from '../../assets/to-let.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isBrowseLinksOpen, setIsBrowseLinksOpen] = useState(false);

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
            <Link to='to-let'>To Let</Link>
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
        <button className='country-btn'>
          <PiGlobeBold className='globe-icon' /> India
        </button>
        <button className='list-btn'>List/Sell Item</button>
        <button className='login-btn'>
          <RxPerson /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
