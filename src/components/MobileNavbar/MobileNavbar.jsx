import './MobileNavbar.css';

import companyLogo from '../../assets/company-logo.png';
import { Link } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { RiHandbagLine } from 'react-icons/ri';
import { RiAuctionLine } from 'react-icons/ri';
import { BsShopWindow } from 'react-icons/bs';
import { VscGlobe } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';
import { GrLocation } from 'react-icons/gr';
import { GrFavorite } from 'react-icons/gr';
import { GoPerson } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';

const MobileNavbar = () => {
  return (
    <div className='mobile-navbar-container'>
      <div className='mobile-nav-logo-links-container'>
        <Link to='/'>
          <img src={companyLogo} alt='company logo' className='mobile-logo' />
        </Link>
        <div className='mobile-nav-links-container'>
          <Link to='marketplace'>
            <div className='mobile-nav-link-container'>
              <BsShopWindow className='mobile-nav-logo' />
              <span>Marketplace</span>
            </div>
          </Link>
          <Link to='buy-now'>
            <div className='mobile-nav-link-container'>
              <RiHandbagLine className='mobile-nav-logo' />
              <span>Buy Now</span>
            </div>
          </Link>
          <Link to='auctions'>
            <div className='mobile-nav-link-container'>
              <RiAuctionLine className='mobile-nav-logo' />
              <span>Auctions</span>
            </div>
          </Link>
          <Link to='to-let'>
            <div className='mobile-nav-link-container'>
              <AiFillHome className='mobile-nav-logo' />
              <span>To-let</span>
            </div>
          </Link>
        </div>
        <div className='mobile-nav-login-burger-container'>
          <button className='mobile-country-btn'>
            <VscGlobe className='mobile-globe-icon' /> India
          </button>
          <SlMenu className='mobile-menu-icon' />
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
